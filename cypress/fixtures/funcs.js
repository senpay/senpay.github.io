import {LINKS} from './locators.js';
import {HYPERLINKS} from './hypelinks.js';

export function testClub (){
    cy.get(LINKS.TEST_CLUB_LINK).click()
      .should("to.not.have", "href", "#undefined").wait(3000)    
      cy.request('GET', HYPERLINKS.TEST_CLUB).then((response)=>{
          expect(response.status).equal(200)
    })
    };

export function SubcutaneousTest (){
    cy.get(LINKS.Subcutaneous_test).click().wait(10000)
      .should("to.not.have", "href", "#undefined").wait(10000)
      cy.request('GET', HYPERLINKS.Subcutaneous_test).then((response)=>{
        expect(response.status).equal(200)
    })
    };

export function IsTDDEffective (){
    cy.get(LINKS.Is_TDD_Effective).click()
    .should("to.not.have", "href", "#undefined").wait(3000)
     cy.request('GET',HYPERLINKS.Is_TDD_Effective).then((response)=>{
        expect(response.status).equal(200)
    })
    };

export function Introduction (){
    cy.get(LINKS.Introduction).click()
    .should("to.not.have", "href", "#undefined").wait(3000)
    cy.request({
      method: 'GET',
      url: HYPERLINKS.Introduction, 
    }).then((res =>{
      expect(response.status).equal(200)
    }))
    };

export function noArchitecture (){
    cy.get(LINKS.No_architecture).click()
     .should("to.not.have", "href", "#undefined").wait(3000)
     cy.request('GET', HYPERLINKS.No_architecture).then((response)=>{
        expect(response.status).equal(200)})
    };

export function layeredArchitecture (){
    cy.get(LINKS.Layered_architecture).click().wait(3000)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET',HYPERLINKS.Layered_architecture).then((response)=>{
      expect(response.status).equal(200)})
    };

export function layeredArchitectureExamples (){
    cy.get(LINKS.Layered_architecture_examples).click().wait(3000)
    .should("to.not.have", "href", "#undefined")
    cy.request('GET',HYPERLINKS.Layered_architecture_examples).then((response)=>{
     expect(response.status).equal(200)})
    };

export function FAQ (){
    cy.get(LINKS.FAQ).click()
    .should("to.not.have", "href", "#undefined")
    cy.request('GET',HYPERLINKS.FAQ).then((response)=>{
     expect(response.status).equal(200)})
    };

export function testStrategyExample (){
    cy.get(LINKS.Test_Strategy_Example).click()
     .should("to.not.have", "href", "#undefined")
     cy.request('GET',HYPERLINKS.Test_Strategy_Example).then((response)=>{
      expect(response.status).equal(200)})
    };

export function featureTestModel (){
    cy.get(LINKS.Feature_test_model).click().wait(3000)
    .should("to.not.have", "href", "#undefined")
    cy.request('GET',HYPERLINKS.Feature_test_model).then((response)=>{
     expect(response.status).equal(200)})
    };
     
export function AnExampleOfSubcutaneousTestPattern (){
    cy.get(LINKS.An_example_of_Subcutaneous_test_pattern).click().wait(3000)
     .should("to.not.have", "href", "#undefined")
     cy.request('GET',HYPERLINKS.An_example_of_Subcutaneous_test_pattern).then((response)=>{
      expect(response.status).equal(200)})
    };

export function severalWaysToAddressFlakyTestsIssue (){
    cy.get(LINKS.Several_ways_to_address_flaky_tests_issue).click().wait(3000)
    .should("to.not.have", "href", "#undefined")
    cy.request('GET',HYPERLINKS.Several_ways_to_address_flaky_tests_issue).then((response)=>{
     expect(response.status).equal(200)})
    };

export function aboutAlexanderPushkarev (){
    cy.get(LINKS.About_Alexander_Pushkarev).click().wait(3000)
    .should("to.not.have", "href", "#undefined")
    cy.request('GET',HYPERLINKS.About_Alexander_Pushkarev).then((response)=>{
     expect(response.status).equal(200)})
    };

export function alexanderPushkarevCV (){
    cy.get(LINKS.Alexander_Pushkarev_CV).click().wait(3000)
    .should("to.not.have", "href", "#undefined")
    cy.request('GET',HYPERLINKS.Alexander_Pushkarev_CV).then((response)=>{
     expect(response.status).equal(200)})
    };

export function AlexanderPushkarevBlog (){
    cy.get(LINKS.Alexander_Pushkarev_blog, { timeout: 3000 }).click()
    .should("to.not.have", "href", "#undefined")
    cy.request('GET',HYPERLINKS.Alexander_Pushkarev_blog).then((response)=>{
     expect(response.status).equal(200)})
    };

export function AlexanderPushkarevPublicationsOnMeduim (){
    cy.get(LINKS.Alexander_Pushkarev_publications_on_Meduim, { timeout: 3000 }).click()
    .should("to.not.have", "href", "#undefined")
    cy.request('GET', HYPERLINKS.Alexander_Pushkarev_publications_on_Meduim).then((response)=>{
     expect(response.status).equal(200)})
    };

