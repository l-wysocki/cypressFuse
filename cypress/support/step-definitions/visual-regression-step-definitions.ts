import '@4tw/cypress-drag-drop'
import { readLocator } from '../../pageObject/locators/locators'
const { defineStep } = require('@badeball/cypress-cucumber-preprocessor')

/*
VISUAL REGRESSION
*/

defineStep(
  'I verify that the whole website is not visually regressed. Base image: {string}. Threshold: {float}',
  (imgName: string, thresholdLevel: number) => {
    cy.compareSnapshot(imgName, thresholdLevel)
  }
)

defineStep(
  'I verify that element {string} is not visually regressed. Base image: {string}. Threshold: {float}',
  (element: string, imgName: string, thresholdLevel: number) => {
    cy.get(readLocator(element)).compareSnapshot(imgName, thresholdLevel)
  }
)

/*
SCREENSHOT
*/

defineStep('I want to take a screenshot of currect state', () =>
  cy.screenshot()
)

defineStep('I want to take a full page screenshot of current state', () =>
  cy.screenshot('fullPage')
)

defineStep(
  'I want to take a screenshot of the first element {string}',
  (element: string) => {
    cy.get(readLocator(element)).first().screenshot()
  }
)
