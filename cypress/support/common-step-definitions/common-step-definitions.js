import '@4tw/cypress-drag-drop'

const { defineStep } = require('@badeball/cypress-cucumber-preprocessor')

/*
DUCKDUCK
*/

defineStep('I should see a search bar', () => {
  cy.get('input').should(
    'have.attr',
    'placeholder',
    'Search the web without being tracked'
  )

  assert.deepEqual({}, {})
})

/*
  PAGE & URL
*/

defineStep('The title is {string}', (title) => {
  cy.title().should('eql', title)
})

defineStep('The title is not {string}', (title) => {
  cy.title().should('not.eql', title)
})

defineStep('The title contain {string}', (title) => {
  cy.title().should('include', title)
})

defineStep('The title does  not contain {string}', (title) => {
  cy.title().should('not.include', title)
})

defineStep('I visit the URL {string}', (url) => {
  cy.visit(url)
})

defineStep('The page URL is {string}', (url) => {
  cy.url().should('eql', url)
})

defineStep('The page URL is not{string}', (url) => {
  cy.url().should('not.eql', url)
})

defineStep('The page URL contain {string}', (url) => {
  cy.url().should('include', url)
})

defineStep('The page URL does not contain {string}', (url) => {
  cy.url().should('not.include', url)
})

/*
HTML
*/

defineStep(
  'The attribute {string} of element {string} is the value {string}',
  (attribute, element, value) => {
    cy.get(element).invoke('attr', attribute).should('eq', value)
  }
)

defineStep(
  'The attribute {string} of element {string} is not the value {string}',
  (attribute, element, value) => {
    cy.get(element).invoke('attr', attribute).should('not.eql', value)
  }
)

defineStep('The text of the {string} is equal to {string}', (element, text) => {
  cy.get(element).should('have.text', text)
})

defineStep('The text of the {string} contain {string}', (element, text) => {
  cy.get(element).should('include', text)
})

defineStep(
  'The text of the {string} does not contain {string}',
  (element, text) => {
    cy.get(element).should('not.include', text)
  }
)

defineStep(
  'The css attribute {string} of element {string} is the value {string}',
  (attribute, element, value) => {
    cy.get(element).should('have.css', attribute, value)
  }
)

defineStep(
  'The css attribute {string} of element {string} is not the value {string}',
  (attribute, element, value) => {
    cy.get(element).should('not.have.css', attribute, value)
  }
)

/*
VISIBILITY
*/

defineStep('The element {string} is displayed', (element) => {
  cy.get(element).should('be.visible')
})

defineStep('The element {string} is not displayed', (element) => {
  cy.get(element).should('not.be.visible')
})

defineStep(
  'I expect that element {string} appears exactly {int} times',
  (element, number) => {
    cy.get(element).should('have.length', number)
  }
)

defineStep(
  'I expect that element {string} does not appear exactly {int} times',
  (element, number) => {
    cy.get(element).should('not.have.length', number)
  }
)

defineStep(
  'I expect that element {string} becomes visible within {int} seconds',
  (element, number) => {
    cy.get(element, { timeout: number }).should('be.visible')
  }
)

defineStep(
  'I expect that element {string} becomes invisible within {int} seconds',
  (element, number) => {
    cy.get(element, { timeout: number }).should('not.be.visible')
  }
)

defineStep(
  'I expect that element {string} is within the viewport',
  (element) => {
    cy.isInViewport(element)
  }
)

defineStep(
  'I expect that element {string} is not within the viewport',
  (element) => {
    cy.isNotInViewport(element)
  }
)

defineStep(
  'I change the viewport width to {int} px and height to {int} px',
  (width, height) => {
    cy.viewport(width, height)
  }
)

defineStep(
  'I change the viewport with preset: {string}. Orientation is set to {string}',
  (preset, screenOrientation) => {
    cy.viewport(preset, screenOrientation)
  }
)

defineStep(
  'I expect that element {string} is not visible on {string} in {string} mode',
  (element, preset, screenOrientation) => {
    cy.viewport(preset, screenOrientation)
    cy.get(element).should('not.be.visible')
  }
)

defineStep(
  'I expect that element {string} is visible on {string} in {string} mode',
  (element, preset, screenOrientation) => {
    cy.viewport(preset, screenOrientation)
    cy.get(element).should('be.visible')
  }
)

/*
FORMS
*/

defineStep('The element {string} is enabled', (element) => {
  cy.get(element).should('be.enabled')
})

defineStep('The element {string} is disabled', (element) => {
  cy.get(element).should('be.disabled')
})

defineStep(
  'I select the option from element {string} by text {string}',
  (element, text) => {
    cy.get(element).select(text).should('have.text', text)
  }
)

defineStep(
  'I select the option from element {string} by value {string}',
  (element, value) => {
    cy.get(element).select(value).should('have.value', value)
  }
)

