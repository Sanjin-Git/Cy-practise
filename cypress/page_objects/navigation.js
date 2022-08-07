class Navigation {
    get loginButton() {
        return cy.get("a[href='/login']");
    }

    get logoutButton() {
        return cy.get("a[role='button ']");
    }

    get registrationButton() {
        return cy.get("a[href='/register']")
    }

    get createGalleyBtn() {
        return cy.get("[href='/create']")
    }

    get titleInputField() {
        return cy.get("[id='title']")
    }


    clickOnLoginButton() {
        this.loginButton.click();
    }

    clickOnLogoutButton() {
        this.logoutButton.click();
    }

    clickOnRegistrationButton() {
        this.registrationButton.click();
    }

    clickOnCreateGalleryBtn() {
        this.createGalleyBtn.click();
    }

    clickOnTitleInputField() {
        this.titleInputField.click();
    }

}

export const navigation = new Navigation()