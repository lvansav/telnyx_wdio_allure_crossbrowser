describe('Going to another page test suite for the SIP Trunking page', () => {
    beforeEach( async () => {
        const headerHidenLink = await $('header div>span>a')
        await headerHidenLink.moveTo()
        const prodDrop = await $('header ul:nth-child(1) li:nth-child(1)')
        await prodDrop.moveTo()
        const sipTrunking = await $('header [href*="sip-trunks"]')
        await sipTrunking.click()
    });

    it('Should to open the Global IP network solutions page by clicking the \
      "Learn about our Network" on the SIP Trunking page', async () => {
        const aboutNetwork = await $('main [href*="global-ip"]')
        await aboutNetwork.click()

        const globIpUrl = /solutions\/global-ip-network$/
        const pageTitle = await $('h1>span')
        const pageTitleText = 'The Global, Private Network Built for Real-Time Comms.'
        const tryNetworkBtn = await $('main div:nth-child(3) [href="/sign-up"]')
        const pricingBtn = await $('main [href="/pricing"]')
        const startFreeTrialBtn = await $('main div:nth-child(2) [href="/sign-up"]')

        await expect(browser).toHaveUrlContaining(globIpUrl)
        await expect(pageTitle).toBeDisplayed()
        await expect(pageTitle).toHaveText(pageTitleText)
        await expect(tryNetworkBtn).toBeClickable()
        await expect(pricingBtn).toBeClickable()
        await expect(startFreeTrialBtn).toBeClickable()
    });
})