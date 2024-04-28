import formLocators from "../locators/FormLocators";
import { BasePage } from "./BasePage";
import { DataGeneration } from "../utilities/DataGeneration";

const dataGeneration = new DataGeneration()

export class Form extends BasePage {

    getRandomGender() {
        let gender = dataGeneration.getRandomBool() ? 'Male' : 'Female'
        return gender
    }

    getRandomHobbies() {
        let allHobbies = ['Reading', 'Sports', 'Music']
        let hobbies = new Array()
        let numberOfHobbies = dataGeneration.getRandomInteger(1, allHobbies.length)

        for (let i = 0; i < numberOfHobbies; i++) {
            let indexOfAddedHobby = dataGeneration.getRandomInteger(1, allHobbies.length)
            hobbies.push(allHobbies[indexOfAddedHobby - 1])
            allHobbies.splice(indexOfAddedHobby - 1, 1)
        }

        return hobbies
    }

    getRandomTime() {
        const times = ['Morning', 'Noon', 'Evening']
        return times[dataGeneration.getRandomInteger(0, 2)]
    }

    clickSubmitButton() {
        super.click(formLocators.SUBMIT_BUTTON)
        return this
    }

    typeUsernameField(username) {
        let finaleUsername = username ? username : dataGeneration.getRandomUsername()
        super.type(formLocators.USERNAME_FIELD, finaleUsername)
        return this
    }

    typePasswordField(password) {
        let finalePassword = password ? password : dataGeneration.getRandomPassword()
        super.type(formLocators.PASSWORD_FIELD, finalePassword)
        return this
    }

    selectGender(gender) {
        let finaleGender = new String(gender ? gender : this.getRandomGender()).toLowerCase()
        
        if (finaleGender === 'male') {
            super.click(formLocators.GENDER_MALE_CHECK)
        } else {
            super.click(formLocators.GENDER_FEMALE_CHECK)
        }
        return this
    }

    selectHobbies(hasHobbies, hobbies) {
        let finaleHasHobbies = hasHobbies ? hasHobbies : dataGeneration.getRandomBool()
        let finaleHobbies = hobbies ? hobbies : this.getRandomHobbies()

        if (finaleHasHobbies) {
            finaleHobbies.forEach((value) => {
                switch (value.toString().toLowerCase()) {
                    case 'reading':
                        super.click(formLocators.READING_CHECKBOX)
                        break
                    case 'sports':
                        super.click(formLocators.SPORTS_CHECHKBOX)
                        break
                    case 'music':
                        super.click(formLocators.MUSIC_CHECKBOX)
                        break
                }
            })
        }

        return this
    }

    selectTimeOption(time) {
        const finaleTime = time ? time : this.getRandomTime()

        switch (finaleTime.toString().toLowerCase()) {
            case 'noon':
                super.selectOptionFromDropDown(formLocators.TIME_DROPDOWN, 'Noon')
                break
            case 'morning':
                super.selectOptionFromDropDown(formLocators.TIME_DROPDOWN, 'Morning')
                break
            case 'evening':
                super.selectOptionFromDropDown(formLocators.TIME_DROPDOWN, 'Evening')
                break

        }

        return this
    }

    verifyPasswordFieldType() {
        super.verifyArrtOfElement(formLocators.PASSWORD_FIELD, 'type', 'password')
        return this
    }

    verifyPopUpExistUsernameField() {
        super.verifyPopUpExist(formLocators.USERNAME_FIELD)
        return this
    }

    verifyPopUpExistPasswordField() {
        super.verifyPopUpExist(formLocators.PASSWORD_FIELD)
        return this
    }

    verifyPopUpExistGenderSelect() {
        super.verifyPopUpExist(formLocators.GENDER_MALE_CHECK)
        return this
    }

    verifyPopUpExistTimeDropDown() {
        super.verifyPopUpExist(formLocators.TIME_DROPDOWN)
        return this
    }

} export default Form;