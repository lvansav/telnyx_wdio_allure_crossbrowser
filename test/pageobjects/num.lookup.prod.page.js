const { Page } = require('./page')

const aboveSignUpBtn = 'main div:nth-child(4) [href="/sign-up"]'
const belowContactUsBtn = 'div:nth-child(3) [href*="contact-us"]'

class NumLookupProdPage extends Page {
    async aboveSignUpBtnClick () {
        await this.openPage(aboveSignUpBtn)
    }

    async belowDocsContactBtnClick () {
        await this.openPage(belowContactUsBtn)
    }
}

module.exports = {
    NumLookupProdPage: NumLookupProdPage,
    numLookupProdPage: new NumLookupProdPage
}