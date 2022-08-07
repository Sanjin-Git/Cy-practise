class CreateGalleryPage {

    get titleInput() {
        return cy.get("#title");
    }

    get descriptionInput() {
        return cy.get("[id='description']");
    }

    get imageUrlInput() {
        return cy.get(".input-group > .form-control");
    }

    get submitButton() {
        return cy.get("form > :nth-child(4)");
    }

    createGallery(title, imageUrl) {
        this.titleInput.type(title);
        this.imageUrlInput.type(imageUrl);
        this.submitButton.click();
    }

    createGalleryWithDescription(title, description, imageUrl) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageUrlInput.type(imageUrl);
        this.submitButton.click();
    }
}

export const createGalleryPage = new CreateGalleryPage();
