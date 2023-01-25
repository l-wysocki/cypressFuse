# Cypress & Cucumber testing template

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

This Cypress project is an end-to-end testing framework that utilizes Cucumber for writing test scenarios in a human-readable language. Test results are reported using the mochawesome reporter, which generates detailed and visually appealing reports. The project also includes pre-defined steps, which are reusable building blocks that can be used to create new test scenarios. Browserstack integration allows the tests to be run on a variety of different browsers and operating systems, ensuring maximum compatibility. Additionally, the project includes sitemap testing, which verifies that all pages on the website are accessible, and visual and lighthouse testing, which checks the website's visual design and performance.
In addition to the above, the project also features:

- ESLint integration for linting JavaScript code, helping to identify and fix code style and formatting issues
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

## Requirements

- NodeJS v18.0 or above
- Node Package Manager (NPM) v7.10.0 or above
- Python v3.7 or above

## Installation

Clone project repository:

```bash
git clone git@github.com:l-wysocki/cypress-boilerplate.git
```

Go to the project directory:

```bash
cd cypress-boilerplate
```

Install dependencies with npm:

```bash
npm install
```

## Run locally

Open Cypress with UI:

```bash
npx cypress open
```

Run Cypress headless:

```bash
npx cypress run
```

## Documentation

For more detailed documentation please visit [documentation directory](/docs/) in this repository

## License

[MIT](https://choosealicense.com/licenses/mit/)
