// const { defineConfig } = require('cypress')
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
// const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
// const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')
// const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')
// const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')

import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import preprocessor from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild.js'
import { lighthouse, prepareAudit } from '@cypress-audit/lighthouse'
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/dist/plugin.js'
import pkg from './utils/config-helpers.js'
const { getCurrentDate } = pkg

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
  })

  // Visual Regression
  getCompareSnapshotsPlugin(on, config)

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: '[status]_[datetime]-[name]-report',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports/' + getCurrentDate(),
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
