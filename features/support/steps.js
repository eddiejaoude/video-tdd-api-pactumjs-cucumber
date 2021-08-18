const pactum = require("pactum");
const { Before, Given, When, Then } = require("@cucumber/cucumber");

let spec = pactum.spec();

Before(() => {
  spec = pactum.spec();
});

Given("I make a GET request to {string}", function (url) {
  spec.get(url);
});

When("I receive a response", async function () {
  await spec.toss();
});

Then("I should see {string}", function (body) {
  spec.response().should.have.body(body);
});
