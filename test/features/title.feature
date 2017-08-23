# title.feature
Feature: Title check
  I should be able to go to a website
  and check its title

Scenario: Get the title of webpage
  Given I go to the website "http://localhost:8081"
  Then I expect the title of the page "Test cucumber"

Scenario: Submit the form
  Given I go to the website "http://localhost:8081"
  When I set "Sarbein" to the inputfield "#name"
  And I submit the form "#sform"
  #Then I expect the alertbox is opened
  Then I expect the alertbox contains the text "Welcome Sarbein"
  #When I accept the alertbox
  #Then I expect the alertbox is not opened
