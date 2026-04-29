# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Build / Tooling

- Updated to Node 24
- Updated to latest plugin build tooling
- Added cspell configuration
- Added coverage to CI test script
- Migrated eslint.config.js to ESM (eslint.config.mjs) with type-aware linting and deprecation warnings
- Updated push workflow Grafana dependency range to >=10.1 and enabled dev image
- Updated README requirements to match Grafana 11.6 minimum

### Code Quality

- Fixed spelling errors
- Fixed markdownlint errors across markdown files
- Added markdownlint-cli rule to AGENTS.md
- Added no AI attribution rule to AGENTS.md
- Replaced Volkov Labs Atom feed fixture with Grafana Labs feed
- Fixed review issues: depends_on required, healthcheck rate limiting, trailing whitespace

### E2E / Docker

- Fixed Playwright E2E Docker configuration
- Fixed E2E tests to use local xml-server instead of external URLs
- Added xml-server healthcheck and Grafana dependency in docker-compose
- Added Google Workspace Atom feed to xml-server for provisioning test
- Added rate limiting to xml-server
- Updated xml-server to Express 5, removed unnecessary npm packages (fs, path, kill-port)
  from xml-server/package.json
- Fixed missing radix parameter in xml-server parseInt call
- Optimized test/Dockerfile: added .dockerignore, layered COPY for npm ci cache, replaced deprecated
  `npm install --only=dev` with `npm ci --omit=prod`, removed redundant browser install already
  present in Playwright base image
- Synced test/Dockerfile base image to mcr.microsoft.com/playwright:v1.59.1-noble

### Dependencies

- Updated @grafana/plugin-e2e to 3.6.1
- Updated @grafana/plugin-e2e to 3.4.12, cspell to 10.0.0, prettier to 3.8.2, webpack to 5.106.1
- Updated @swc/core to 1.15.32, eslint-plugin-react-hooks to 7.1.1, markdownlint-cli2 to 0.22.1,
  prettier to 3.8.3, webpack to 5.106.2
- Updated glob to 13.0.6
- Pinned @playwright/test to 1.59.1
- Removed unused packages: @types/node, tsconfig-paths, @stylistic/eslint-plugin
- Added cspell and markdownlint-cli2 as devDependencies
