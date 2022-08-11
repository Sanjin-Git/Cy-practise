const locators = require('../fixtures/locators.json');


import { navigation } from "../page_objects/navigation";
import { loginPage } from "../page_objects/loginPage";
import { faker } from '@faker-js/faker';

let user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}

describe("Login test cases", () => {
    beforeEach("Visit gallery app page and click on login button", () => {
        cy.visit("/");
        navigation.clickOnLoginButton();

    })

    it ("Login without input email", () => {
        loginPage.login('{backspace}' , 'test2022');
        cy.wait(3000);
    })

    it ("Login without input password", () => {
        loginPage.login(user.email, "{backspace}");
    })

    it ("Login with non registered credentials", () => {
        loginPage.login(user.email, user.password);
    })

    it ("Login with one-char password", () => {
        loginPage.login(user.email, "*");
      
    })

    it ("Login with valid credentials and logout", () => {
        loginPage.login('test3@test3.com', 'test2022')
        cy.wait(1000);
        navigation.clickOnLogoutButton() //cy.get(locators.header.logoutButton).eq(2).click();

    })
/* LOGOUT NAM VISE NE TREBA JER BEFOREACH NAM RESTARTUJE APP SVAKI PUT. LOGOUT SMO SAMO DODALI U LOGIN WITH VALID CREDENTIALS
    it ("Logout", () => {
        cy.wait(4000);
        cy.get(locators.header.logoutButton).eq(2).click(); //umesto eq moze i sa .first ili .last
    })
*/
})