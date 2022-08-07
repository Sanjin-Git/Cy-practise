/// <reference types="Cypress" />

import { navigation } from "../page_objects/navigation";
import { loginPage } from "../page_objects/loginPage";
import { createGalleryPage } from "../page_objects/createGalleryPage";
import { faker } from '@faker-js/faker';


describe("Create gallery test cases", () => {
        beforeEach ("Visit Gallery app, Login with valid credentials and click on Create gallery btn", () => {
            cy.visit("/");
            navigation.clickOnLoginButton();
            loginPage.login("tester@gmail.com", "test1234");
            navigation.clickOnCreateGalleryBtn();
        });

        it ("Creating Gallery with description", () => {
            createGalleryPage.createGalleryWithDescription (faker.animal.cat(), "this is gallery1", "https://www.computerhope.com/jargon/j/jpg.png");
            cy.wait(3000);
        })

        it ("Creating Gallery without description", () => {
            createGalleryPage.createGallery(faker.color.rgb(), "https://www.computerhope.com/jargon/j/jpg.png");
            cy.wait(5000);
        })

        it ("Creating Gallery with 256-char description", () => {
            createGalleryPage.createGalleryWithDescription (faker.animal.cat(), "SzSZzGSYxYJzquW9IcxZTkLfvCrkFTH2nN21pH8YQIQpqLEoM4XDsTt5MKBxQiMJXX50QNlYKtX161SELEsMGz8dbWaHm03bYJMsGx1t5ba28jpbAy8XarMqg6zUSaISvX5uS5N2W5lbdP3uPYqeBs9l6WMl88xzt8ei5Cjb037Mx4u58bCpUYs8r0hT9me3tWaKP3nrTRX2lY1nWdakuZGxQYo0HXaTaWBswCSaQfvtF493LGitB82Z3S1eRU7U", "https://www.computerhope.com/jargon/j/jpg.png");
            cy.wait(3000);
        })

        it ("Creating Gallery - invalid image URL", () => {
            createGalleryPage.createGallery(faker.color.rgb(), "https://gallery-app.");
            cy.wait(3000);
        })

        it ("Creating Gallery - invalid image format", () => {
            createGalleryPage.createGallery(faker.animal.cat(), "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa3%2FJune_odd-eyed-cat.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AJune_odd-eyed-cat.jpg&tbnid=V7Y4e4Rnz-clTM&vet=12ahUKEwj54M7RubX5AhUp4bsIHbfZAbYQMygAegUIARDaAQ..i&docid=vHZbd5a-M61DEM&w=2370&h=1927&q=cat%20jpg&ved=2ahUKEwj54M7RubX5AhUp4bsIHbfZAbYQMygAegUIARDaAQ");
            cy.wait(3000);
        })

        it ("Creating Gallery - one-char title", () => {
            createGalleryPage.createGallery("A", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-Cat.jpg/800px-A-Cat.jpg");
            cy.wait(3000);
        })

        it ("Creating Gallery - 256-char title", () => {
            createGalleryPage.createGallery("SzSZzGSYxYJzquW9IcxZTkLfvCrkFTH2nN21pH8YQIQpqLEoM4XDsTt5MKBxQiMJXX50QNlYKtX161SELEsMGz8dbWaHm03bYJMsGx1t5ba28jpbAy8XarMqg6zUSaISvX5uS5N2W5lbdP3uPYqeBs9l6WMl88xzt8ei5Cjb037Mx4u58bCpUYs8r0hT9me3tWaKP3nrTRX2lY1nWdakuZGxQYo0HXaTaWBswCSaQfvtF493LGitB82Z3S1eRU7U", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-Cat.jpg/800px-A-Cat.jpg");
            cy.wait(3000);
        })

        it ("Creating Gallery without Title", () => {
            createGalleryPage.createGallery ("{backspace}", "https://www.computerhope.com/jargon/j/jpg.png");
            cy.wait(3000);
        })

        it ("Creating Gallery without image URL", () => {
            createGalleryPage.createGallery (faker.animal.cat(), "{backspace}");
            cy.wait(3000);
        })

        
})