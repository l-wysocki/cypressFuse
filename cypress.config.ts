import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import getCompareSnapshotsPlugin from "cypress-image-diff-js/dist/plugin.js";
import { getCurrentDate } from "./utils/config-helpers";

export default defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "**/*.feature",
    supportFile: "cypress/support/index.ts",

    reporter: "mochawesome",
    reporterOptions: {
      reportFilename: "[status]_[datetime]-[name]-report",
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      reportDir: "cypress/reports/" + getCurrentDate(),
    },

    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      getCompareSnapshotsPlugin(on, config);
      return config;
    },
  },
});
