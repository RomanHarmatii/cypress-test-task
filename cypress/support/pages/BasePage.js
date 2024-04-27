export class BasePage {
    verifyPopUpTextExist(locator) {
        cy.get(locator)
            .invoke('prop', 'validationMessage')
            .should('exist');
        return this
    }
}