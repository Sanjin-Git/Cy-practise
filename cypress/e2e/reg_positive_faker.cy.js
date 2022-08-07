/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json');

import { faker } from '@faker-js/faker';

let user = {
    firstName: faker.name.firstName(), 
    lastName: faker.name.lastName(),
    email: faker.internet.email(),//kada zelimo da koristimo isti email u svim testovima upotrebljavamo user.email; ako zelimo svaki put novi mail koristimo funkciju: faker.internet.email()
    password: faker.internet.password()
}


describe("Positive test cases - register", ( )=> {
    beforeEach("Visit page and click o n Register button", () => {
        cy.visit("/");
        cy.get(locators.header.registerButton).click();
    })
    /*afterEach("Logout", () =>{
        cy.wait(4000);
        cy.get('[class="nav-link nav-buttons"]').eq(2).click();
    })
    */
  /*  it ("Visit gallery app page", () => {
        cy.visit("/");
    })

    it("Click on register button", () =>{
        cy.get(locators.header.registerButton).click();
    })
*/
    it("Create registration - vaild input", () => {
        cy.get(locators.register.firstName).type("Test445");
        cy.get(locators.register.lastName).type("Test446");
        cy.get(locators.register.registerEmail).type(user.email);
        cy.get(locators.register.registerPassword).type(user.password);
        cy.get(locators.register.passwordConfirmationButton).type(user.password);
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click();
        cy.wait(2000);
    })
    /*it ("Logout", () => {
        cy.wait(4000);
        cy.get('[class="nav-link nav-buttons"]').eq(2).click();
    })
    /*
    it("Click on register button", () =>{
        cy.get("a[href='/register']").click();
    })
*/
    it("Create registration with one-char first name and last name", () => {
        cy.get(locators.register.firstName).clear().type("*");
        cy.get(locators.register.lastName).clear().type("2");
        cy.get(locators.register.registerEmail).clear().type(faker.internet.email());
        cy.get(locators.register.registerPassword).clear().type(user.password);
        cy.get(locators.register.passwordConfirmationButton).clear().type(user.password);
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click()
    })



})