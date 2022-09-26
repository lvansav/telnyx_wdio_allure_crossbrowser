const { faker } = require('@faker-js/faker')

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

    it('Should to open the Elastic SIP Trunking price page from the Sip \
 Trunking product page and send the pricelist csv file to the random email', async () => {
        const seePricing = await $('main [href="/pricing/elastic-sip"]')
        await seePricing.click()
        
        const downloadForm = await $('#pricing_download_form')
        await downloadForm.scrollIntoView()

        const firstNameInp = await $('form>div:nth-child(1) input')
        const lastNameInp = await $('form>div:nth-child(2) input')
        const emailInp = await $('form>div:nth-child(3) input')
        const downloadBtn = await $('#pricing_download_form button')

        await firstNameInp.addValue(faker.name.firstName())
        await lastNameInp.addValue(faker.name.lastName())
        await emailInp.addValue(faker.internet.email())
        await downloadBtn.click()

        
        await expect(await $('//div/form/../../div[4]')).toHaveText("Thank you. We'll email you pricing right away!")
    });

    it('Should to Open the "What are the support hours?" article from\
 the SIP Trunking product page', async () => {
        const unparalSupportLink = await $('[href*="what-are-the-support-hours"]')
        await unparalSupportLink.click()

        const articleUrl = /what-are-the-support-hours$/
        const articleTitle = await $('h1.t__h1')
        const articleTitleTxt = 'What are the support hours?'
        const articleAuthor = await $('.avatar span')
        const articleAuthorTxt = /Telnyx Sales/
        const supportEmail = await $('.intercom-content-link')
        const supportEmailTxt = 'support@telnyx.com'
        const reactionPicker = await $('.intercom-reaction-picker')
        const reactionsEmoji = await $$('.intercom-reaction')
        
        await expect(browser).toHaveUrlContaining(articleUrl)
        await expect(articleTitle).toBeDisplayed()
        await expect(articleTitle).toHaveText(articleTitleTxt)
        await expect(articleAuthor).toBeDisplayed()
        await expect(articleAuthor).toHaveText(articleAuthorTxt)
        await expect(supportEmail).toBeDisplayed()
        await expect(supportEmail).toHaveText(supportEmailTxt)
        await expect(reactionPicker).toBeDisplayed()
        reactionsEmoji.forEach(async emoji => {
            await emoji.click()
            await expect(emoji).toHaveAttrContaining('class', 'intercom-reaction-picker-reaction-selected')
        })
    })
})