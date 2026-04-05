# AGENTS.md — Business News Data Source Plugin

> Grafana datasource plugin (ID: `volkovlabs-rss-datasource`) that fetches and parses RSS/Atom feeds into Grafana DataFrames.
> Deprecated in favor of the Infinity datasource but still maintained. Requires Grafana >=10.1.0.

## Build / Lint / Test Commands

```bash
# Build
npm run build                  # Production webpack build
npm run dev                    # Dev build with watch mode

# Lint & Format
npm run lint                   # ESLint (flat config, TS-aware)
npm run lint:fix               # ESLint with auto-fix + Prettier
npm run typecheck              # TypeScript type-check (tsc --noEmit)

# Unit Tests (Jest + @testing-library/react)
npm test                       # Watch mode, only changed files
npm run test:ci                # CI mode with coverage (--maxWorkers 4)
npx jest src/api/api.test.ts               # Run a single test file
npx jest --testPathPattern="QueryEditor"   # Run tests matching a pattern
npx jest -t "Should find component"        # Run a single test by name

# E2E Tests (Playwright + @grafana/plugin-e2e)
npm run test:e2e               # Headless Playwright
npm run test:e2e:dev           # Playwright UI mode
npm run test:e2e:docker        # Full Docker Compose (Grafana + tests)

# Local Development
npm run start                  # Start Grafana via Docker Compose (dev profile)
npm run stop                   # Stop Docker containers

# Spell check
npx cspell "**/*.{ts,tsx,js,jsx,json,md,yaml,yml}"
```

Node version: **24** (see `.nvmrc`). Minimum supported: `>=24`.

## Project Structure

```text
src/
├── module.ts                  # Plugin entry point
├── plugin.json                # Plugin manifest
├── types.ts                   # TypeScript interfaces and enums
├── utils.ts                   # Pure utility functions
├── utils.test.ts              # Utility tests
├── api/                       # Feed fetching and XML parsing
├── components/                # React components (one directory each)
│   ├── ConfigEditor/          # Data source configuration
│   ├── QueryEditor/           # Query options editor
│   └── ParametersEditor/      # Custom parameters editor
├── constants/                 # Shared constants and test IDs
├── datasource/                # DataSource class implementation
└── img/                       # Plugin icons
test/                          # Playwright E2E tests
.config/                       # Grafana scaffolded config (DO NOT EDIT)
provisioning/                  # Grafana provisioning for local dev
```

## Architecture

**Entry point:** `src/module.ts` registers `DataSource`, `ConfigEditor`, and `QueryEditor` with Grafana's DataSourcePlugin.

**Data flow:**

1. `ConfigEditor` — user configures RSS feed URL
2. `QueryEditor` — user selects feed type (Channel/Items/All), optional date field filter, custom parameters
3. `DataSource.query()` — processes requests, substitutes Grafana dashboard variables via `getTemplateSrv().replace()`
4. `Api.getFeed()` — fetches XML through Grafana's backend proxy (`/feed` route in plugin.json), parses with `fast-xml-parser`
5. Returns DataFrames: one for channel metadata, one for feed items. Supports RSS 1.0 (RDF), RSS 2.0, and Atom formats

**Key design details:**

- Feed fetches go through Grafana's backend proxy (plugin.json `/feed` route)
  for CORS/auth handling — never direct browser requests
- XML parsing uses custom array handling (`ALWAYS_ARRAY` constant) to normalize RSS/RDF/Atom format differences
- Nested field extraction handles meta tags, `content:encoded` HTML parsing (h4, images), and `media:group` (YouTube)
- Items can be filtered by time range when a date field is specified

## Key Types (`src/types.ts`)

- `Query` — feedType (channel/items/all), dateField, params array
- `DataSourceOptions` — feed URL string
- `FeedItems` / `DataItem` — parsed feed data structures
- `KeyConfig` — maps field names with keyAccessor/valueAccessor for nested XML paths

## Code Style Guidelines

### Formatting (Prettier)

- Print width: **120**
- Single quotes, no JSX single quotes
- Trailing commas: `es5`
- Semicolons: always
- 2-space indentation, no tabs
- End of line: `auto`

### Imports

Three groups separated by blank lines, each group alphabetized:

1. **External packages** — `@emotion/css`, `@grafana/*`, `react`, `fast-xml-parser`, etc.
2. **Internal absolute imports** — relative paths from `src/` (`../../constants`, `../../types`)
3. **Sibling/local imports** — `./ConfigEditor.styles`, `../QueryEditor`

### Naming Conventions

| Element             | Convention                              | Example                                      |
| ------------------- | --------------------------------------- | -------------------------------------------- |
| Component files     | `PascalCase.tsx`                        | `ConfigEditor.tsx`                           |
| Style files         | `ComponentName.styles.ts`               | `ConfigEditor.styles.ts`                     |
| Test files          | `ComponentName.test.tsx`                | `ConfigEditor.test.tsx`                      |
| Utility files       | `kebab-case.ts`                         | `utils.ts`                                   |
| Constants           | `SCREAMING_SNAKE_CASE`                  | `TEST_IDS`, `ALWAYS_ARRAY`                   |
| Enums               | PascalCase name, SCREAMING_SNAKE values | `enum FeedType { ALL = 'all' }`              |
| Interfaces          | PascalCase                              | `Query`, `DataSourceOptions`                 |
| Functions/variables | camelCase                               | `getFeed`, `getTemplateSrv`                  |
| Barrel exports      | Every directory has `index.ts`          | `export * from './ConfigEditor'`             |

