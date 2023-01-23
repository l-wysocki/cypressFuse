# HTML reporter

Cypress & Cucumber testing template is using [mochawesome reporter](https://www.npmjs.com/package/mochawesome).

Reported is configured in [cypress.config.js](../cypress.config.js) file:

```javascript
reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: '[status]_[datetime]-[name]-report',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports/' + today,
  },
```

You can define your own report directory and change the filename template.
