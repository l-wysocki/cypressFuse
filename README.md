# CypressFuse
![CypressFuse](https://www.lukaszwysocki.com/assets/img/cypressFuseGH.png)
### Flexible Cypress Testing Template with Cucumber, Gherkin, TypeScript, Visual Regression, Sitemap, and API Testing - Empowering Test Automation for All

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/) ![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555) ![Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fl-wysocki%2FCypressFuse%2Fmain%2Fpackage.json&query=%24.version&label=Version) ![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/l-wysocki/CypressFuse/linter.yml)



This Cypress project is an end-to-end testing framework that utilizes Cucumber for writing test scenarios in a human-readable language. Test results are reported using the mochawesome reporter, which generates detailed and visually appealing reports. The project also includes pre-defined steps, which are reusable building blocks that can be used to create new test scenarios. Browserstack integration allows the tests to be run on a variety of different browsers and operating systems, ensuring maximum compatibility. Additionally, the project includes sitemap testing, which verifies that all pages on the website are accessible, and visual and lighthouse testing, which checks the website's visual design and performance.
In addition to the above, the project also features:

- ESLint integration for linting TypeScript code, helping to identify and fix code style and formatting issues
- Prettier integration for formatting code to adhere to a consistent style, based on the project's configuration
- Esbuild integration, to speed up the build process and reduce bundle size
- VSCode integration for linting, formatting and bundling features from within the editor, for developers to use efficiently.

## Features

- Pre-defined E2E step definitions
- Integrated Mochawesome reporter
- Visual, Lighthouse and sitemap testing
- Prettier & ESLint integration
- Esbuild integration
- VSCode recommended settings
- TypeScript configuration added

## Requirements

- NodeJS v18.0 or above
- Node Package Manager (NPM) v7.10.0 or above
- Python v3.7 or above

## Installation

Clone project repository:

```bash
git clone git@github.com:l-wysocki/cypressFuse.git
```

Go to the project directory:

```bash
cd cypressFuse
```

Install dependencies with npm:

```bash
npm install
```

## Run locally

Open Cypress with UI:

```bash
npm run cy:open
```

Run Cypress headless:

```bash
npm run cy:run
```

## Additional commands

Lint your code:
```bash
npm run lint
```

Apply Prettier:
```bash
npm run  prettier
```

## Documentation

For more detailed documentation please visit [documentation directory](/docs/) in this repository

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](/LICENSE.md)
