class MobileNumberVerificationPage {
    verifyMobileNumberVerificationPageLoaded(){
        return cy.get('#__next > main > div > div.superapp-container.AppHeader_container__caL7F > div.AppHeader_card__FWIi5.background-primary > h1').should('have.text', "Verifikasi No. Handphone")
    }

    clickTempelKodeOTPButton(){
        return cy.get('#__next > main > div > div.superapp-container.content > div > button').click()
    }
}
export default MobileNumberVerificationPage