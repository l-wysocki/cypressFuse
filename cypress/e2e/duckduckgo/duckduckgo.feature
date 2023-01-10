Feature: duckduckgo.com
  Scenario: visiting the frontpage
    When I visit the URL 'https://duckduckgo.com/'
    Then I should see a search bar
    Then The title is 'DuckDuckGo — Privacy, simplified.'
    And The element '.badge-link__subtitle' does not contain any text
    
  Scenario: checking sitemap magneticpoint.com
  Then sitemap check for url: 'https://wiadomosci.onet.pl/9,sitemap-news.xml'