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
        return cy.get('button[type="submit"]').first();
    }

   

    createGallery(title, imageUrl) {  //mozemo odmah dodati description kao opcioni parametar u funkciji: createGallery(title, imageURL, description = "{backspace}") {}
        this.titleInput.type(title);
        this.imageUrlInput.type(imageUrl);
        this.submitButton.click();
    }

    createGalleryWithDescription(title, description, imageUrl) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageUrlInput.type(imageUrl);
       // cy.contains('Add image').click(); AKO ZELIMO DA DODAMO JOS JEDNU FOTOGRAFIJU, NE MOZEMO DA UHVATIMO GETTER, MOZE I CY.CONTAINS
        this.submitButton.click();
    }
}

export const createGalleryPage = new CreateGalleryPage();
