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

module.exports = {
    UcaasCasePage: UcaasCasePage,
    ucaasCasePage: new UcaasCasePage
}