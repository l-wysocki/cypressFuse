# Visual testing

## Folder structure

All of the visual testing related files have to be stored in [/cypress-visual-screenshots](/cypress-visual-screenshots/) folder.

```bash
cypress-visual-screenshots
├── baseline
├── comparison
└── diff
```

baseline - place where your base images are stored.

comparison - place where screenshots that Cypress took are stored.

diff - place where are stored differences after the comparison.

## Usage

Pre-defined steps for visual testing:

```gherkin
I verify that the whole website is not visually regressed. Base image: {string}. Threshold: {float}
```

```gherkin
I verify that element {string} is not visually regressed. Base image: {string}. Threshold: {float}
```

Using these steps you can check visual regression for whole website and for particular element.
