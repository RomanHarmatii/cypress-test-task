import formLocators from "../locators/FormLocators";
import { BasePage } from "./BasePage";

export class Form extends BasePage {

    clickSubmitButton() {
        cy.get(formLocators.SUBMIT_BUTTON)
            .click()
        return this
    }

    verifyPopUpTextExistUsernameField() {
        super.verifyPopUpTextExist(formLocators.USERNAME_FIELD)
        return this
    }

    verifyPopUpTextExistPasswordField() {
        super.verifyPopUpTextExist(formLocators.PASSWORD_FIELD)
        return this
    }

} export default Form;