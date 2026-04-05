# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Grafana datasource plugin (ID: `volkovlabs-rss-datasource`) that fetches and parses RSS/Atom feeds into Grafana DataFrames. Deprecated in favor of the Infinity datasource but still maintained. Requires Grafana >=10.1.0.

## Commands

| Task | Command |
|------|---------|
| Dev build (watch) | `npm run dev` |
| Production build | `npm run build` |
| Tests (watch) | `npm test` |
| Tests (CI, full) | `npm run test:ci` |
| Single test by name | `npm test -- --testNamePattern="pattern"` |
| Lint | `npm run lint` |
| Lint + fix + format | `npm run lint:fix` |
| Type check | `npm run typecheck` |
| E2E tests | `npm run test:e2e` |
| Start dev environment | `npm run start` (Docker Compose with Grafana + plugin) |
| Spell check | `npx cspell "**/*.{ts,tsx,js,jsx,json,md}"` |

Node 24 required (see `.nvmrc`).

## Architecture

**Entry point:** `src/module.ts` registers `DataSource`, `ConfigEditor`, and `QueryEditor` with Grafana's DataSourcePlugin.

**Data flow:**
1. `ConfigEditor` — user configures RSS feed URL
2. `QueryEditor` — user selects feed type (Channel/Items/All), optional date field filter, custom parameters
3. `DataSource.query()` — processes requests, substitutes Grafana dashboard variables via `getTemplateSrv().replace()`
4. `Api.getFeed()` — fetches XML through Grafana's backend proxy (`/feed` route in plugin.json), parses with `fast-xml-parser`
5. Returns DataFrames: one for channel metadata, one for feed items. Supports RSS 1.0 (RDF), RSS 2.0, and Atom formats

**Key design details:**
- Feed fetches go through Grafana's backend proxy (plugin.json `/feed` route) for CORS/auth handling — never direct browser requests
- XML parsing uses custom array handling (`ALWAYS_ARRAY` constant) to normalize RSS/RDF/Atom format differences
- Nested field extraction handles meta tags, `content:encoded` HTML parsing (h4, images), and `media:group` (YouTube)
- Items can be filtered by time range when a date field is specified

## Key Types (`src/types.ts`)

- `Query` — feedType (channel/items/all), dateField, params array
- `DataSourceOptions` — feed URL string
- `FeedItems` / `DataItem` — parsed feed data structures
- `KeyConfig` — maps field names with keyAccessor/valueAccessor for nested XML paths

## Testing

**Unit tests (Jest):** Colocated `*.test.ts`/`*.test.tsx` files. Mock `@grafana/runtime` with `jest.mock()`. API tests use inline XML response strings and Observable/RxJS mocking.

**E2E tests (Playwright):** Uses `@grafana/plugin-e2e` framework. Runs against Docker Compose stack with a local Express XML server (`xml-server/`) serving test feeds.

## Config File Conventions

Files in `.config/` are Grafana plugin scaffolding marked "DO NOT EDIT." Extend behavior through root-level config files (`.eslintrc`, `jest.config.js`, `tsconfig.json`, etc.) that inherit from `.config/`.
