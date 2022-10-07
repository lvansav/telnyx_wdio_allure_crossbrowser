const { mainPage } = require('../pageobjects/main.page')
const { numLookupProdPage } = require('../pageobjects/num.lookup.prod.page')
const { contactCenterCasePage } = require('../pageobjects/num.lookup.use.case.pages')


describe('Opening use cases test suite for the Number Lookup product page', () => {
    beforeEach(async () => {
        mainPage.headNumLookupLinkClick()
    });

    it('Should to open the Contact Center use case page by clicking the\
 Contact Center use case block in the Number Lookup product page', async () => {
        await numLookupProdPage.openContactCenterCasePage()

        await expect(browser).toHaveUrlContaining(/use-cases\/contact-center$/)
        await expect(contactCenterCasePage.contactCenterPageTitle()).toBeDisplayed()
        await expect(contactCenterCasePage.contactCenterPageTitle()).toHaveText('Contact Center Solutions')
        await expect(contactCenterCasePage.joinIndustryLeadBtn()).toBeClickable()
        await expect(contactCenterCasePage.exploreCallControlLink()).toBeClickable()
        await expect(contactCenterCasePage.getEBookBtn()).toBeClickable()
        await expect(contactCenterCasePage.signUpFor10Btn()).toBeClickable()
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
    });

    it('Should to open the Call Tracking use case page by clicking the\
 Call Tracking use case block in the Number Lookup product page', async () => {
        const callTrackUseCase = await $('main [href*="/call-tracking"]')
        await callTrackUseCase.click()

        const callTrackUrl = /use-cases\/call-tracking$/
        const callTrackPageTitle = await $('h1>span')
        const callTrackPageTitleTxt = 'Call Tracking'
        const gainInsightChannel = await $('header>h2:nth-child(2)')
        const gainInsightChanTxt = 'Gain insights in every channel'
        const seeAllProdLink = await $('main [href="/products"]')
        const tryItFreeBtn = await $('main [href="/sign-up"]')

        await expect(browser).toHaveUrlContaining(callTrackUrl)
        await expect(callTrackPageTitle).toBeDisplayed()
        await expect(callTrackPageTitle).toHaveText(callTrackPageTitleTxt)
        await expect(gainInsightChannel).toBeDisplayed()
        await expect(gainInsightChannel).toHaveText(gainInsightChanTxt)
        await expect(seeAllProdLink).toBeClickable()
        await expect(tryItFreeBtn).toBeClickable()
    });
})