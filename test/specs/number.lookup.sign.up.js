const { faker } = require('@faker-js/faker')

describe('Registration and contact support test suite for the Number Lookup\
  product page', () => {
    beforeEach(async () => {
        const headerHidenLink = await $('header div>span>a')
        await headerHidenLink.moveTo()
        const prodDrop = await $('header ul:nth-child(1) li:nth-child(1)')
        await prodDrop.moveTo()
        const sipTrunking = await $('header [href="/number-lookup"]')
        await sipTrunking.click()
    });

    it('Should to sign up from the Number Lookup product page by the "Sign up"\
      button', async () => {
        const aboveSignUpBtn = await $('main div:nth-child(4) [href="/sign-up"]')
        await aboveSignUpBtn.click()
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

    it.only('Should to open the Number lookup Owerview doc page from the Number\
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
})