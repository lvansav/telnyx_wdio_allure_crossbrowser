const { Page } = require("./page");

class GlobalIpPage extends Page {
    pageTitleLoc = 'h1>span'
    tryNetworkBtnLoc = 'main div:nth-child(3) [href="/sign-up"]'
    pricingBtnLoc = 'main [href="/pricing"]'
    startFreeTrialBtnLoc = 'main div:nth-child(2) [href="/sign-up"]'

    async pageTitle () {
        return await $(this.pageTitleLoc)
    }

    async tryNetworkBtn () {
        return await $(this.tryNetworkBtnLoc)
    }

    async pricingBtn () {
        return await $(this.pricingBtnLoc)
    }

    async startFreeTrialBtn () {
        return await $(this.startFreeTrialBtnLoc)
    }
}

module.exports = {
    GlobalIpPage: GlobalIpPage,
    globalIpPage: new GlobalIpPage
}