### TypeScript

- Use **enums** (not string unions) for option types (`FeedType`, `FeedTypeValue`).
- Use **interfaces** for component props and options objects.
- Prefer explicit generics: `useState<DataItem[]>([])`.

### React Components

- **Functional components only** with arrow functions.
- Styles via `@emotion/css` + Grafana's `useStyles2(getStyles)` pattern.
- All testable elements must use `data-testid={TEST_IDS.section.element}`.
- Centralized test IDs live in `src/constants/tests.ts`.

### Error Handling

- Use **try/catch** in async effects; store errors in state.
- Display errors with Grafana's `<Alert severity="error">` component.

### Testing Patterns (Jest + Testing Library)

- Mock external modules at file top: `jest.mock('@grafana/runtime')`.
- Use `describe`/`it` blocks.
- Assert with `screen.getByTestId(TEST_IDS.xxx.yyy)`.
- Clean up in `beforeEach`/`afterAll` with `jest.clearAllMocks()` / `jest.resetAllMocks()`.
- API tests use inline XML response strings and Observable/RxJS mocking.

### Key Dependencies

| Package                                            | Purpose                                     |
| -------------------------------------------------- | ------------------------------------------- |
| `fast-xml-parser`                                  | XML/RSS/Atom feed parsing                   |
| `@grafana/data`, `@grafana/ui`, `@grafana/runtime` | Grafana plugin SDK                          |

### ESLint

Flat config (ESLint 9) extending `@grafana/eslint-config`
and `eslint-config-prettier`. Test files, mocks, config
files, and server dirs are excluded from linting.

### Additional Rules

- `no-console` and `no-debugger` are errors
- Unused variables are errors (except rest siblings)

### CI/CD

- **CI** (`.github/workflows/ci.yml`): Runs on push to `main` and all PRs. Lints, tests, builds, signs, and uploads artifacts.
- **E2E** (`.github/workflows/e2e.yml`): End-to-end Playwright tests.
- **Release** (`.github/workflows/release.yml`): Release workflow.
- The `.config/` directory is **scaffolded by Grafana** — do not edit files in it.

## Critical Rules

- **Do not use `volkovlabs.io` URLs** anywhere in the
  codebase. This project was forked from Volkov Labs
  and all references should point to Grafana equivalents
  (e.g., `grafana.com`).
- **Never modify anything inside `.config/`** —
  managed by Grafana plugin tooling.
- **Never change `id` or `type`** in `src/plugin.json`.
- Changes to `plugin.json` require a
  **Grafana server restart**.
- Use webpack from `.config/` for builds;
  do not add a custom bundler.
- Use `@grafana/plugin-e2e` for E2E tests.
- Grafana API docs:
  <https://grafana.com/developers/plugin-tools/llms.txt>
- **Always run cspell** after making changes:
  `npx cspell "**/*.{ts,tsx,js,jsx,json,md,yaml,yml}"`
  and fix any issues before committing. Add new words
  to `cspell.config.json` if they are legitimate.
- **Always run markdownlint-cli** on markdown files
  before committing:
  `npx markdownlint-cli2 AGENTS.md README.md CHANGELOG.md`
  and fix any issues before committing.
- **Always update `CHANGELOG.md` before committing.**
  Every commit must include the corresponding changelog
  entry. Do not commit code changes without first updating
  the changelog in the same commit.
- **NEVER commit unless the user explicitly asks.**
  Do not commit as part of completing a task.
- **NEVER push unless the user explicitly asks.**
  Do not push as part of completing a task.
  Never chain `git commit && git push` in one command.
  Always wait for the user to explicitly ask to push.
- **After pushing, always update the PR summary** if a
  PR exists for the current branch. Treat push and PR
  update as an atomic pair — never stop between them.
  Use `gh pr edit` to update the title and body with
  well-formatted text that reflects all changes across
  the entire branch.
- **Prefer subagents** for research, code exploration,
  and multi-step work. Use the Task tool with
  `explore` or `general` agents rather than running
  many search/read commands directly. Launch multiple
  agents in parallel when tasks are independent.

## Changelog Policy

**Always update `CHANGELOG.md` when making changes.** Every commit that
modifies code, documentation, dependencies, or configuration must have a
corresponding entry in the changelog under the current unreleased version
section. Add entries as part of the same commit or as a follow-up commit
before pushing.

## Branching Policy

- **Never commit directly to `main`**. Always create a new branch for changes.
- Use descriptive branch names (e.g., `feat/add-feature`, `fix/bug-description`).
- When pushing new commits to a PR, always update the PR summary to reflect all
  changes.
- **Always create pull requests as drafts**
  (`gh pr create --draft`).

## Important

Always create a branch before making any changes. Never commit directly to `main`.

Do not add a `Co-Authored-By` line to commit messages.

When checking out a branch or `main`, always `git fetch` and `git pull` to ensure you have the latest changes.
