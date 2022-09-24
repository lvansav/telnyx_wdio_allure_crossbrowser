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
});