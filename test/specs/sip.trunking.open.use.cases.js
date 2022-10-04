const { mainPage } = require("../pageobjects/main.page");
const { sipTrunkingProdPage } = require("../pageobjects/sip.trunk.prod.page");
const { ucaasCasePage, 
        managedServCasePage } = require('../pageobjects/sip.trunk.use.case.pages')

describe('Opening use cases test suite for the SIP Trunking page', () => {
    beforeEach( async () => {
        mainPage.headSipTrunkLinkClick()
    });

    it('Should to open the UCaaS use case page by clicking the UCaaS use \
 case block in the SIP Trunking page', async () => {
        await sipTrunkingProdPage.openUcaasUseCase()

        await expect(browser).toHaveUrlContaining(/use-cases\/ucaas$/)
        await expect(ucaasCasePage.pageTitle()).toBeDisplayed()
        await expect(ucaasCasePage.pageTitle()).toHaveText('UCaaS')
        await expect(ucaasCasePage.purchaseNumLink()).toBeClickable()
        await expect(ucaasCasePage.exploreVideoLink()).toBeClickable()
        await expect(ucaasCasePage.exploreReportsLink()).toBeClickable()
        await expect(ucaasCasePage.startFreeBtn()).toBeClickable()
    });

    it('Should to  the Managed Services use case page by clicking the Managed \
 Services use case block in the SIP Trunking page', async () => {
        await sipTrunkingProdPage.openManagedServUseCase()

        await expect(browser).toHaveUrlContaining(/use-cases\/managed-services-telephony-reseller$/)
        await expect(managedServCasePage.pageTitle()).toBeDisplayed()
        await expect(managedServCasePage.pageTitle()).toHaveText('Managed Service Providers')
        await expect(managedServCasePage.monUsePageSubtitle()).toBeDisplayed()
        await expect(managedServCasePage.signUpTodayBtn()).toBeClickable()
        await expect(managedServCasePage.seeApiPricingLink()).toBeClickable()
    });

    it.open('Should to the Small Business use case page by clicking the Small Business\
 use case block in the Trunking page', async () => {
        const smallBusUseCase = await $('main [href*="voip-for-small-business"]')
        await smallBusUseCase.click()

        const smallBusUrl = /use-cases\/voip-for-small-business$/
        const smallBusPageTitle = await $('h1>span')
        const smallBusTitleText = 'The Best VoIP Solution for Small Business'
        const voipVsLandlinePageSubtitle = await $('div:nth-child(3) header h2')
        const letsTalkBtn = await $('main [href="/contact-us"]')
        const startBuldingBtn = await $('div:nth-child(9) [href="/sign-up"]')
        const signUpFor10Btn = await $('div:nth-child(10) [href="/sign-up"]')

        await expect(browser).toHaveUrlContaining(smallBusUrl)
        await expect(smallBusPageTitle).toBeDisplayed()
        await expect(smallBusPageTitle).toHaveText(smallBusTitleText)
        await expect(voipVsLandlinePageSubtitle).toBeDisplayed()
        await expect(letsTalkBtn).toBeClickable()
        await expect(startBuldingBtn).toBeClickable()
        await expect(signUpFor10Btn).toBeClickable()
    });

    it('Should to the Multi-Cloud use case page by clicking the Multi-Cloud\
 use case block in the SIP Trunking page', async () => {
        const multiCloudUseCase = await $('[href*="multi-cloud"]')
        await multiCloudUseCase.click()

        const multiCloudUrl = /use-cases\/multi-cloud$/
        const multiCloudPageTitle = await $('h1>span')
        const multiCloudTitleText = 'Multicloud'
        const exploreDocsLink = await $('[href*="api/v1/networking"]')
        const downloadSheetLink = await $('main [href*="image"]')
        const tryFreeBtn = await $('div:nth-child(14) [href="/sign-up"]')

        await expect(browser).toHaveUrlContaining(multiCloudUrl)
        await expect(multiCloudPageTitle).toBeDisplayed()
        await expect(multiCloudPageTitle).toHaveText(multiCloudTitleText)
        
        for (let i = 0; i < 0; i++) {
            let buildProd = await $(`main li:nth-child(${i}) [href*="products"]`)
            await expect(buildProd).toBeClickable()
        }

        await expect(exploreDocsLink).toBeClickable()
        await expect(downloadSheetLink).toBeClickable()
        await expect(tryFreeBtn).toBeClickable()
      });
})