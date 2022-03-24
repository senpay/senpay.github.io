import {LINKS} from '../../../New folder/cypress/fixtures/locators.js'

describe('Main Page hyperlinks', () => {
    before (()=> {
    cy.visit('https://aqaguy.uk/')
  });

    afterEach(() => {
      cy.visit('https://aqaguy.uk/')
    })

    it('Verification that "Test Club" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.TEST_CLUB_LINK)
      .click()
      .should("to.not.have", "href", "#undefined")
      }); 

    it('Verification that "Subcutaneous test" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Subcutaneous_test)
      .should("to.not.have", "href", "#undefined")
      cy.visit('https://aqaguy.uk/')
    });

    it('Verification that " Is TDD Effective?" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Is_TDD_Effective)
      .click()
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "Introduction" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Introduction)
      .click()
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "No architecture" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.No_architecture)
      .click()
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "Layered architecture" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Layered_architecture)
 
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "Layered architecture examples" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Layered_architecture_examples)

     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "FAQ" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.FAQ)
      .click()
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "Test Strategy Example" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Test_Strategy_Example)
      .click()
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "Feature test model" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Feature_test_model)
      .click()
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "An example of Subcutaneous test pattern" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.An_example_of_Subcutaneous_test_pattern)
  
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "Several ways to address flaky tests issue" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Several_ways_to_address_flaky_tests_issue)
      .click()
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "About Alexander Pushkarev" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.About_Alexander_Pushkarev)
      .click()
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "Alexander Pushkarev CV" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Alexander_Pushkarev_CV)
      .click()
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "  Alexander Pushkarev blog" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Alexander_Pushkarev_blog, { timeout: 10000 })
     .should("to.not.have", "href", "#undefined")
    });

    it('Verification that "Alexander Pushkarev publications on Meduim" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Alexander_Pushkarev_publications_on_Meduim, { timeout: 10000 })
     .should("to.not.have", "href", "#undefined")
    });
});