Feature: Login functionality

  Scenario: User can login with valid credentials
    Given I am on the login page
    When I login with valid credentials
    Then I should see the dashboard page
