#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import os
import re
import shutil
import unicodedata
from pathlib import Path
from urllib.parse import unquote


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "Private & Shared 2" / "Agile Engineering - Go_TOFU"
DOCS = ROOT / "docs"
ASSETS = ROOT / "assets" / "notion"

MD_EXTS = {".md", ".mdx"}
ASSET_EXTS = {
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".webp",
    ".pdf",
    ".csv",
    ".xlsx",
    ".xls",
    ".pptx",
    ".docx",
    ".txt",
}


def slugify(value: str) -> str:
    value = value.strip()
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")
    value = re.sub(r"\s+[0-9a-f]{32}$", "", value, flags=re.IGNORECASE)
    value = value.replace("&", " and ")
    value = re.sub(r"[^a-zA-Z0-9]+", "-", value)
    value = re.sub(r"-{2,}", "-", value).strip("-").lower()
    return value or "untitled"


def clean_title(stem: str) -> str:
    stem = re.sub(r"\s+[0-9a-f]{32}$", "", stem, flags=re.IGNORECASE).strip()
    return stem or "Untitled"


def top_section(src_path: Path) -> str:
    rel = src_path.relative_to(SOURCE)
    if len(rel.parts) < 2:
        return "overview"
    return slugify(rel.parts[0])


def normalize_markdown(content: str) -> str:
    lines = content.splitlines()
    cleaned = []
    for line in lines:
        if line.strip() == "[https://www.notion.so](https://www.notion.so)":
            continue
        cleaned.append(line.rstrip())
    text = "\n".join(cleaned)
    text = re.sub(r"\n{3,}", "\n\n", text).strip() + "\n"
    return text


def ensure_unique(path: Path) -> Path:
    if not path.exists():
        return path
    stem = path.stem
    suffix = path.suffix
    idx = 2
    while True:
        candidate = path.with_name(f"{stem}-{idx}{suffix}")
        if not candidate.exists():
            return candidate
        idx += 1


def copy_asset(src: Path, asset_map: dict[Path, Path]) -> Path:
    if src in asset_map:
        return asset_map[src]
    rel = src.relative_to(SOURCE)
    section = slugify(rel.parts[0]) if rel.parts else "misc"
    name = slugify(src.stem)
    short_hash = hashlib.sha1(str(rel).encode("utf-8")).hexdigest()[:8]
    target = ASSETS / section / f"{name}-{short_hash}{src.suffix.lower()}"
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, target)
    asset_map[src] = target
    return target


def rewrite_links(
    text: str,
    src_path: Path,
    target_md: Path,
    md_map: dict[Path, Path],
    asset_map: dict[Path, Path],
) -> str:
    pattern = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")

    def replace(match: re.Match[str]) -> str:
        label, raw_link = match.group(1), match.group(2).strip()
        if raw_link.startswith(("http://", "https://", "mailto:", "#")):
            return match.group(0)

        decoded = unquote(raw_link).split("#", 1)[0]
        fragment = ""
        if "#" in raw_link:
            fragment = "#" + raw_link.split("#", 1)[1]

        candidate = (src_path.parent / decoded).resolve()
        if candidate in md_map:
            rel = Path(
                *target_md.parent.relative_to(ROOT).parts
            )  # used only for type symmetry
            _ = rel
            link = os.path.relpath(md_map[candidate], start=target_md.parent).replace("\\", "/")
            return f"[{label}]({link}{fragment})"

        if candidate.exists() and candidate.suffix.lower() in ASSET_EXTS:
            asset_target = copy_asset(candidate, asset_map)
            link = os.path.relpath(asset_target, start=target_md.parent).replace("\\", "/")
            return f"[{label}]({link}{fragment})"

        return match.group(0)

    return pattern.sub(replace, text)


def main() -> None:
    if not SOURCE.exists():
        raise SystemExit(f"Source folder not found: {SOURCE}")

    if DOCS.exists():
        shutil.rmtree(DOCS)
    if ASSETS.exists():
        shutil.rmtree(ASSETS)

    DOCS.mkdir(parents=True, exist_ok=True)
    ASSETS.mkdir(parents=True, exist_ok=True)

    md_files = sorted([p for p in SOURCE.rglob("*") if p.suffix.lower() in MD_EXTS and p.is_file()])

    md_map: dict[Path, Path] = {}
    section_index: dict[str, list[tuple[str, Path]]] = {}

    for src in md_files:
        section = top_section(src)
        section_dir = DOCS / section
        section_dir.mkdir(parents=True, exist_ok=True)
        file_slug = slugify(clean_title(src.stem))
        target = ensure_unique(section_dir / f"{file_slug}.md")
        md_map[src.resolve()] = target
        section_index.setdefault(section, []).append((clean_title(src.stem), target))

    asset_map: dict[Path, Path] = {}

    for src in md_files:
        source_text = src.read_text(encoding="utf-8", errors="ignore")
        cleaned = normalize_markdown(source_text)
        target = md_map[src.resolve()]
        rewritten = rewrite_links(cleaned, src.resolve(), target, md_map, asset_map)
        title = clean_title(src.stem)
        header = [
            "---",
            f"title: {title}",
            f"source: {src.relative_to(ROOT)}",
            "---",
            "",
        ]
        target.write_text("\n".join(header) + rewritten, encoding="utf-8")

    # Copy all known asset files even when unreferenced to preserve export completeness.
    for file_path in SOURCE.rglob("*"):
        if file_path.is_file() and file_path.suffix.lower() in ASSET_EXTS:
            copy_asset(file_path.resolve(), asset_map)

    # Section-level navigation.
    for section, entries in section_index.items():
        readme = DOCS / section / "README.md"
        lines = [f"# {section.replace('-', ' ').title()}", "", "## Pages", ""]
        for title, page in sorted(entries, key=lambda i: i[0].lower()):
            rel = page.relative_to(readme.parent).as_posix()
            lines.append(f"- [{title}]({rel})")
        lines.append("")
        readme.write_text("\n".join(lines), encoding="utf-8")

    # Root docs index.
    index = DOCS / "index.md"
    lines = ["# Knowledge Base Index", "", "## Sections", ""]
    for section in sorted(section_index):
        lines.append(f"- [{section.replace('-', ' ').title()}]({section}/README.md)")
    lines.append("")
    index.write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    main()
