// stepdefinitions.js
const expect = require('chai').expect;

module.exports = function () {

  this.When(/^I set "([^"]*)?" to the inputfield "([^"]*)?"$/, function(value, field) {
    browser.setValue(field, value);
  });

  this.When(/^I submit the form "([^"]*)"$/, function(formName) {
    browser.submitForm(formName);
  });

  this.Then(/^I expect the alertbox contains the text "([^"]*)"$/, function(text) {
    if (browser.alertText()) {
      expect(browser.alertText()).to.be.eql(text);
      browser.alertAccept();
    }
  });
}
