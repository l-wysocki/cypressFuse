const { defineStep } = require('@badeball/cypress-cucumber-preprocessor');

/*
DUCKDUCK
*/

defineStep('I visit duckduckgo.com', () => {
  cy.visit('https://duckduckgo.com/');
});

defineStep('I should see a search bar', () => {
  cy.get('input').should(
    'have.attr',
    'placeholder',
    'Search the web without being tracked'
  );

  assert.deepEqual({}, {});
});

/*
  PAGE & URL
*/

defineStep('The title is {string}', (title) => {
  cy.title().should('include', title);
});

defineStep('The title is not {string}', (title) => {
  cy.title().should('not.include', title);
});
