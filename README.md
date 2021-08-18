# video-tdd-api-pactumjs-cucumber

[YouTube video](https://www.youtube.com/watch?v=ISAjES_Gklc) on TDD API ExpressJS testing with PactumJS and Cucumber

## Technologies

- ExpressJS for the API
- PactumJS and Cucubmer for the automated testing

## Quickstart

1. clone repo
2. install npm dependencies `npm install`
3. run API application `npm start`
4. run cucumber tests `npm test`

## File structure

- Code in `src` folder
- Tests in `features` folder

![Screenshot](https://user-images.githubusercontent.com/624760/129928876-5818bde0-840f-4de3-b01d-999949167519.png)

```gherkin
Feature: Simple example for youtube

    Scenario: hello world on root
        Given I make a GET request to "http://localhost:3000"
        When I receive a response
        Then I should see "Hello World!"
```
