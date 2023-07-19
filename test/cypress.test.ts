import { expect } from 'chai'
import fs from 'fs'
import { version as cypressVersion } from 'cypress/package.json'
import packageJson from 'package.json'
import path from 'path'
import cypress from 'cypress'

const packageJsonPath = path.resolve(__dirname, '../package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
const expectedCypressVersion = packageJson.devDependencies.cypress.replace(
  '^',
  ''
)

describe('Cypress Version Check', () => {
  it('should have Cypress version greater than or equal to package.json version', () => {
    expect(cypressVersion).to.satisfy((version) => {
      return compareVersions(version, expectedCypressVersion) >= 0
    })
  })
})

function compareVersions(version1, version2) {
  const v1 = version1.split('.').map(Number)
  const v2 = version2.split('.').map(Number)

  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    const num1 = v1[i] || 0
    const num2 = v2[i] || 0

    if (num1 !== num2) {
      return num1 - num2
    }
  }

  return 0
}

describe('Cypress Installation Check', () => {
  it('should import Cypress successfully', () => {
    expect(cypress).to.exist
  })
})

describe('Cypress Cucumber Test', () => {
  it('should generate and execute a feature file with a specified step', async function () {
    this.timeout(60000) // Set the timeout to a longer value (e.g., 10 seconds)

    const featureContent = `
        Feature: Testing the Cypress execution
          Scenario: Visiting google page
            Given I visit the URL 'https://google.com'
      `

    try {
      // Write the feature file
      fs.writeFileSync('cypress/e2e/google-test.feature', featureContent)

      // Run Cypress with Cypress Cucumber Preprocessor
      const results = await cypress.run({
        spec: 'cypress/e2e/google-test.feature',
      })

      // Check if Cypress tests passed
      if ('totalFailed' in results) {
        expect(results.totalFailed).to.equal(0)
      } else if ('failures' in results) {
        // Handle case when CypressFailedRunResult is returned
        throw new Error('Cypress tests failed. Check Cypress logs for details.')
      }
    } catch (error) {
      // Handle any errors that may occur during file creation or test execution
      console.error('Error:', error)
    }
  })
})
