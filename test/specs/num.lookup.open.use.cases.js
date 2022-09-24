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

    it('Should to open the Two-Factor Authentication use case page by clicking the\
      Two-Factor Authentication use case block in the Number Lookup product page', async () => {
        const twoFactAuthUseCase = await $("[href*='/two-factor-authentication']")
        await twoFactAuthUseCase.click()

        const twoFactAuthUrl = /use-cases\/two-factor-authentication$/
        const twoFactPageTitle = await $('h1 span')
        const twoFactTitleTxt = 'Two Factor Authentication'
        const flexPrivatNetSubtitle = await $('header h2:nth-child(2)')
        const flexPrivateSubtitleTxt = 'Flexible APIs over a private IP network'
        const tryItFreeBtn = await $('div:nth-child(7) [href="/sign-up"]')

        await expect(browser).toHaveUrlContaining(twoFactAuthUrl)
        await expect(twoFactPageTitle).toBeDisplayed()
        await expect(twoFactPageTitle).toHaveText(twoFactTitleTxt)
        await expect(flexPrivatNetSubtitle).toBeDisplayed()
        await expect(flexPrivatNetSubtitle).toHaveText(flexPrivateSubtitleTxt)
        await expect(tryItFreeBtn).toBeClickable()
    });

    it('Should to open the SMS Marketing use case page by clicking the\
    SMS Marketing use case block in the Number Lookup product page', async () => {
        const smsMarketingUseCase = await $('[href*="/sms-marketing"]')
        await smsMarketingUseCase.click()

        const smsMarketCaseUrl = /use-cases\/sms-marketing$/
        const smsMarketPageTitle = await $('h1>span')
        const smsMarketTitleTxt = 'SMS Marketing Software API'
        const smsMarketPlatformSubtitle = await $('header>h2:nth-child(2)')
        const smsMarketPlatformSubtitleTxt = 'SMS Marketing Platform that Delivers'
        const seeAllProdLink = await $('main [href="/products"]')
        const tryItFreeBtn = await $('div:nth-child(7) [href="/sign-up"]')

        await expect(browser).toHaveUrlContaining(smsMarketCaseUrl)
        await expect(smsMarketPageTitle).toBeDisplayed()
        await expect(smsMarketPageTitle).toHaveText(smsMarketTitleTxt)
        await expect(smsMarketPlatformSubtitle).toBeDisplayed()
        await expect(smsMarketPlatformSubtitle).toHaveText(smsMarketPlatformSubtitleTxt)
        await expect(seeAllProdLink).toBeClickable()
        await expect(tryItFreeBtn).toBeClickable()
    })
})