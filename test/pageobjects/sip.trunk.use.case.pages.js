const { Page } = require("./page");

class UcaasCasePage extends Page {
    pageTitleLoc = 'h1 strong'
    purchaseNumLinkLoc = '[href*="api/v2/numbers"]'
    exploreVideoLinkLoc = '[href*="api/v2/video"]'
    exploreReportsLinkLoc = '[href*="api/v1/reports"]'
    startFreeBtnLoc = 'main div:nth-child(2)>div>[href="/sign-up"]'

    async pageTitle () {
        return await $(this.pageTitleLoc)
    }

    async purchaseNumLink () {
        return await $(this.purchaseNumLinkLoc)
    }

    async exploreVideoLink () {
        return await $(this.exploreVideoLinkLoc)
    }

    async exploreReportsLink () {
        return await $(this.exploreReportsLinkLoc)
    }

    async startFreeBtn () {
        return await $(this.startFreeBtnLoc)
    }
}

class ManagedServCasePage extends Page {
    pageTitleLoc = 'h1>span'
    monUsagePageSubtitleLoc = 'div:nth-child(6) h2'
    signUpTodayBtnLoc = 'div:nth-child(3) [href="/sign-up"]'
    seeApiPricingLinkLoc = 'main [href="/pricing/call-control"]'

    async pageTitle () {
        return await $(this.pageTitleLoc)
    }

    async monUsePageSubtitle () {
        return await $(this.monUsagePageSubtitleLoc)
    }

    async signUpTodayBtn () {
        return await $(this.signUpTodayBtnLoc)
    }

    async seeApiPricingLink () {
        return await $(this.seeApiPricingLinkLoc)
    }
}

module.exports = {
    UcaasCasePage: UcaasCasePage,
    ucaasCasePage: new UcaasCasePage,
    ManagedServCasePage: ManagedServCasePage,
    managedServCasePage: new ManagedServCasePage
}