Feature: Simple example for youtube

    Scenario: hello world on root
        Given I make a GET request to "http://localhost:3000"
        When I receive a response
        Then I should see "Hello World!"
