describe('Opening use cases test suite for the Number Lookup product page', () => {
    beforeEach(async () => {
        const headerHidenLink = await $('header div>span>a')
        await headerHidenLink.moveTo()
        const prodDrop = await $('header ul:nth-child(1) li:nth-child(1)')
        await prodDrop.moveTo()
        const sipTrunking = await $('header [href="/number-lookup"]')
        await sipTrunking.click()
    });

    it('Should to open the Contact Center use case page by clicking the\
      Contact Center use case block in the Number Lookup product page', async () => {
        const contactCenterUseCase = await $('main [href*="contact-center"]')
        await contactCenterUseCase.click()

        const contactCenterCaseUrl = /use-cases\/contact-center$/
        const contactCenterPageTitle = await $('h1 strong')
        const contactCenterrTitleTxt = 'Contact Center Solutions'
        const joinIndustryLeadBtn = await $('main>div div:nth-child(2) [href="/contact-us"]')
        const exploreCallControlLink = await $('p>[href*="/voice-api"]')
        const getEBookBtn = await $('[href*="first-contact-center"]')
        const signUpFor10Btn = await $('main [href="/sign-up"]')

        await expect(browser).toHaveUrlContaining(contactCenterCaseUrl)
        await expect(contactCenterPageTitle).toBeDisplayed()
        await expect(contactCenterPageTitle).toHaveText(contactCenterrTitleTxt)
        await expect(joinIndustryLeadBtn).toBeClickable()
        await expect(exploreCallControlLink).toBeClickable()
        await expect(getEBookBtn).toBeClickable()
        await expect(signUpFor10Btn).toBeClickable()
    });
})