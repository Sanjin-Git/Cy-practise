
class RegistrationPage {

    get firstNameInput() {
        return cy.get('[id="first-name"]')
    }

    get lastNameInput() {
        return cy.get('[id="last-name"]')
    }


    get emailInput() {
        return cy.get('[id="email"]')
    }

    get passwordInput() {
        return cy.get('[id="password"]')
    }

    get confirmPasswordInput() {
        return cy.get('[id="password-confirmation"]')
    }

    get termsAndConditions() {
        return cy.get('[class="form-check-input"]')
    }

    get submitBtn() {
        return cy.get('[class="btn btn-custom"]')
    }

    register(firstName, lastName, email, password, passwordConfirmation) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.confirmPasswordInput.type(passwordConfirmation);
        this.termsAndConditions.check();
        this.submitBtn.click()
    }

    registerCredentials(firstName, lastName, email, password, passwordConfirmation) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.confirmPasswordInput.type(passwordConfirmation);
    }

}

export const registrationPage = new RegistrationPage();

