import {LINKS} from './locators.js'

export function test (){
    cy.get(LINKS.TEST_CLUB_LINK)
      .should("to.not.have", "href", "#undefined")       
    }

