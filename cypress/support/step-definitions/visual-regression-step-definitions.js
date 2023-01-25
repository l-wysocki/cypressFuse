import '@4tw/cypress-drag-drop'
import { readLocator } from '../../pageObject/locators/locators'
const { defineStep } = require('@badeball/cypress-cucumber-preprocessor')

/*
VISUAL REGRESSION
*/

defineStep(
  'I verify that the whole website is not visually regressed. Base image: {string}. Threshold: {float}',
  (imgName, thresholdLevel) => {
    cy.compareSnapshot(imgName, thresholdLevel)
  }
)

defineStep(
  'I verify that element {string} is not visually regressed. Base image: {string}. Threshold: {float}',
  (element, imgName, thresholdLevel) => {
    cy.get(readLocator(element)).compareSnapshot(imgName, thresholdLevel)
  }
)

defineStep('I am hidding element {string}', (element) => {
  cy.get(readLocator(element)).hideElement()
})

defineStep('I am unhidding element {string}', (element) => {
  cy.get(readLocator(element)).hideElement(false)
})

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
  (element) => {
    cy.get(readLocator(element)).first().screenshot()
  }
)
