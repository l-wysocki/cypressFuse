Feature: duckduckgo.com
  Scenario: visiting the frontpage
    When I visit the URL 'https://duckduckgo.com/'
    Then I should see a search bar
    Then The title is 'DuckDuckGo — Privacy, simplified.'
    And The element '.badge-link__subtitle' does not contain any text
    And I scroll down by 500 pixels
    And I scroll up by 100 pixels