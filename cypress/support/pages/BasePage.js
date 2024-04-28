import baseLocators from "../locators/BaseLocators"

export class BasePage {

    click(locator) {
        cy.get(locator)
            .click()
            return this
    }

    type(locator, text) {
        cy.get(locator)
            .clear()
            .type(text)
            .should('have.value', text)
            return this
    }

    selectOptionFromDropDown(dropDownLocator, option) {
        cy.get(dropDownLocator)
            .select(option)
        return this
    }

    visitPage(url) {
        cy.visit(url)
        return this
    }

    verifyPageTitle(title) {
        cy.title().should('eq', title)
        return this
    }

    verifyTextInElement(locator, text) {
        cy.get(locator).should('contain.text', text)
        return this
    }

    verifyArrtOfElement(locator, attr, attrName) {
        cy.get(locator).should('have.attr', attr, attrName)
    }

    verifyPopUpExist(locator) {
        cy.get(locator)
            .invoke('prop', 'validationMessage')
            .should('exist')
        return this
    }

    verifyLoadingWasFinnished() {
        cy.get(baseLocators.LOADING).should('not.exist')
        return this
    }


}