const { Page } = require("./page");

//additional pages locators
const aboutNetworkLink = 'main [href*="global-ip"]'
const seePricingBtn = 'main [href="/pricing/elastic-sip"]'
const unparalSupLink = '[href*="what-are-the-support-hours"]'
//Use cases locators
const ucaasUseCaseBlock = '[href="/use-cases/ucaas"]'
const managedServCaseBlock = 'main [href*="managed-services-telephony-reseller"]'
const smallBusCaseBlock = 'main [href*="voip-for-small-business"]'
const multiCloudCaseBlock = '[href*="multi-cloud"]'
//registration locators
const getFreeBtn = 'div:nth-child(4) [href="/sign-up"]'
const talkExpertsLink = 'div:nth-child(4) [href*="contact-us"]'

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

    async openManagedServUseCase () {
        await this.openPage(managedServCaseBlock)
    }

    async openSmallBusUseCase () {
        await this.openPage(smallBusCaseBlock)
    }

    async openMultCloudUseCase () {
        await this.openPage(multiCloudCaseBlock)
    }

    async getFreeBtnClick () {
        await this.openPage(getFreeBtn)
    }

    async talkExpertsLinkClick () {
        await this.openPage(talkExpertsLink)
    }
}

module.exports = {
    SipTrunkingProdPage: SipTrunkingProdPage,
    sipTrunkingProdPage: new SipTrunkingProdPage
}