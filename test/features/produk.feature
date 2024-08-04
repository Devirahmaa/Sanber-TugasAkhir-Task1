Feature: Create Product

  Scenario: User creates a new product
    Given I am on the product creation page
    When I fill in the product details
    And I submit the form
    Then I should see the new product in the product list
