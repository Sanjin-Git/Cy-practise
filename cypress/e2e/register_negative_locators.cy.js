/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json');

import { faker } from '@faker-js/faker';

let user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}
describe("Negative test cases - register", ( )=> {
    
    beforeEach("Visit gallery app page and click on register btn", () => {
        cy.visit("/");
        cy.get("a[href='/register']").click();
    })


    it("Create registration without input First Name", () => {
        cy.get(locators.register.firstName).clear();
        cy.get(locators.register.email).type(user.email);
        cy.get(locators.register.password).type(user.password);
        cy.get(locators.register.passwordConfirmationButton).type(user.password);
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click();
    })

    it("Create registration without input Last Name", () => {
        cy.get(locators.register.firstName).type(user.firstName);
        cy.get(locators.register.lastName).clear();
        cy.get(locators.register.email).clear().type(user.email);
        cy.get(locators.register.password).clear().type(user.password);
        cy.get(locators.register.passwordConfirmationButton).clear().type(user.password);
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click();
    })

    it("Create registration without input Email", () => {
        cy.get(locators.register.firstName).clear().type(user.firstName);
        cy.get(locators.register.lastName).clear().type(user.lastName);
        cy.get(locators.register.email).clear();
        cy.get(locators.register.password).clear().type(user.password);
        cy.get(locators.register.passwordConfirmationButton).clear().type(user.password);
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click();
    })

    it("Create registration with invalid Email", () => {
        cy.get(locators.register.firstName).clear().type(user.firstName);
        cy.get(locators.register.lastName).clear().type(user.lastName);
        cy.get(locators.register.email).clear().type("@test4.com");
        cy.get(locators.register.password).clear().type(user.password);
        cy.get(locators.register.passwordConfirmationButton).clear().type(user.password);
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click();
    })

    it("Create registration with used Email adress", () => {
        cy.get(locators.register.firstName).clear().type(user.firstName);
        cy.get(locators.register.lastName).clear().type(user.lastName);
        cy.get(locators.register.email).clear().type("test4@test4.com");
        cy.get(locators.register.password).clear().type(user.password);
        cy.get(locators.register.passwordConfirmationButton).clear().type(user.password);
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click();
    })

    it("Create registration without input Password field", () => {
        cy.get(locators.register.firstName).clear().type(user.firstName);
        cy.get(locators.register.lastName).clear().type(user.lastName);
        cy.get(locators.register.email).clear().type(user.email);
        cy.get(locators.register.password).clear();
        cy.get(locators.register.passwordConfirmationButton).clear().type(user.password);
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click();
    })

    it("Create registration with Password shorter then 8 char", () => {
        cy.get(locators.register.firstName).clear().type(user.firstName);
        cy.get(locators.register.lastName).clear().type(user.lastName);
        cy.get(locators.register.email).clear().type(user.email);
        cy.get(locators.register.password).clear().type("1508");
        cy.get(locators.register.passwordConfirmationButton).clear().type("1508");
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click();
    })

    it("Create registration with invalid Password format", () => {
        cy.get(locators.register.firstName).clear().type(user.firstName);
        cy.get(locators.register.lastName).clear().type(user.lastName);
        cy.get(locators.register.email).clear().type(user.email);
        cy.get(locators.register.password).clear().type(".........");
        cy.get(locators.register.passwordConfirmationButton).clear().type(".........");
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click();
    })


    it("Create registration when password confirmation don't match", () => {
        cy.get(locators.register.firstName).clear().type(user.firstName);
        cy.get(locators.register.lastName).clear().type(user.lastName);
        cy.get(locators.register.email).clear().type(user.email);
        cy.get(locators.register.password).clear().type("test2022");
        cy.get(locators.register.passwordConfirmationButton).clear().type("test202");
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click();
    })

    it("Create registration without Password confirmation", () => {
        cy.get(locators.register.firstName).clear().type(user.firstName);
        cy.get(locators.register.lastName).clear().type(user.lastName);
        cy.get(locators.register.email).clear().type(user.email);
        cy.get(locators.register.password).clear().type(user.password);
        cy.get(locators.register.passwordConfirmationButton).clear();
        cy.get(locators.register.termsAndConditions).check();
        cy.get(locators.register.submitRegistrationButton).click();
    })

    it("Create registration without accepting terms and conditions", () => {
        cy.get(locators.register.firstName).clear().type(user.firstName);
        cy.get(locators.register.lastName).clear().type(user.lastName);
        cy.get(locators.register.email).clear().type(user.email);
        cy.get(locators.register.password).clear().type(user.password);
        cy.get(locators.register.passwordConfirmationButton).clear().type(user.password);
        cy.get(locators.register.termsAndConditions).uncheck();
        cy.get(locators.register.submitRegistrationButton).click();
    })

    it("Create registration without clicking on Submit button", () => {
        cy.get(locators.register.firstName).clear().type(user.firstName);
        cy.get(locators.register.lastName).clear().type(user.lastName);
        cy.get(locators.register.email).clear().type(user.email);
        cy.get(locators.register.password).clear().type(user.password);
        cy.get(locators.register.passwordConfirmationButton).clear().type(user.password);
        cy.get(locators.register.termsAndConditions).check();
    })

})
    