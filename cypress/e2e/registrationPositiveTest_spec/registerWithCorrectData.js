/// <reference types="Cypress" />
import RegisterPage from "../pageObjects/RegisterPage"
import MobileNumberVerificationPage from "../pageObjects/MobileNumberVerificationPage"
import { faker } from '@faker-js/faker'

describe('Register with correct data', function(){
    before(function(){
        cy.fixture('registerData').then(function(data)
        {
            this.data = data
        })
      })
    it('Should be able to register with correct data', function(){
        const registerPage = new RegisterPage
        const mobileNumberVerificationPage = new MobileNumberVerificationPage
        let firstName = faker.person.firstName()
        let lastName = faker.person.lastName()
        let email = faker.internet.email()

        cy.viewport(1280, 720)
        cy.visit('https://www.cermati.com/app/gabung')
        registerPage.verifyRegisterPageLoaded()
        registerPage.fillMobilePhoneNumber(this.data.correctPhoneNumber)
        registerPage.fillEmail(email)
        registerPage.fillFirstName(firstName)
        registerPage.fillLastName(lastName)
        registerPage.clickRegisterButton()
        cy.wait(1000)
        mobileNumberVerificationPage.verifyMobileNumberVerificationPageLoaded()
    })
})