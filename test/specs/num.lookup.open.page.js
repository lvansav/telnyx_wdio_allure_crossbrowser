describe('Going to another page test suite for the Number Lookup product page', () => {
    beforeEach(async () => {
        const headerHidenLink = await $('header div>span>a')
        await headerHidenLink.moveTo()
        const prodDrop = await $('header ul:nth-child(1) li:nth-child(1)')
        await prodDrop.moveTo()
        const sipTrunking = await $('header [href="/number-lookup"]')
        await sipTrunking.click()
    });

    it('Should to open the Number lookup Owerview doc page from the Number\
 Lookup product page', async () => {
        const exploreDocsBtn = await $('div>[href*="api/v2/number-lookup"]')
        exploreDocsBtn.click()

        const numberDocsUrl = /number-lookup$/
        const numberDocsPageTitle = await $('#telnyx-api-reference div>span')
        const numberDocsPageTitleTxt = 'Number lookup Overview'
        const runPostmanBtn = await $('//img[@alt="Run in Postman"]/..')
        const httpEndpointsTitle = await $('h4#http-endpoints')

        await expect(browser).toHaveUrlContaining(numberDocsUrl)
        await expect(numberDocsPageTitle).toBeDisplayed()
        await expect(numberDocsPageTitle).toHaveTextContaining(numberDocsPageTitleTxt)
        await expect(runPostmanBtn).toBeClickable()
        await expect(httpEndpointsTitle).toBeDisplayed()
    });

    it('Should to Open the Massaging doc page by clicking "Explore use-case\
 guides" button on the Number Lookup page', async () => {
        const exploreGuidesBtn = await $('[href*="/docs/v2/messaging"]')
        await exploreGuidesBtn.click()

        const msgApiDocsUrl = /docs\/v2\/messaging$/
        const msgApiPageTitle = await $('h1#messaging')
        const msgApiPageTitleTxt = 'Messaging'
        const seeTheSpecsBtn = await $('main [href="/docs/api/v2/messaging"]')
        const sendYouSms = await $('main [href*="/quickstarts/portal-setup"]')

        await expect(browser).toHaveUrlContaining(msgApiDocsUrl)
        await expect(msgApiPageTitle).toBeDisplayed()
        await expect(msgApiPageTitle).toHaveText(msgApiPageTitleTxt)
        await expect(seeTheSpecsBtn).toBeClickable()
        await expect(sendYouSms).toBeClickable()
    });
});