import {LINKS} from '../fixtures/locators.js';
import {HYPERLINKS} from '../fixtures/hypelinks.js';
import * as func from '../fixtures/funcs.js';
// import  HomePage from '../../../New folder/cypress/fixtures/locators.js';

describe('Main Page hyperlinks', () => {
    before (()=> {
    cy.visit('https://aqaguy.uk/')
  });

    afterEach(() => {
      cy.visit('https://aqaguy.uk/')
    });

    it('Verification that "Test Club" hyperlink directs user to the anorther page', () => {
      func.testClub()
      cy.visit('https://aqaguy.uk/')
    }); 

    // it('Verification that "Subcutaneous test" hyperlink directs user to the anorther page', () => {
    //   func.SubcutaneousTest()
    // });

    it('Verification that " Is TDD Effective?" hyperlink directs user to the anorther page', () => {
      func.IsTDDEffective()
    });

    it('Verification that "Introduction" hyperlink directs user to the anorther page', () => {
      func.Introduction()
    });

    it('Verification that "No architecture" hyperlink directs user to the anorther page', () => {
    func.noArchitecture()
    });

    it('Verification that "Layered architecture" hyperlink directs user to the anorther page', () => {
    func.layeredArchitecture()
    });

    // it('Verification that "Layered architecture examples" hyperlink directs user to the anorther page', () => {
    // func.layeredArchitectureExamples()
    // });

    it('Verification that "FAQ" hyperlink directs user to the anorther page', () => {
    func.FAQ()
    });

    // it('Verification that "Test Strategy Example" hyperlink directs user to the anorther page', () => {
    // func.testStrategyExample()
    // });

    // it('Verification that "Feature test model" hyperlink directs user to the anorther page', () => {
    // func.featureTestModel()
    // });

    // it('Verification that "An example of Subcutaneous test pattern" hyperlink directs user to the anorther page', () => {
    // func.AnExampleOfSubcutaneousTestPattern()
    // });

  //   it('Verification that "Several ways to address flaky tests issue" hyperlink directs user to the anorther page', () => {
  //   func.severalWaysToAddressFlakyTestsIssue()
  //   });

  //   it('Verification that "About Alexander Pushkarev" hyperlink directs user to the anorther page', () => {
  //   func.aboutAlexanderPushkarev()
  //   });

  //   it('Verification that "Alexander Pushkarev CV" hyperlink directs user to the anorther page', () => {
  //   func.alexanderPushkarevCV()
  //   });

  //   it('Verification that "  Alexander Pushkarev blog" hyperlink directs user to the anorther page', () => {
  //   func.AlexanderPushkarevBlog()
  //   cy.visit('https://aqaguy.uk/')
  //   });

  //   it('Verification that "Alexander Pushkarev publications on Meduim" hyperlink directs user to the anorther page', () => {
  //   func.AlexanderPushkarevPublicationsOnMeduim()
  // });
});