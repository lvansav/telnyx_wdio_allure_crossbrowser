const { Page } = require('./page')

//sign up locators
const aboveSignUpBtn = 'main div:nth-child(4) [href="/sign-up"]'
const belowContactUsBtn = 'div:nth-child(3) [href*="contact-us"]'
const tryForFreeBtn = 'div:nth-child(7) [href="/sign-up"]'
const talkExpertsBelowTryFreeLink = 'div:nth-child(7) [href*="/contact-us"]'
//use cases locators
const contactCenterCaseBlock = 'main [href*="contact-center"]'
const twoFactAuthCaseBlock = "[href*='/two-factor-authentication']"

class NumLookupProdPage extends Page {
    async aboveSignUpBtnClick () {
        await this.openPage(aboveSignUpBtn)
    }

    async belowDocsContactBtnClick () {
        await this.openPage(belowContactUsBtn)
    }

    async tryForFreeBtnClick () {
        await this.openPage(tryForFreeBtn)
    }

    async talkExpertsBelowTryFreeLinkClick () {
        await this.openPage(talkExpertsBelowTryFreeLink)
    }

    async openContactCenterCasePage () {
        await this.openPage(contactCenterCaseBlock)
    }

    async openTwoFactAuthCaseBlock () {
        await this.openPage(twoFactAuthCaseBlock)
    }
}

module.exports = {
    NumLookupProdPage: NumLookupProdPage,
    numLookupProdPage: new NumLookupProdPage
}