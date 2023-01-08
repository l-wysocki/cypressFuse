const { defineStep } = require('@badeball/cypress-cucumber-preprocessor');

/*
DUCKDUCK
*/

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
  cy.title().should('eql', title);
});

defineStep('The title is not {string}', (title) => {
  cy.title().should('not.rql', title);
});

defineStep('The title contain {string}', (title) => {
  cy.title().should('include', title);
});

defineStep('The title does  not contain {string}', (title) => {
  cy.title().should('not.include', title);
});

defineStep('I visit the URL {string}', (url) => {
  cy.visit(url);
});

defineStep('The page URL is {string}', (url) => {
  cy.url().should('eql', url);
});

defineStep('The page URL is not{string}', (url) => {
  cy.url().should('not.eql', url);
});

defineStep('The page URL contain {string}', (url) => {
  cy.url().should('include', url);
});

defineStep('The page URL does not contain {string}', (url) => {
  cy.url().should('not.include', url);
});

/*
HTML
*/

defineStep(
  'The attribute {attribute} of element {element} is the value {value}',
  (attribute, element, value) => {
    cy.get(element).invoke('attr'.attribute).should('eq', value);
  }
);

defineStep(
  'The attribute {attribute} of element {element} is not the value {value}',
  (attribute, element, value) => {
    cy.get(element).invoke('attr'.attribute).should('not.eql', value);
  }
);

defineStep('The text of the {element} is equal to {text}', (element, text) => {
  cy.get(element).should('have.text', text);
});

defineStep('The text of the {element} contain {text}', (element, text) => {
  cy.get(element).should('include', text);
});

defineStep(
  'The text of the {element} does not contain {text}',
  (element, text) => {
    cy.get(element).should('not.include', text);
  }
);

defineStep(
  'The css attribute {attribute} of element {element} is the value {value}',
  (attribute, element, value) => {
    cy.get(element).should('have.css', attribute, value);
  }
);

defineStep(
  'The css attribute {attribute} of element {element} is not the value {value}',
  (attribute, element, value) => {
    cy.get(element).should('not.have.css', attribute, value);
  }
);

/*
VISIBILITY
*/

defineStep('The element {element} is displayed', (element) => {
  cy.get(element).should('be.visible');
});

defineStep('The element {element} is not displayed', (element) => {
  cy.get(element).should('not.be.visible');
});

defineStep(
  'I expect that element {element} appears exactly {number} times',
  (element, number) => {
    cy.get(element).should('have.length', number);
  }
);
