# Locators

According to the official [cypress.io locators strategy](https://docs.cypress.io/guides/references/best-practices#Selecting-Elements) it's the best to use `data-*` elements when possible. If not please use another selectors.

## Adding new locators

All of the locators are stored in [cypress/pageObject/locators/locators.js](./cypress/../../cypress/pageObject/locators/locators.js).

Create JavaScript objects that will store the DOM elements locators.

Example:

```javascript
const duckduckgoHomepage = {
  searchBar: '#search_form_input_homepage',
  searchBtn: '#search_button_homepage',
}
```

Below there is initalized empty object that is listing every object created in above step.

```javascript
const locatorPages = {}
```

Important thing is to not to change the name of this object. It should stay named `locatorPages`.

## Reading locators from Gherkin step

Example Gkerkin step definiton in JavaScript:

```javascript
defineStep('I click on element {string}', (element) => {
  cy.get(element).click()
})
```

Example usage of following step:

```gherkin
...
And I click on element 'home.firstElement'
...
```

Element name is passed as a string, to make it working with step definition we need to add `readLocator` function. This function reads the string and check for the locator in the corresponding JavaSciprt file which is stored in [cypress/pageObject/locators/locators.js](./cypress/../../cypress/pageObject/locators/locators.js).

The final step definition will look like code below:

```javascript
defineStep('I click on element {string}', (element) => {
  cy.get(readLocator(element)).click()
})
```
