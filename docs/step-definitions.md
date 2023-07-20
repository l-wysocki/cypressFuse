# Step definitions

## Pre-built step definitions

All of the pre-built step definitions are stored in [/cypress/support/step-definitions/](/cypress/support/step-definitions/).

Steps are defined with _defineStep_. This solution is applied because it helps user to use the same step with different Gherkin step keywords (`Given, When, And, Then, But`).

Example:

```javascript
defineStep('The title is {string}', (title) => {
  cy.title().should('eql', title)
})
```

Can be used as:

```gherkin
Given The title is 'CypressFuse'
And The title is 'CypressFuse'
Then The title is 'CypressFuse'
When The title is 'CypressFuse'
But The title is 'CypressFuse'
```

## Adding new custom step definitions

The best practice for this is to create a new file:

```bash
/cypress/support/step-definitions/custom-step-definitions.js
```

Every `*.js` file in [/cypress/support/step-definitions/](/cypress/support/step-definitions/) folder will be considered as a file with defined step definitions.

At the top of the file import `defineStep`:

```javascript
const { defineStep } = require('@badeball/cypress-cucumber-preprocessor')
```

If your custom steps will include locators import:

```javascript
import { readLocator } from '../../pageObject/locators/locators'
```

New step definition implemented this way will not cause any bugs and issues with running this template.

More information about locators is available in [locators.md](/docs/locators.md).
