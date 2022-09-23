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
})