import { Form } from "../support/pages/Form";

const form = new Form();

describe('Tests for form page', () => {

  before(() => {
    cy.visit('/')
      .title().should('eq', 'Your average form');
  })

  it('Pop up should show after trying to submit empty page', () => {
    form.clickSubmitButton()
      .verifyPopUpTextExistUsernameField()
  });

})