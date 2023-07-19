import '@4tw/cypress-drag-drop'
import { readLocator } from '../../pageObject/locators/locators'
import { defineStep } from '@badeball/cypress-cucumber-preprocessor'

/*
  PAGE & URL
*/

defineStep('The title is {string}', (title: string) => {
  cy.title().should('eql', title)
})

defineStep('The title is not {string}', (title: string) => {
  cy.title().should('not.eql', title)
})

defineStep('The title contain {string}', (title: string) => {
  cy.title().should('include', title)
})

defineStep('The title does  not contain {string}', (title: string) => {
  cy.title().should('not.include', title)
})

defineStep('I visit the URL {string}', (url: string) => {
  cy.visit(url)
})

defineStep('The page URL is {string}', (url: string) => {
  cy.url().should('eql', url)
})

defineStep('The page URL is not{string}', (url: string) => {
  cy.url().should('not.eql', url)
})

defineStep('The page URL contain {string}', (url: string) => {
  cy.url().should('include', url)
})

defineStep('The page URL does not contain {string}', (url: string) => {
  cy.url().should('not.include', url)
})

defineStep(
  'I verify thattitle length is equal to {int}',
  (titleLen: number) => {
    cy.title().its('length').should('eq', titleLen)
  }
)

defineStep(
  'I verify thattitle length is less than {int}',
  (titleLen: number) => {
    cy.title().its('length').should('be.lessThan', titleLen)
  }
)

defineStep(
  'I verify thattitle length is greater than {int}',
  (titleLen: number) => {
    cy.title().its('length').should('be.greaterThan', titleLen)
  }
)

/*
  HTML
  */

defineStep(
  'The attribute {string} of element {string} is the value {string}',
  (attribute: string, element: string, value: string) => {
    cy.get(readLocator(element)).invoke('attr', attribute).should('eq', value)
  }
)

defineStep(
  'The attribute {string} of element {string} is not the value {string}',
  (attribute: string, element: string, value: string) => {
    cy.get(readLocator(element))
      .invoke('attr', attribute)
      .should('not.eql', value)
  }
)

defineStep(
  'The text of the {string} is equal to {string}',
  (element: string, text: string) => {
    cy.get(readLocator(element)).should('have.text', text)
  }
)

defineStep(
  'The text of the {string} contain {string}',
  (element: string, text: string) => {
    cy.get(readLocator(element)).should('include', text)
  }
)

defineStep(
  'The text of the {string} does not contain {string}',
  (element: string, text: string) => {
    cy.get(readLocator(element)).should('not.include', text)
  }
)

defineStep(
  'The css attribute {string} of element {string} is the value {string}',
  (attribute: string, element: string, value: string) => {
    cy.get(readLocator(element)).should('have.css', attribute, value)
  }
)

defineStep(
  'The css attribute {string} of element {string} is not the value {string}',
  (attribute: string, element: string, value: string) => {
    cy.get(readLocator(element)).should('not.have.css', attribute, value)
  }
)

defineStep(
  'I verify that element {string} have property {string} with value equal to {string}',
  (element: string, prop: string, propVal: string) => {
    cy.get(readLocator(element)).its(prop).should('eql', propVal)
  }
)

defineStep(
  'I verify that element {string} have property {string} with value equal to {int}',
  (element: string, prop: string, propVal: string) => {
    cy.get(readLocator(element)).its(prop).should('eql', propVal)
  }
)

defineStep(
  'I verify that element {string} have property {string} with value should be greater than {int}',
  (element: string, prop: string, propVal: string) => {
    cy.get(readLocator(element)).its(prop).should('be.gt', propVal)
  }
)
