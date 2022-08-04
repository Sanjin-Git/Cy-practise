/// <reference types="Cypress" />

describe("Login test cases", () => {
    it ("Visit gallery app page", () => {
        cy.visit("/");
    })

    it ("Click on login button", () => {
        cy.get("a[href='/login']").click();
    })

    it ("Login with invalid credentials", () => {
        cy.get("#email").clear().type("@test3.com"); //clear sam stavljala u svakom testu da bih se osigurala u slucaju promene redosleda test case-ova
        cy.get("#password").clear().type("test2022");
        cy.get("button[type='submit']").click();
        cy.wait(3000);
    })

    it ("Login without input email", () => {
        cy.get("#email").clear();
        cy.get("#password").clear().type("test2022");
        cy.get("button[type='submit']").click();
        cy.wait(3000);
    })

    it ("Login without input password", () => {
        cy.get("#email").clear().type("test3@test3.com");
        cy.get("#password").clear();
        cy.get("button[type='submit']").click();
      
    })

    it ("Login with non registered credentials", () => {
        cy.get("#email").clear().type("test99@test3.com");
        cy.get("#password").clear().type("test2022");
        cy.get("button[type='submit']").click();
    })

    it ("Login with one-char password", () => {
        cy.get("#email").clear().type("test3@test3.com");
        cy.get("#password").clear().type("?");
        cy.get("button[type='submit']").click();
      
    })

    it ("Login with valid credentials", () => {
        cy.get("#email").clear().type("test3@test3.com");
        cy.get("#password").clear().type("test2022");
        cy.get("button[type='submit']").click();
    })

    it ("Logout", () => {
        cy.wait(4000);
        cy.get('[class="nav-link nav-buttons"]').eq(2).click();
    })

    

})