import resultLocators from "../locators/ResultLocators";
import { BasePage } from "./BasePage";

export class ResultPage extends BasePage {
    verifyGreetingTitle(username) {
        super.verifyTextInElement(resultLocators.GREETINGS_TITLE, username)
        return this
    }

    verifyGender(gender) {
        super.verifyTableData('Gender', gender)
        return this
    }

    verifyHobbies(hasHobbies, hobbies) {
        if (hasHobbies) {
            hobbies.forEach((value) => {
                super.verifyTableData('Hobbies', value)
            })
        }
        return this
    }

    verifyTime(time) {
        super.verifyTableData('Time', time)
        return this
    }
}