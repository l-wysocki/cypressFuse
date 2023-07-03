// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Lighthouse & Pa11y
import '@cypress-audit/lighthouse/commands'
import compareSnapshotCommand from 'cypress-visual-regression/dist/command'

Cypress.Commands.add('isWithinViewport', { prevSubject: true }, (subject) => {
  const rect = subject[0].getBoundingClientRect()

  expect(rect.top).to.be.within(0, window.innerHeight)
  expect(rect.right).to.be.within(0, window.innerWidth)
  expect(rect.bottom).to.be.within(0, window.innerHeight)
  expect(rect.left).to.be.within(0, window.innerWidth)

  return subject
})

Cypress.Commands.add('isOutsideViewport', { prevSubject: true }, (subject) => {
  const rect = subject[0].getBoundingClientRect()

  expect(rect.top).not.to.be.within(0, window.innerHeight)
  expect(rect.right).not.to.be.within(0, window.innerWidth)
  expect(rect.bottom).not.to.be.within(0, window.innerHeight)
  expect(rect.left).not.to.be.within(0, window.innerWidth)

  return subject
})

// Visual regression
compareSnapshotCommand()

after(() => {
  cy.task('generateReport')
})
