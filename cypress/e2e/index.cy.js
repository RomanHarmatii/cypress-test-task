import { BasePage } from "../support/pages/BasePage";
import { FormPage } from "../support/pages/FormPage";
import { ResultPage } from "../support/pages/ResultPage";


const basePage = new BasePage()
const formPage = new FormPage()
const resultPage = new ResultPage()

describe('Tests for form page', () => {

  beforeEach(() => {
    basePage.visitPage('/')
      .verifyPageTitle('Your average form')
  })

  it('Verify that for is not submited and pop up should show after trying to submit page without required fields', () => {
    formPage.clickSubmitButton()
      .verifyPopUpExistUsernameField()

      .typeUsernameField()
      .clickSubmitButton()
      .verifyPopUpExistPasswordField()

      .verifyPasswordFieldType()
      .typePasswordField()
      .clickSubmitButton()
      .verifyPopUpExistGenderSelect()

      .selectGender()
      .clickSubmitButton()
      .verifyPopUpExistTimeDropDown()
  })

  it('Submit form with valid data', () => {
    formPage.typeUsernameField()
      .typePasswordField()
      .selectGender()
      .selectHobbies()
      .selectTimeOption()
      .clickSubmitButton()
      .verifyLoadingWasFinnished()
      .verifyPageTitle('Results')

    resultPage.verifyGreetingTitle(formPage.username)
      .verifyGender(formPage.gender)
      .verifyHobbies(formPage.hasHobbies, formPage.hobbies)
      .verifyTime(formPage.time)
  })

})