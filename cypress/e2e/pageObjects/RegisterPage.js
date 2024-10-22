class RegisterPage {
    verifyRegisterPageLoaded(){
        return cy.get('#__next > main > div > div.superapp-container.AppHeader_container__caL7F > div.AppHeader_card__FWIi5.background-primary > h1').should('have.text', 'Daftar')
    }

    fillMobilePhoneNumber(mobileNumber) {
        const mobileNumberTextField = cy.get('#mobilePhone')
        mobileNumberTextField.clear()
        mobileNumberTextField.type(mobileNumber)
        return this
    }

    fillEmail(emailAddress) {
        const emailTextField = cy.get('#email')
        emailTextField.clear()
        emailTextField.type(emailAddress)
        return this
    }

    fillFirstName(firstName) {
        const firstNameTextField = cy.get('#firstName')
        firstNameTextField.clear()
        firstNameTextField.type(firstName)
        return this
    }

    fillLastName(lastName) {
        const lastNameTextField = cy.get('#lastName')
        lastNameTextField.clear()
        lastNameTextField.type(lastName)
        return this
    }

    clickRegisterButton(){
        return cy.get('#__next > main > div > div.superapp-container.content > div > button > p').click()
    }
}
export default RegisterPage