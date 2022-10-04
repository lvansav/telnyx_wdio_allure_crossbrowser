const { Page } = require("./page");

const aboutNetworkLink = 'main [href*="global-ip"]'

class SipTrunkingProdPage extends Page {
    async openAboutNetworkPage () {
        await $(aboutNetworkLink).scrollIntoView({ block: "center"})
        await $(aboutNetworkLink).click()
    }
}

module.exports = {
    SipTrunkingProdPage: SipTrunkingProdPage,
    sipTrunkingProdPage: new SipTrunkingProdPage
}