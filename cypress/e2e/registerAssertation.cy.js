/// <reference types="Cypress" />


import { faker } from '@faker-js/faker';
import { general } from '../page_objects/general';
import { navigation } from '../page_objects/navigation';
import { registrationPage } from '../page_objects/registrationPage';

let user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    passwordConfirmation: faker.internet.password()
}
describe("Negative test cases - register", ( )=> {
    
    beforeEach("Visit gallery app page and click on register btn", () => {
        cy.visit("/");
        cy.url().should('contain', '/');
        navigation.registrationButton.should('exist');
        navigation.clickOnRegistrationButton();
        cy.url().should('contain', '/register')
        general.headerTitle.should('have.text', 'Register')
    })


    it ("Create registration without input First Name", () => {
    registrationPage.register('{backspace}', user.lastName, user.email, user.password, user.password);
    cy.url().should('contain', '/register');
    })

    it("Create registration without input Last Name", () => {
        registrationPage.register(user.firstName, '{backspace}', user.email, user.password, user.password);
        cy.url().should('contain', '/register');
        
    })

    it("Create registration without input Email", () => {
        registrationPage.register(user.firstName, user.lastName, '{backspace}', user.password, user.password);
        cy.url().should('contain', '/register');
    })

    it("Create registration with invalid Email", () => {
        registrationPage.register(user.firstName, user.lastName, '@test.com', user.password, user.password);
        cy.url().should('contain', '/register');
    })

    it("Create registration with used Email adress", () => {
        registrationPage.register(user.firstName, user.lastName, 'test3@test3.com', user.password, user.password);
        cy.url().should('contain', '/register');
        general.errorMessage.should('exist')
        .and('have.text', 'The email has already been taken.')
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('have.css', 'color', 'rgb(114, 28, 36)');
        navigation.loginButton.should('exist')
        
    })

    it("Create registration without input Password field", () => {
        registrationPage.register(user.firstName, user.lastName, user.email, '{backspace}', user.password);
        cy.url().should('contain', '/register');
    })

    it("Create registration with Password shorter then 8 char", () => {
        registrationPage.register(user.firstName, user.lastName, user.email,'test', 'test');
        cy.url().should('contain', '/register');
        general.errorMessage.should('exist')
        .and('have.text', 'The password must be at least 8 characters.')
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('have.css', 'color', 'rgb(114, 28, 36)');
    })

    it("Create registration with invalid Password format", () => {
        registrationPage.register(user.firstName, user.lastName, user.email,'.........', '.........');
        cy.url().should('contain', '/register');
        general.errorMessage.should('exist')
        .and('have.text', 'The password format is invalid.')
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('have.css', 'color', 'rgb(114, 28, 36)');
    })


    it("Create registration when password confirmation doesn't match", () => {
        registrationPage.register(user.firstName, user.lastName, user.email, user.password, user.passwordConfirmation);
        cy.url().should('contain', '/register');
        general.errorMessage.should('exist')
        .and('have.text', 'The password confirmation does not match.')
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('have.css', 'color', 'rgb(114, 28, 36)');
    })

    it("Create registration without Password confirmation", () => {
        registrationPage.register(user.firstName, user.lastName, user.email, user.password, '{enter}');
        cy.url().should('contain', '/register');
    })

    it("Create registration without accepting terms and conditions", () => {
        registrationPage.registerCredentials(user.firstName, user.lastName, user.email, user.password, user.password);
        registrationPage.termsAndConditions.uncheck();
        registrationPage.submitBtn.click();
        cy.url().should('contain', '/register');
        general.errorMessage.should('exist')
        .and('have.text', 'The terms and conditions must be accepted.')
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('have.css', 'color', 'rgb(114, 28, 36)');

    })

    it("Create registration without clicking on Submit button", () => {
        registrationPage.registerCredentials(user.firstName, user.lastName, user.email, user.password, user.password);
        registrationPage.termsAndConditions.check();
        cy.url().should('contain', '/register');
    })

})

    describe("Positve test cases - register", ()=> {  
        beforeEach("Visit gallery app page and click on register btn", () => {
            cy.visit("/");
            cy.url().should('contain', '/');
            navigation.registrationButton.should('exist');
            navigation.clickOnRegistrationButton();
            cy.url().should('contain', '/register')
            general.headerTitle.should('have.text', 'Register')
        })

    it("Create registration - vaild input", () => {
        registrationPage.register(user.firstName, user.lastName, faker.internet.email(), 'test2022', 'test2022');
        cy.wait(1000);
        cy.url().should('contain', 'https://gallery-app.vivifyideas.com/');
        general.headerTitle.should('have.text', 'All Galleries');
        navigation.allGalleriesBtn.should('exist');
        navigation.myGalleriesBtn.should('exist');
        navigation.createGalleyBtn.should('exist');
        navigation.logoutButton.should('exist')
    })
   
    it("Create registration with one-char first name and last name", () => {
        registrationPage.register('A', 'B', faker.internet.email(), 'test2022', 'test2022');
        cy.wait(1000);
        cy.url().should('contain', 'https://gallery-app.vivifyideas.com/');
        general.headerTitle.should('have.text', 'All Galleries');
        navigation.allGalleriesBtn.should('exist');
        navigation.myGalleriesBtn.should('exist');
        navigation.createGalleyBtn.should('exist');
        navigation.logoutButton.should('exist')
    })

})