const { Page } = require('./page')

//sign up locators
const aboveSignUpBtn = 'main div:nth-child(4) [href="/sign-up"]'
const belowContactUsBtn = 'div:nth-child(3) [href*="contact-us"]'
const tryForFreeBtn = 'div:nth-child(7) [href="/sign-up"]'
const talkExpertsBelowTryFreeLink = 'div:nth-child(7) [href*="/contact-us"]'

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
}

module.exports = {
    NumLookupProdPage: NumLookupProdPage,
    numLookupProdPage: new NumLookupProdPage
}