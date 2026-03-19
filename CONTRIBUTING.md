# Contributing

Thanks for helping maintain this knowledge base.

## Branch and PR Workflow

1. Create a branch from `main`.
2. Make focused changes.
3. Run checks locally:
   - `npx markdownlint-cli2 "**/*.md"`
4. Open a pull request with context and links.

## Content Guidelines

- Prefer clear filenames in `kebab-case`.
- Keep pages concise and scannable.
- Use relative links for internal navigation.
- Store binary files in `assets/notion/` and link from docs.
- Keep raw export content in `Private & Shared 2/` unchanged.

## Required PR Content

- What changed
- Why it changed
- Validation performed
- Follow-up work (if any)

## When Importing New Notion Exports

1. Replace source files under `Private & Shared 2/Agile Engineering - Go_TOFU`.
2. Run: `python3 scripts/restructure_notion_export.py`
3. Review generated diffs in `docs/` and `assets/notion/`.
4. Submit PR.
