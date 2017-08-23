// stepdefinitions.js
const expect = require('chai').expect;

module.exports = function() {

  this.Given(/^I go to the website "([^"]*)"$/, function(url) {
    browser.url(url);
  });


  this.Then(/^I expect the title of the page "([^"]*)"$/, function(title) {
    expect(browser.getTitle()).to.be.eql(title);
  });
};
