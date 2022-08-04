/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email();

describe("Positive test cases - register", ( )=> {
    it ("Visit gallery app page", () => {
        cy.visit("/");
    })

    it("Click on register button", () =>{
        cy.get("a[href='/register']").click();
    })

    it("Create registration - vaild input", () => {
        cy.get('#first-name').type("Test445");
        cy.get('#last-name').type("Test445");
        cy.get('#email').type("t1e2t4@test.com");
        cy.get('#password').type("test2022");
        cy.get('#password-confirmation').type("test2022");
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })
    it ("Logout", () => {
        cy.wait(4000);
        cy.get('[class="nav-link nav-buttons"]').eq(2).click();
    })

    it("Click on register button", () =>{
        cy.get("a[href='/register']").click();
    })

    it("Create registration with one-char first name and last name", () => {
        cy.get('#first-name').clear().type("*");
        cy.get('#last-name').clear().type("2");
        cy.get('#email').clear().type("t0e1s2t3t@test1.com");
        cy.get('#password').clear().type("test2022");
        cy.get('#password-confirmation').clear().type("test2022");
        cy.get('.form-check-input').check();
        cy.get('.btn').click();
    })



})