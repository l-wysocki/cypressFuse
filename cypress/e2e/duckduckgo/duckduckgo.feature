Feature: duckduckgo.com
  Scenario: visiting the frontpage
    When I visit the URL 'https://duckduckgo.com/'
    Then I should see a search bar
    Then The title is 'DuckDuckGo — Privacy, simplified.'