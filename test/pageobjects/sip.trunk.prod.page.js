const { Page } = require("./page");

const aboutNetworkLink = 'main [href*="global-ip"]'
const seePricingBtn = 'main [href="/pricing/elastic-sip"]'

class SipTrunkingProdPage extends Page {
    async openAboutNetworkPage () {
        await $(aboutNetworkLink).scrollIntoView({ block: "center" })
        await $(aboutNetworkLink).click()
    }

    async openSipTrunkPricePage () {
        await $(seePricingBtn).scrollIntoView({ block: "center" })
        await $(seePricingBtn).click()
    }
}

module.exports = {
    SipTrunkingProdPage: SipTrunkingProdPage,
    sipTrunkingProdPage: new SipTrunkingProdPage
}