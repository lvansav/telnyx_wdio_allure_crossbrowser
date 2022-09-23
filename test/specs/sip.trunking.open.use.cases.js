describe('Opening use cases test suite for the SIP Trunking page', () => {
    beforeEach( async () => {
        const headerHidenLink = await $('header div>span>a')
        await headerHidenLink.moveTo()
        const prodDrop = await $('header ul:nth-child(1) li:nth-child(1)')
        await prodDrop.moveTo()
        const sipTrunking = await $('header [href*="sip-trunks"]')
        await sipTrunking.click()
    });

    it('Should to open the UCaaS use case page by clicking the UCaaS use \
      case block in the SIP Trunking page', async () => {
        const ucaasUseCase = await $('[href="/use-cases/ucaas"]')
        await ucaasUseCase.click()
        
        const ucaasCaseUrl = /use-cases\/ucaas$/
        const ucaasCasePageTitle = await $('h1 strong')
        const ucaasPageTitleText = 'UCaaS'
        const purchaseNumLink = await $('[href*="api/v2/numbers"]')
        const exploreVideoLink = await $('[href*="api/v2/video"]')
        const exploreReportsLink = await $('[href*="api/v1/reports"]')
        const startFreeBtn = await $('main div:nth-child(2)>div>[href="/sign-up"]')

        await expect(browser).toHaveUrlContaining(ucaasCaseUrl)
        await expect(ucaasCasePageTitle).toBeDisplayed()
        await expect(ucaasCasePageTitle).toHaveText(ucaasPageTitleText)
        await expect(purchaseNumLink).toBeClickable()
        await expect(exploreVideoLink).toBeClickable()
        await expect(exploreReportsLink).toBeClickable()
        await expect(startFreeBtn).toBeClickable()
    });

    it('Should to  the Managed Services use case page by clicking the Managed \
      Services use case block in the SIP Trunking page', async () => {
        const managServUseCase = await $('main [href*="managed-services-telephony-reseller"]')
        await managServUseCase.click()

        const manServUrl = /use-cases\/managed-services-telephony-reseller$/
        const manServPageTitle = await $('h1>span')
        const manServTitleText = 'Managed Service Providers'
        const monUsagePageSubtitle = await $('div:nth-child(6) h2')
        const signUpTodayBtn = await $('div:nth-child(3) [href="/sign-up"]')
        const seeApiPricingLink = await $('main [href="/pricing/call-control"]')

        await expect(browser).toHaveUrlContaining(manServUrl)
        await expect(manServPageTitle).toBeDisplayed()
        await expect(manServPageTitle).toHaveText(manServTitleText)
        await expect(monUsagePageSubtitle).toBeDisplayed()
        await expect(signUpTodayBtn).toBeClickable()
        await expect(seeApiPricingLink).toBeClickable()
    })
})