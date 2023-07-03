import '@4tw/cypress-drag-drop'
import { readLocator } from '../../pageObject/locators/locators'
const { defineStep } = require('@badeball/cypress-cucumber-preprocessor')

/*
VISIBILITY
*/

defineStep('The element {string} is displayed', (element: string) => {
  cy.get(readLocator(element)).should('be.visible')
})

defineStep('The element {string} is not displayed', (element: string) => {
  cy.get(readLocator(element)).should('not.be.visible')
})

defineStep(
  'I expect that element {string} appears exactly {int} times',
  (element: string, number: number) => {
    cy.get(readLocator(element)).should('have.length', number)
  }
)

defineStep(
  'I expect that element {string} does not appear exactly {int} times',
  (element: string, number: number) => {
    cy.get(readLocator(element)).should('not.have.length', number)
  }
)

defineStep(
  'I expect that element {string} becomes visible within {int} seconds',
  (element: string, number: number) => {
    cy.get(readLocator(element), { timeout: number }).should('be.visible')
  }
)

defineStep(
  'I expect that element {string} becomes invisible within {int} seconds',
  (element: string, number: number) => {
    cy.get(readLocator(element), { timeout: number }).should('not.be.visible')
  }
)

defineStep(
  'I expect that element {string} is within the viewport',
  (element: string) => {
    cy.get(readLocator(element)).isWithinViewport()
  }
)

defineStep(
  'I expect that element {string} is not within the viewport',
  (element: string) => {
    cy.get(readLocator(element)).isOutsideViewport()
  }
)

defineStep(
  'I change the viewport width to {int} px and height to {int} px',
  (width: number, height: number) => {
    cy.viewport(width, height)
  }
)

defineStep(
  'I change the viewport with preset: {string}. Orientation is set to {string}',
  (preset: any, screenOrientation: any) => {
    cy.viewport(preset, screenOrientation)
  }
)

defineStep(
  'I expect that element {string} is not visible on {string} in {string} mode',
  (element: string, preset: any, screenOrientation: any) => {
    cy.viewport(preset, screenOrientation)
    cy.get(readLocator(element)).should('not.be.visible')
  }
)

defineStep(
  'I expect that element {string} is visible on {string} in {string} mode',
  (element: string, preset: any, screenOrientation: any) => {
    cy.viewport(preset, screenOrientation)
    cy.get(readLocator(element)).should('be.visible')
  }
)
