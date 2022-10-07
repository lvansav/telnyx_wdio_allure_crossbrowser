const { Page } = require('./page')

class ContactCenterCasePage {
    contactCenterPageTitleLoc = 'h1 strong'
    contactCenterrTitleTxtLoc = 'Contact Center Solutions'
    joinIndustryLeadBtnLoc = 'main>div div:nth-child(2) [href="/contact-us"]'
    exploreCallControlLinkLoc = 'p>[href*="/voice-api"]'
    getEBookBtnLoc = '[href*="first-contact-center"]'
    signUpFor10BtnLoc = 'main [href="/sign-up"]'

    async contactCenterPageTitle () {
        return await $(this.contactCenterPageTitleLoc)
    }

    async contactCenterTitleTxt () {
        return await $(this.contactCenterrTitleTxtLoc)
    }

    async joinIndustryLeadBtn () {
        return await $(this.joinIndustryLeadBtnLoc)
    }

    async exploreCallControlLink () {
        return await $(this.exploreCallControlLinkLoc)
    }

    async getEBookBtn () {
        return await $(this.getEBookBtnLoc)
    }

    async signUpFor10Btn () {
        return await $(this.signUpFor10BtnLoc)
    }
}

module.exports = {
    ContactCenterCasePage: ContactCenterCasePage,
    contactCenterCasePage: new ContactCenterCasePage
}