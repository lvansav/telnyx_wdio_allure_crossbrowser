const { faker } = require('@faker-js/faker')

describe('Registration and contact support test suite for the SIP Trunking page', () => {
    beforeEach( async () => {
        const headerHidenLink = await $('header div>span>a')
        await headerHidenLink.moveTo()
        const prodDrop = await $('header ul:nth-child(1) li:nth-child(1)')
        await prodDrop.moveTo()
        const sipTrunking = await $('header [href*="sip-trunks"]')
        await sipTrunking.click()
    })
    
    it('Should sign up from the SIP Trunking product page', async () => {
        const getFreeBtn = await $('div:nth-child(4) [href="/sign-up"]')
        await getFreeBtn.click()
        const randEmail = faker.internet.email()
        
        const emailInp = await $('#email')
        const nameInp = await $('#full_name')
        const passInp = await $('#password')
        const termsBox = await $('[aria-labelledby="terms-label"]')

        await emailInp.addValue(randEmail)
        await nameInp.addValue(faker.name.fullName())
        await passInp.addValue(faker.internet.password(30, false, /[!-}]/, '!1So'))
        await termsBox.click()

        const createAccBtn = await $('[type="submit"]')
        await createAccBtn.click()
        await createAccBtn.click()

        await expect(browser).toHaveUrlContaining('/sign-up/verify-email/f')
        
        const verifyEmail = await $('p>strong')
        await expect(verifyEmail).toHaveText(randEmail)

        const resendLink = await $('main button')
        await expect(resendLink).toBeDisplayed()
    });
})