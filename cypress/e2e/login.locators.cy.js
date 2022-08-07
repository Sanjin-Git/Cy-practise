/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json');

describe("Login test cases", () => {
    beforeEach("Visit gallery app page and click on login button", () => {
        cy.visit("/");
        cy.get(locators.header.loginButton).click();
    })


   /* it ("Visit gallery app page", () => {
        cy.visit("/");
    })

    it ("Click on login button", () => {
        cy.get(locators.header.loginButton).click();
    })
    */

    it ("Login with invalid credentials", () => {
        cy.get(locators.login.emailInput).clear().type("@test3.com"); //clear sam stavljala u svakom testu da bih se osigurala u slucaju promene redosleda test case-ova
        cy.get(locators.login.passwordInput).clear().type("test2022");
        cy.get(locators.login.submitButton).click();
        cy.wait(3000);
    })

    it ("Login without input email", () => {
        cy.get(locators.login.emailInput).clear();
        cy.get(locators.login.passwordInput).clear().type("test2022");
        cy.get(locators.login.submitButton).click();
        cy.wait(3000);
    })

    it ("Login without input password", () => {
        cy.get(locators.login.emailInput).clear().type("test3@test3.com");
        cy.get(locators.login.passwordInput).clear();
        cy.get(locators.login.submitButton).click();
      
    })

    it ("Login with non registered credentials", () => {
        cy.get(locators.login.emailInput).clear().type("test99@test3.com");
        cy.get(locators.login.passwordInput).clear().type("test2022");
        cy.get(locators.login.submitButton).click();
    })

    it ("Login with one-char password", () => {
        cy.get(locators.login.emailInput).clear().type("test3@test3.com");
        cy.get(locators.login.passwordInput).clear().type("?");
        cy.get(locators.login.submitButton).click();
      
    })

    it ("Login with valid credentials and logout", () => {
        cy.get(locators.login.emailInput).clear().type("test3@test3.com");
        cy.get(locators.login.passwordInput).clear().type("test2022");
        cy.get(locators.login.submitButton).click();
        cy.wait(1000);
        cy.get(locators.header.logoutButton).eq(2).click();

    })
/* IT "LOGOUT" NAM VISE NE TREBA JER BEFOREACH NAM RESTARTUJE APP SVAKI PUT. LOGOUT SMO SAMO DODALI U LOGIN WITH VALID CREDENTIALS
    it ("Logout", () => {
        cy.wait(4000);
        cy.get(locators.header.logoutButton).eq(2).click(); //umesto eq moze i sa .first ili .last
    })
*/
    

})