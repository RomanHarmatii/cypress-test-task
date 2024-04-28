import { BasePage } from "../support/pages/BasePage";
import { Form } from "../support/pages/Form";


const basePage = new BasePage()
const formPage = new Form()

describe('Tests for form page', () => {

  beforeEach(() => {
    basePage.visitPage('/')
      .verifyPageTitle('Your average form')
  })

  it('Pop up should show after trying to submit page without required fields', () => {
    formPage.clickSubmitButton()
      .verifyPopUpExistUsernameField()
      .typeUsernameField()
      .clickSubmitButton()
      .verifyPopUpExistPasswordField()
      .typePasswordField()
      .verifyPopUpExistGenderSelect()
      .selectGender()
      .verifyPopUpExistTimeDropDown()
  })

  it('Password field should have type password', ()=>{
    form.verifyPasswordFieldType()
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
    })

})