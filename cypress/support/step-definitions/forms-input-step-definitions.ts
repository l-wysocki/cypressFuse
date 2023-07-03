import '@4tw/cypress-drag-drop'
import { readLocator } from '../../pageObject/locators/locators'
const { defineStep } = require('@badeball/cypress-cucumber-preprocessor')

/*
FORMS
*/

defineStep('The element {string} is enabled', (element: string) => {
  cy.get(readLocator(element)).should('be.enabled')
})

defineStep('The element {string} is disabled', (element: string) => {
  cy.get(readLocator(element)).should('be.disabled')
})

defineStep(
  'I select the option from element {string} by text {string}',
  (element: string, text: string) => {
    cy.get(readLocator(element)).select(text).should('have.text', text)
  }
)

defineStep(
  'I select the option from element {string} by value {string}',
  (element: string, value: string) => {
    cy.get(readLocator(element)).select(value).should('have.value', value)
  }
)

defineStep(
  'I select the option from element {string} by index {int}',
  (element: string, index: number) => {
    cy.get(readLocator(element)).select(index)
  }
)

/*
  INPUTS
  */

defineStep('I add text {string} to field {string}', (text, element) => {
  cy.get(readLocator(element)).type(text)
})

defineStep('I clear the text from field {string}', (element: string) => {
  cy.get(readLocator(element)).clear()
})

defineStep('The element {string} text is {string}', (element, text) => {
  cy.get(readLocator(element)).contains(text)
})

defineStep('The element {string} contain any text', (element: string) => {
  cy.get(readLocator(element)).contains(/[\s\S]*/)
})

defineStep(
  'The element {string} does not contain text {string}',
  (element: string, text: string) => {
    cy.get(readLocator(element)).should('not.include', text)
  }
)

defineStep(
  'The element {string} does not contain any text',
  (element: string) => {
    cy.get(readLocator(element)).should('not.match', /(.*?)/)
  }
)