defineStep(
  'I select the option from element {string} by index {int}',
  (element, index) => {
    cy.get(element).select(index)
  }
)

/*
INPUTS
*/

defineStep('I add text {string} to field {string}', (text, element) => {
  cy.get(element).type(text)
})

defineStep('I clear the text from field {string}', (element) => {
  cy.get(element).clear()
})

defineStep('The element {string} text is {string}', (element, text) => {
  cy.get(element).contains(text)
})

defineStep('The element {string} contain any text', (element) => {
  cy.get(element).contains(/[\s\S]*/)
})

defineStep(
  'The element {string} does not contain text {string}',
  (element, text) => {
    cy.get(element).should('not.include', text)
  }
)

defineStep('The element {string} does not contain any text', (element) => {
  cy.get(element).should('not.match', /(.*?)/)
})

/*
ALERTS
*/
//TODO: alert handling

/*
CLICKS & INTERACTIONS
*/

defineStep('I click on element {string}', (element) => {
  cy.get(element).click()
})

defineStep(
  'I click on element {string} in the exact position: {string}',
  (element, position) => {
    cy.get(element).click(position)
  }
)

defineStep('I double click on element {string}', (element) => {
  cy.get(element).dblclick()
})

defineStep(
  'I double click on element {string} in the exact position: {string}',
  (element, position) => {
    cy.get(element).dblclick(position)
  }
)

defineStep(
  'I drag element {string} to another element {string}',
  (sourceElement, targetElement) => {
    cy.get(sourceElement).drag(targetElement)
  }
)

defineStep(
  'I drag element {string} by offset X: {float} and Y: {float}',
  (element, offsetX, offsetY) => {
    cy.get(element).move({ deltaX: offsetX, deltaY: offsetY })
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

defineStep('I scroll to the top of the element {string}', (element) => {
  cy.get(element).scrollTo('top')
})

defineStep('I scroll to the bottom of the element {string}', (element) => {
  cy.get(element).scrollTo('bottom')
})

defineStep('I scroll to the center of the element {string}', (element) => {
  cy.get(element).scrollTo('center')
})

defineStep('I scroll down by {int} pixels', (pixelNumber) => {
  cy.scrollTo(0, pixelNumber)
})

defineStep('I scroll up by {int} pixels', (pixelNumber) => {
  cy.scrollTo(0, pixelNumber, top)
})

defineStep('I hover over element {string}', (element) => {
  cy.get(element).trigger('mouseover')
})

defineStep('I hover over element {string} and click on it', (element) => {
  cy.get(element).trigger('mouseover').click()
})

/*
KEYBOARD
*/

defineStep('I press key {string}', (key) => {
  cy.get('body').type(key)
})

/*
LIGHTHOUSE
*/

defineStep(
  'I run Lighthouse reports with expected values: Performance: {int}, accessibility: {int}, best-practises: {int}, seo: {int}, pwa: {int}',
  (performanceVal, accessibilityVal, bestpracisesVal, seoVal, pwaVal) => {
    cy.lighthouse({
      performance: performanceVal,
      accessibility: accessibilityVal,
      'best-practices': bestpracisesVal,
      seo: seoVal,
      pwa: pwaVal,
    })
  }
)

/*
COOKIES
*/

defineStep('The cookie {string} exists', (cookieName) => {
  cy.getCookie(cookieName).should('exist')
})

defineStep('The cookies exists', () => {
  cy.getCookies().should('exist')
})

defineStep('I clear all cookies', () => {
  cy.clearAllCookies()
})

defineStep('I clear cookie {string}', (cookieName) => {
  cy.clearCookie(cookieName)
})

defineStep(
  'I set cookie name {string} and value {string}',
  (cookieName, cookieValue) => {
    cy.setCookie(cookieName, cookieValue)
  }
)

defineStep(
  'The cookie {string} property value is {string}',
  (cookieName, propValue) => {
    cy.getCookie(cookieName).should('have.property', 'value', propValue)
  }
)

/*
WAITING
*/

defineStep('I wait for {int} ms', (waitTime) => {
  cy.wait(waitTime)
})

/*
VISUAL REGRESSION
*/

defineStep(
  'I verify that the whole website is not visually regressed. Base image: {string}. Threshold: {float}',
  (imgName, thresholdLevel) => {
    cy.compareSnapshot(imgName, thresholdLevel)
  }
)

defineStep(
  'I verify that element {string} is not visually regressed. Base image: {string}. Threshold: {float}',
  (element, imgName, thresholdLevel) => {
    cy.get(element).compareSnapshot(imgName, thresholdLevel)
  }
)

defineStep('I am hidding element {string}', (element) => {
  cy.get(element).hideElement()
})

defineStep('I am unhidding element {string}', (element) => {
  cy.get(element).hideElement(false)
})
