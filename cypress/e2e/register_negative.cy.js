/// <reference types="Cypress" />

describe("Negative test cases - register", ( )=> {
    it("Visit gallery app page", () => {
        cy.visit("/");
    })

    it("Click on register button", () =>{
        cy.get("a[href='/register']").click();
    })

    it("Create registration without input First Name", () => {
        cy.get('#first-name').clear();
        cy.get('#last-name').type("Test445");
        cy.get('#email').type("test0512@test512.com");
        cy.get('#password').type("test2022");
        cy.get('#password-confirmation').type("test2022");
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })

    it("Create registration without input Last Name", () => {
        cy.get('#first-name').type("Test445");
        cy.get('#last-name').clear();
        cy.get('#email').clear().type("test0512@test512.com");
        cy.get('#password').clear().type("test2022");
        cy.get('#password-confirmation').clear().type("test2022");
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })

    it("Create registration without input Email", () => {
        cy.get('#first-name').clear().type("Test445");
        cy.get('#last-name').clear().type("Test445");
        cy.get('#email').clear();
        cy.get('#password').clear().type("test2022");
        cy.get('#password-confirmation').clear().type("test2022");
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })

    it("Create registration with invalid Email", () => {
        cy.get('#first-name').clear().type("Test445");
        cy.get('#last-name').clear().type("Test445");
        cy.get('#email').clear().type("@test4.com");
        cy.get('#password').clear().type("test2022");
        cy.get('#password-confirmation').clear().type("test2022");
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })

    it("Create registration with used Email adress", () => {
        cy.get('#first-name').clear().type("Test445");
        cy.get('#last-name').clear().type("Test445");
        cy.get('#email').clear().type("test4@test4.com");
        cy.get('#password').clear().type("test2022");
        cy.get('#password-confirmation').clear().type("test2022");
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })

    it("Create registration without input Password field", () => {
        cy.get('#first-name').clear().type("Test445");
        cy.get('#last-name').clear().type("Test445");
        cy.get('#email').clear().type("test0512@test512.com");
        cy.get('#password').clear();
        cy.get('#password-confirmation').clear().type("test2022");
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })

    it("Create registration with Password shorter then 8 char", () => {
        cy.get('#first-name').clear().type("Test445");
        cy.get('#last-name').clear().type("Test445");
        cy.get('#email').clear().type("test0512@test512.com");
        cy.get('#password').clear().type("1508");
        cy.get('#password-confirmation').clear().type("1508");
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })

    it("Create registration with invalid Password format", () => {
        cy.get('#first-name').clear().type("Test445");
        cy.get('#last-name').clear().type("Test445");
        cy.get('#email').clear().type("test0512@test512.com");
        cy.get('#password').clear().type(".........");
        cy.get('#password-confirmation').clear().type(".........");
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })


    it("Create registration when password confirmation don't match", () => {
        cy.get('#first-name').clear().type("Test445");
        cy.get('#last-name').clear().type("Test445");
        cy.get('#email').clear().type("test0512@test512.com");
        cy.get('#password').clear().type("test2022");
        cy.get('#password-confirmation').clear().type("test202");
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })

    it("Create registration without Password confirmation", () => {
        cy.get('#first-name').clear().type("Test445");
        cy.get('#last-name').clear().type("Test445");
        cy.get('#email').clear().type("test0512@test512.com");
        cy.get('#password').clear().type("test2022");
        cy.get('#password-confirmation').clear();
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })

    it("Create registration without accepting terms and conditions", () => {
        cy.get('#first-name').clear().type("Test445");
        cy.get('#last-name').clear().type("Test445");
        cy.get('#email').clear().type("test0512@test512.com");
        cy.get('#password').clear().type("test2022");
        cy.get('#password-confirmation').clear().type("test2022");
        cy.get('.form-check-input').uncheck();
        cy.get('.btn').click();
    })

    it("Create registration without clicking on Submit button", () => {
        cy.get('#first-name').clear().type("Test445");
        cy.get('#last-name').clear().type("Test445");
        cy.get('#email').clear().type("test0512@test512.com");
        cy.get('#password').clear().type("test2022");
        cy.get('#password-confirmation').clear().type("test2022");
        cy.get('.form-check-input').check();
    })
    
})