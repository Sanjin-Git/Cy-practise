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

    get lastGalleryTitle() {
        return cy.get('h2 > a').first()
    }

    get descriptionField() {
        return cy.get('p')
    }

    get deleteGalleryBtn() {
        return cy.get('[class="btn btn-custom"]').first()
    }

    get allGalleriesBtn() {
        return cy.get('[href="/"]').last()
    }

    get myGalleriesBtn() {
        return cy.get('[href="/my-galleries"]')
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

    clickOnLastGalleryTitle() {
        this.lastGalleryTitle.click();
    }

    clickOnDeleteGalleryBtn() {
        this.deleteGalleryBtn.click();
    }



}

export const navigation = new Navigation()