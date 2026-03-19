# Go_TOFU Knowledge Base

This repository contains a cleaned, GitHub-friendly knowledge base converted from a Notion export.

## Repository Layout

- `docs/` - normalized Markdown knowledge base (primary content for browsing)
- `assets/notion/` - centralized assets referenced by docs (images, PDFs, CSVs)
- `updates/` - ongoing updates and changelogs
- `templates/` - reusable templates for new documentation entries
- `Private & Shared 2/` - original Notion export preserved as source archive
- `.github/` - workflows and repository templates
- `scripts/` - utility scripts for repeatable maintenance

## Start Here

- [Knowledge Base Index](docs/index.md)
- [Updates Log](updates/README.md)
- [Contributing Guide](CONTRIBUTING.md)

## Section Navigation

- [Overview](docs/overview/README.md)
- [Team and Roles](docs/team-and-roles/README.md)
- [Tasks Tracker Sprint 3](docs/tasks-tracker-sprint-3/README.md)
- [GoTFu Tasks](docs/gotfu-tasks/README.md)
- [Competitor Analysis](docs/competitor-analysis-agile-engineering-2/README.md)
- [Interview Pipeline](docs/product-manager-interview-pipeline/README.md)
- [Interview Notes (Fabian)](docs/customer-interview-summary-fabian-tech-pod-capt/README.md)
- [Interview Notes (Stefan)](docs/customer-interview-summary-stefan-product-owner/README.md)
- [Interview Notes (Goncalo)](docs/costumer-inteview-goncalo-deus/README.md)
- [Interview Notes (Maxime)](docs/costumer-inteview-maxime-hitachi-rail/README.md)

## Maintenance Workflow

1. Add or update files in `docs/` and `assets/notion/`.
2. Add a short entry to `updates/weekly/` or `updates/daily/`.
3. Open a pull request using the PR template.
4. Ensure CI passes (`markdownlint` + link checks).

## Regenerating From Notion Export

If you import a new Notion export into `Private & Shared 2/Agile Engineering - Go_TOFU`, run:

`python3 scripts/restructure_notion_export.py`

This rebuilds `docs/` and `assets/notion/` from the raw export.

## Optional Local Docs Site (MkDocs)

If you want a browsable local site:

1. `python3 -m pip install mkdocs`
2. `mkdocs serve`
3. Open `http://127.0.0.1:8000`
