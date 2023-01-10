const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')
const { pa11y } = require('@cypress-audit/pa11y')
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')

// Get current date
var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear()
today = dd + mm + yyyy

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  )

  // Lighthouse & Pa11y
  // eslint-disable-next-line no-unused-vars
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions)
  })

  on('task', {
    lighthouse: lighthouse(),
    pa11y: pa11y(console.log.bind(console)),
  })

  // Visual Regression
  getCompareSnapshotsPlugin(on, config)

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: '[status]_[datetime]-[name]-report',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports/' + today,
  },
  // viewport default size
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/index.js',
    setupNodeEvents,
  },
})
