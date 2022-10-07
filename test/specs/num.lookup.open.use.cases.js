const { mainPage } = require('../pageobjects/main.page')
const { numLookupProdPage } = require('../pageobjects/num.lookup.prod.page')
const { contactCenterCasePage,
        twoFactAuthCasePage,
        smsMarketCasePage } = require('../pageobjects/num.lookup.use.case.pages')


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
        await numLookupProdPage.openTwoFactAuthCaseBlock()

        await expect(browser).toHaveUrlContaining(/use-cases\/two-factor-authentication$/)
        await expect(twoFactAuthCasePage.pageTitle()).toBeDisplayed()
        await expect(twoFactAuthCasePage.pageTitle()).toHaveText('Two Factor Authentication')
        await expect(twoFactAuthCasePage.flexPrivatNetSubtitle()).toBeDisplayed()
        await expect(twoFactAuthCasePage.flexPrivatNetSubtitle()).toHaveText('Flexible APIs over a private IP network')
        await expect(twoFactAuthCasePage.tryItFreeBtn()).toBeClickable()
    });

    it('Should to open the SMS Marketing use case page by clicking the\
 SMS Marketing use case block in the Number Lookup product page', async () => {
        await numLookupProdPage.openSmsMarketCasePage()

        await expect(browser).toHaveUrlContaining(/use-cases\/sms-marketing$/)
        await expect(smsMarketCasePage.pageTitle()).toBeDisplayed()
        await expect(smsMarketCasePage.pageTitle()).toHaveText('SMS Marketing Software API')
        await expect(smsMarketCasePage.smsMarketPlatformSubtitle()).toBeDisplayed()
        await expect(smsMarketCasePage.smsMarketPlatformSubtitle()).toHaveText('SMS Marketing Platform that Delivers')
        await expect(smsMarketCasePage.seeAllProdLink()).toBeClickable()
        await expect(smsMarketCasePage.tryItFreeBtn()).toBeClickable()
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