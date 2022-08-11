/// <reference types="Cypress" />

import { navigation } from "../page_objects/navigation";
import { loginPage } from "../page_objects/loginPage";
import { createGalleryPage } from "../page_objects/createGalleryPage";
import { faker } from '@faker-js/faker';
import { general } from"../page_objects/general";

let galerija = {
    imeGalerije: faker.animal.dog(),
    description: faker.music.songName()
}


describe("Create gallery test cases", () => {
        beforeEach ("Visit Gallery app, Login with valid credentials and click on Create gallery btn", () => {
            cy.visit("/");
            cy.url().should('contains', 'https://gallery-app.vivifyideas.com');
            general.headerTitle.should('have.text', 'All Galleries');
            navigation.loginButton.should('exist');
            navigation.clickOnLoginButton();
            cy.url().should('contain', '/login');
            general.headerTitle.should('have.text', 'Please login');
            loginPage.login("tester@gmail.com", "test1234");
            cy.url().should('contains', 'https://gallery-app.vivifyideas.com');
            navigation.clickOnCreateGalleryBtn();
            cy.url().should('contain', '/create');
            general.headerTitle.should('have.text', 'Create Gallery');
        });

        it ("Create Gallery with description, get that gallery and delete it", () => {
            createGalleryPage.createGalleryWithDescription (galerija.imeGalerije, galerija.description, "https://www.computerhope.com/jargon/j/jpg.png");
            cy.url().should('contains', 'https://gallery-app.vivifyideas.com');
            general.headerTitle.should('have.text', 'All Galleries');
            navigation.lastGalleryTitle.should('contain', galerija.imeGalerije);
            navigation.clickOnLastGalleryTitle();
            navigation.descriptionField.should("exist")
            .and('contain', galerija.description);
            navigation.deleteGalleryBtn.should('exist');
            navigation.clickOnDeleteGalleryBtn(); // pokusala sam ovde na razne nacine da ubacim .click('{enter}') kako bih potvrdila brisanje, ali nisam uspela. Kako?
            cy.url().should('contains', 'https://gallery-app.vivifyideas.com');
            navigation.lastGalleryTitle.should('not.contain', galerija.imeGalerije);
        })

        it ("Create Gallery without description, get that gallery and delete it", () => {
            createGalleryPage.createGallery(galerija.imeGalerije, "https://www.computerhope.com/jargon/j/jpg.png");
            cy.url().should('contains', 'https://gallery-app.vivifyideas.com');
            general.headerTitle.should('have.text', 'All Galleries');
            navigation.lastGalleryTitle.should('contain', galerija.imeGalerije);
            navigation.clickOnLastGalleryTitle();
            cy.wait(1000);
            navigation.deleteGalleryBtn.should('exist');
            navigation.clickOnDeleteGalleryBtn();
            cy.url().should('contains', 'https://gallery-app.vivifyideas.com');
            navigation.lastGalleryTitle.should('not.contain', galerija.imeGalerije);
        })

        it("Creating Gallery with 256-char description, getting that gallery and deleting it", () => {
            createGalleryPage.createGalleryWithDescription (galerija.imeGalerije, "SzSZzGSYxYJzquW9IcxZTkLfvCrkFTH2nN21pH8YQIQpqLEoM4XDsTt5MKBxQiMJXX50QNlYKtX161SELEsMGz8dbWaHm03bYJMsGx1t5ba28jpbAy8XarMqg6zUSaISvX5uS5N2W5lbdP3uPYqeBs9l6WMl88xzt8ei5Cjb037Mx4u58bCpUYs8r0hT9me3tWaKP3nrTRX2lY1nWdakuZGxQYo0HXaTaWBswCSaQfvtF493LGitB82Z3S1eRU7U", "https://www.computerhope.com/jargon/j/jpg.png");
            cy.url().should('contains', 'https://gallery-app.vivifyideas.com');
            general.headerTitle.should('have.text', 'All Galleries');
            navigation.lastGalleryTitle.should('contain', galerija.imeGalerije);
            navigation.clickOnLastGalleryTitle();
            navigation.descriptionField.should("exist")
            .and('contain', "SzSZzGSYxYJzquW9IcxZTkLfvCrkFTH2nN21pH8YQIQpqLEoM4XDsTt5MKBxQiMJXX50QNlYKtX161SELEsMGz8dbWaHm03bYJMsGx1t5ba28jpbAy8XarMqg6zUSaISvX5uS5N2W5lbdP3uPYqeBs9l6WMl88xzt8ei5Cjb037Mx4u58bCpUYs8r0hT9me3tWaKP3nrTRX2lY1nWdakuZGxQYo0HXaTaWBswCSaQfvtF493LGitB82Z3S1eRU7U");
            navigation.deleteGalleryBtn.should('exist');
            navigation.clickOnDeleteGalleryBtn();
            cy.url().should('contains', 'https://gallery-app.vivifyideas.com');
            navigation.lastGalleryTitle.should('not.contain', galerija.imeGalerije);
        })

        it("Creating Gallery - invalid image URL", () => {
            createGalleryPage.createGallery(faker.color.rgb(), "https://gallery-app.");
            cy.url().should('contains', '/create');
            general.errorMessage.should('exist')
            .and('have.text', 'Wrong format of image')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)')
            .and('have.css', 'color', 'rgb(114, 28, 36)');
        })

        it("Creating Gallery - invalid image format", () => {
            createGalleryPage.createGallery(faker.animal.cat(), "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa3%2FJune_odd-eyed-cat.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AJune_odd-eyed-cat.jpg&tbnid=V7Y4e4Rnz-clTM&vet=12ahUKEwj54M7RubX5AhUp4bsIHbfZAbYQMygAegUIARDaAQ..i&docid=vHZbd5a-M61DEM&w=2370&h=1927&q=cat%20jpg&ved=2ahUKEwj54M7RubX5AhUp4bsIHbfZAbYQMygAegUIARDaAQ");
            cy.url().should('contains', '/create');
        })

        it ("Creating Gallery - one-char title", () => {
            createGalleryPage.createGallery("A", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-Cat.jpg/800px-A-Cat.jpg");
            cy.url().should('contains', '/create');
            general.errorMessage.should('exist')
            .and('have.text', 'The title must be at least 2 characters.')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)')
            .and('have.css', 'color', 'rgb(114, 28, 36)');
        })

        it("Creating Gallery - 256-char title", () => {
            createGalleryPage.createGallery("SzSZzGSYxYJzquW9IcxZTkLfvCrkFTH2nN21pH8YQIQpqLEoM4XDsTt5MKBxQiMJXX50QNlYKtX161SELEsMGz8dbWaHm03bYJMsGx1t5ba28jpbAy8XarMqg6zUSaISvX5uS5N2W5lbdP3uPYqeBs9l6WMl88xzt8ei5Cjb037Mx4u58bCpUYs8r0hT9me3tWaKP3nrTRX2lY1nWdakuZGxQYo0HXaTaWBswCSaQfvtF493LGitB82Z3S1eRU7U", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-Cat.jpg/800px-A-Cat.jpg");
            cy.url().should('contains', '/create');
            general.errorMessage.should('exist')
            .and('have.text', 'The title may not be greater than 255 characters.')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)')
            .and('have.css', 'color', 'rgb(114, 28, 36)');
        })

        it ("Creating Gallery without Title", () => {
            createGalleryPage.createGallery ("{backspace}", "https://www.computerhope.com/jargon/j/jpg.png");
            cy.url().should('contains', '/create');
        })

        it("Creating Gallery without image URL", () => {
            createGalleryPage.createGallery (faker.animal.cat(), "{backspace}");
            cy.url().should('contains', '/create');
        })

        
})