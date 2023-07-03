import '@4tw/cypress-drag-drop'
import { readLocator } from '../../pageObject/locators/locators'
const { defineStep } = require('@badeball/cypress-cucumber-preprocessor')

/*
CLICKS & INTERACTIONS
*/

defineStep('I click on element {string}', (element: string) => {
  cy.get(readLocator(element)).click()
})

defineStep(
  'I click on element {string} in the exact position: {string}',
  (element: string, position: any) => {
    cy.get(readLocator(element)).click(position)
  }
)

defineStep('I double click on element {string}', (element: string) => {
  cy.get(readLocator(element)).dblclick()
})

defineStep(
  'I double click on element {string} in the exact position: {string}',
  (element: string, position: any) => {
    cy.get(readLocator(element)).dblclick(position)
  }
)

defineStep(
  'I drag element {string} to another element {string}',
  (sourceElement: string, targetElement: string) => {
    cy.get(readLocator(sourceElement)).drag(readLocator(targetElement))
  }
)

defineStep(
  'I drag element {string} by offset X: {float} and Y: {float}',
  (element: string, offsetX: number, offsetY: number) => {
    cy.get(readLocator(element)).move({ deltaX: offsetX, deltaY: offsetY })
  }
)

defineStep('I scroll to bottom of the website', () => {
  cy.scrollTo('bottom')
})

defineStep('I scroll to top of the website', () => {
  cy.scrollTo('top')
})

defineStep('I scroll to the center of the website', () => {
  cy.scrollTo('center')
})

defineStep('I scroll to the top of the element {string}', (element: string) => {
  cy.get(readLocator(element)).scrollTo('top')
})

defineStep(
  'I scroll to the bottom of the element {string}',
  (element: string) => {
    cy.get(readLocator(element)).scrollTo('bottom')
  }
)

defineStep(
  'I scroll to the center of the element {string}',
  (element: string) => {
    cy.get(readLocator(element)).scrollTo('center')
  }
)

defineStep('I scroll down by {int} pixels', (pixelNumber: number) => {
  cy.scrollTo(0, -pixelNumber)
})

defineStep('I scroll up by {int} pixels', (pixelNumber: number) => {
  cy.scrollTo(0, pixelNumber)
})

defineStep('I hover over element {string}', (element: string) => {
  cy.get(readLocator(element)).trigger('mouseover')
})

defineStep(
  'I hover over element {string} and click on it',
  (element: string) => {
    cy.get(readLocator(element)).trigger('mouseover').click()
  }
)

/*
  KEYBOARD
  */

defineStep('I press key {string}', (key: string) => {
  cy.get('body').type(key)
})
