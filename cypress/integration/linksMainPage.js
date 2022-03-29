import {LINKS} from '../fixtures/locators.js'
// import  HomePage from '../../../New folder/cypress/fixtures/locators.js'

describe('Main Page hyperlinks', () => {
    before (()=> {
    cy.visit('https://aqaguy.uk/')
  });

    afterEach(() => {
      cy.visit('https://aqaguy.uk/')
    })

    it('Verification that "Test Club" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.TEST_CLUB_LINK)
      .should("to.not.have", "href", "#undefined")
      cy.request('GET','https://aqaguy.uk/pages/ta/testclub/').then((response)=>{
        expect(response.status).equal(200)
    })
    }); 

    it('Verification that "Subcutaneous test" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Subcutaneous_test)
      .should("to.not.have", "href", "#undefined")
      cy.request('GET','https://alexspush.medium.com/an-alternative-to-ubiquitous-ui-level-checking-subcutaneous-tests-8d29e8883fc2').then((response)=>{
        expect(response.status).equal(200)
    })
    });

    it('Verification that " Is TDD Effective?" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Is_TDD_Effective)
      .should("to.not.have", "href", "#undefined")
       cy.request('GET','https://aqaguy.uk/pages/ta/tdd/is_tdd_effective').then((response)=>{
      expect(response.status).equal(200)
    })
    });

    it('Verification that "Introduction" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Introduction) .should("to.not.have", "href", "#undefined")
      cy.request({
        method: 'GET',
        url: 'https://aqaguy.uk/pages/ta/taf/taf_intro', 
      }).then((res =>{
        expect(response.status).equal(200)
      }))
    });

    it('Verification that "No architecture" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.No_architecture)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','https://aqaguy.uk/pages/ta/taf/taf_no_architecture').then((response)=>{
        expect(response.status).equal(200)
    })
    });

    it('Verification that "Layered architecture" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Layered_architecture)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','https://aqaguy.uk/pages/ta/taf/taf_layered').then((response)=>{
      expect(response.status).equal(200)
  })
    });

    it('Verification that "Layered architecture examples" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Layered_architecture_examples)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','http://aqaguy.blogspot.com/p/blog-page_26.html').then((response)=>{
      expect(response.status).equal(200)
  })
    });

    it('Verification that "FAQ" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.FAQ)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','https://aqaguy.uk/pages/ta/taf/taf_faq').then((response)=>{
      expect(response.status).equal(200)
  })
    });

    it('Verification that "Test Strategy Example" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Test_Strategy_Example)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','https://aqaguy.uk/pages/testing/test_strategy/test_strategy_example').then((response)=>{
      expect(response.status).equal(200)
  })
    });

    it('Verification that "Feature test model" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Feature_test_model)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','https://aqaguy.uk/pages/ta/ftm/feature_tests').then((response)=>{
      expect(response.status).equal(200)
  })
    });

    it('Verification that "An example of Subcutaneous test pattern" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.An_example_of_Subcutaneous_test_pattern)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','http://aqaguy.blogspot.com/2019/10/getting-most-of-you-automated-checks.html').then((response)=>{
      expect(response.status).equal(200)
  })
    });

    it('Verification that "Several ways to address flaky tests issue" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Several_ways_to_address_flaky_tests_issue)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','  https://aqaguy.uk/pages/ta/know-hows/flaky_tests_fix').then((response)=>{
      expect(response.status).equal(200)
  })
    });

    it('Verification that "About Alexander Pushkarev" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.About_Alexander_Pushkarev)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','https://aqaguy.uk/cv').then((response)=>{
      expect(response.status).equal(200)
  })
    });

    it('Verification that "Alexander Pushkarev CV" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Alexander_Pushkarev_CV)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','https://aqaguy.uk/cv_minimalistic').then((response)=>{
      expect(response.status).equal(200)
  })
    });

    it('Verification that "  Alexander Pushkarev blog" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Alexander_Pushkarev_blog, { timeout: 10000 })
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','http://aqaguy.blogspot.com/').then((response)=>{
      expect(response.status).equal(200)
  })
    });

    it('Verification that "Alexander Pushkarev publications on Meduim" hyperlink directs user to the anorther page', () => {
      cy.get(LINKS.Alexander_Pushkarev_publications_on_Meduim, { timeout: 10000 })
     .should("to.not.have", "href", "#undefined")
     cy.request('GET','https://alexspush.medium.com/').then((response)=>{
      expect(response.status).equal(200)
    });
  });
});