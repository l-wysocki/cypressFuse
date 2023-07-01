import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      isWithinViewport(): Chainable<JQuery<HTMLElement>>;
      isOutsideViewport(): Chainable<JQuery<HTMLElement>>;
    }
  }
}
