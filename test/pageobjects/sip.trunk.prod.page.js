const { Page } = require("./page");

const aboutNetworkLink = 'main [href*="global-ip"]'
const seePricingBtn = 'main [href="/pricing/elastic-sip"]'
const unparalSupLink = '[href*="what-are-the-support-hours"]'
//Use cases locators
const ucaasUseCaseBlock = '[href="/use-cases/ucaas"]'

class SipTrunkingProdPage extends Page {

    async openAboutNetworkPage () {
        await this.openPage(aboutNetworkLink)
    }

    async openSipTrunkPricePage () {
        await this.openPage(seePricingBtn)
    }

    async openUnparalSupportPage () {
        await this.openPage(unparalSupLink)
    }

    async openUcaasUseCase () {
        await this.openPage(ucaasUseCaseBlock)
    }
}

module.exports = {
    SipTrunkingProdPage: SipTrunkingProdPage,
    sipTrunkingProdPage: new SipTrunkingProdPage
}