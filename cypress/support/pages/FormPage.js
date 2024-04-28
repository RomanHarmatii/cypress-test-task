import formLocators from "../locators/FormLocators";
import { BasePage } from "./BasePage";
import { DataGeneration } from "../utilities/DataGeneration";

const dataGeneration = new DataGeneration()

export class FormPage extends BasePage {
    constructor() {
        super()
        this.username = null
        this.password = null
        this.gender = null
        this.hasHobbies = null
        this.hobbies = null
        this.time = null
    }

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
        this.username = username ? username : dataGeneration.getRandomUsername()
        super.type(formLocators.USERNAME_FIELD, this.username)
        return this
    }

    typePasswordField(password) {
        this.password = password ? password : dataGeneration.getRandomPassword()
        super.type(formLocators.PASSWORD_FIELD, this.password)
        return this
    }

    selectGender(gender) {
        this.gender = new String(gender ? gender : this.getRandomGender())

        if (this.gender.toLowerCase() === 'male') {
            super.click(formLocators.GENDER_MALE_CHECK)
        } else {
            super.click(formLocators.GENDER_FEMALE_CHECK)
        }

        return this
    }

    selectHobbies(hasHobbies, hobbies) {
        this.hasHobbies = hasHobbies ? hasHobbies : dataGeneration.getRandomBool()
        this.hobbies = hobbies ? hobbies : this.getRandomHobbies()

        if (this.hasHobbies) {
            this.hobbies.forEach((value) => {
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
        this.time = time ? time : this.getRandomTime()
        let option = ''

        switch (this.time.toString().toLowerCase()) {
            case 'noon':
                option = 'Noon'
                break
            case 'morning':
                option = 'Morning'
                break
            case 'evening':
                option = 'Evening'
                break
        }

        super.selectOptionFromDropDown(formLocators.TIME_DROPDOWN, option)
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

}