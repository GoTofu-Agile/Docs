# Contributing

Thanks for helping maintain this knowledge base.

## Editing Tool

- Use **Obsidian** as the default editor for all documentation updates.
- Open the repository root as an Obsidian vault.
- Edit files directly in `docs/`, `updates/`, and `templates/`.

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
- Do not edit files under `Private & Shared 2/` directly.

## Required PR Content

- What changed
- Why it changed
- Validation performed
- Follow-up work (if any)

## Collaboration Standard

1. Edit in Obsidian.
2. Commit focused changes on a feature branch.
3. Open a pull request and request review.
4. Merge after checks pass.
