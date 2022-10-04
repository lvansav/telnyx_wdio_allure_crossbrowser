const { Page } = require("./page");

const aboutNetworkLink = 'main [href*="global-ip"]'
const seePricingBtn = 'main [href="/pricing/elastic-sip"]'
const unparalSupLink = '[href*="what-are-the-support-hours"]'

class SipTrunkingProdPage extends Page {
    async openAboutNetworkPage () {
        await $(aboutNetworkLink).scrollIntoView({ block: "center" })
        await $(aboutNetworkLink).click()
    }

    async openSipTrunkPricePage () {
        await $(seePricingBtn).scrollIntoView({ block: "center" })
        await $(seePricingBtn).click()
    }

    async openUnparalSupportPage () {
        await $(unparalSupLink).scrollIntoView({ block: "center" })
        await $(unparalSupLink).click()
    }
}

module.exports = {
    SipTrunkingProdPage: SipTrunkingProdPage,
    sipTrunkingProdPage: new SipTrunkingProdPage
}