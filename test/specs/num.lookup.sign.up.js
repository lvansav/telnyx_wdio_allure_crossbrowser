const helper = require('../../helper/helper')
const { faker } = require('@faker-js/faker')
const contact_us_data = helper.parseJsonFile('./environments/contact_us_data.json')
const registration_data = helper.parseJsonFile('./environments/registration_data.json')

describe('Registration and contact support test suite for the Number Lookup product page', () => {
    beforeEach(async () => {
        const headerHidenLink = await $('header div>span>a')
        await headerHidenLink.moveTo()
        const prodDrop = await $('header ul:nth-child(1) li:nth-child(1)')
        await prodDrop.moveTo()
        const sipTrunking = await $('header [href="/number-lookup"]')
        await sipTrunking.click()
    });

    it('Should to sign up from the Number Lookup product page by the "Sign up" \
button', async () => {
        const aboveSignUpBtn = await $('main div:nth-child(4) [href="/sign-up"]')
        await aboveSignUpBtn.click()

        let randEmail = faker.internet.email()
        
        if(!registration_data.email) {
            randEmail = faker.internet.exampleEmail()
        }

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
        await createAccBtn.click()

        const verifyEmail = await $('//h1/following-sibling::div//strong')
        const resendLink = await $('main button')
        
        await expect(verifyEmail).toHaveText(randEmail)
        await expect(resendLink).toBeDisplayed()
    });

    it('Should to get talking to an experts from the Number Lookup product\
 page by the "Talk to our experts" link below the "Explore the Docs" button', async () => {
        const belowDocsContactBtn = await $('div:nth-child(3) [href*="contact-us"]')
        await belowDocsContactBtn.click()

        const reasonOpts = ['Sales-Inquiry', 'Support', 'Legal']
        let randReason = reasonOpts[Math.floor(Math.random() * 3)]

        if(contact_us_data.reason !== "Support") {
            randReason = contact_us_data.reason
        }

        const randFirstName = faker.name.firstName()
        const randLastName = faker.name.lastName()
        const randEmail = faker.internet.email()


        const randNumCodeIdx = Math.floor(Math.random() * 221) + 1
        const randNumCode = await $(`#Phone_Number_Extension__c option:nth-child(${randNumCodeIdx})`).getValue()
        
        const randNum = faker.phone.number('###########')
        const randWebSite = faker.internet.url()
        const randText = faker.lorem.paragraph()

        const reasonSelector = await $('#Reason_for_Contact__c')
        const firstNameInp = await $('#FirstName')
        const lastNameInp = await $('#LastName')
        const emailInp = await $('#Email')
        const numCodeSelector = await $('#Phone_Number_Extension__c')
        const numInp = await $('#Phone_Number_Base__c')
        const webSiteInp = await $('#Website')
        const addInfoInp = await $('#Form_Additional_Information__c')
        const receiveBox = await $('[name="Subscription_Opt_In__c"]')
        const submitBtn = await $('button.mktoButton')

        await reasonSelector.selectByAttribute('value', randReason)
        await firstNameInp.addValue(randFirstName)
        await lastNameInp.addValue(randLastName)
        await emailInp.addValue(randEmail)
        await numCodeSelector.selectByAttribute('value', randNumCode)
        await numInp.addValue(randNum)
        await webSiteInp.addValue(randWebSite)
        await addInfoInp.addValue(randText)
        await receiveBox.click()

        await expect(reasonSelector).toHaveValue(randReason)
        await expect(firstNameInp).toHaveValue(randFirstName)
        await expect(lastNameInp).toHaveValue(randLastName)
        await expect(emailInp).toHaveValue(randEmail)
        await expect(numCodeSelector).toHaveValue(randNumCode)
        await expect(numInp).toHaveValue(randNum)
        await expect(webSiteInp).toHaveValue(randWebSite)
        await expect(addInfoInp).toHaveValue(randText)
        await expect(submitBtn).toBeClickable()
    });

    it('Should to sign up from the Number Lookup page by the "Try for\
 Free" button', async () => {
        const tryForFreeBtn = await $('div:nth-child(7) [href="/sign-up"]')
        await tryForFreeBtn.click()

        let randEmail = faker.internet.email()
        
        if(!registration_data.email) {
            randEmail = faker.internet.exampleEmail()
        }

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
        await createAccBtn.click()

        const verifyEmail = await $('//h1/following-sibling::div//strong')
        const resendLink = await $('main button')
        
        await expect(verifyEmail).toHaveText(randEmail)
        await expect(resendLink).toBeDisplayed()
    });

    it('Should to get talking to an experts from the Number Lookup\
 product page by the "Talk to our experts" link below the "Explore the\
      Docs" button', async () => {
        const talkExpertsBeloweTryFreeLink = await $('div:nth-child(7) [href*="/contact-us"]')
        await talkExpertsBeloweTryFreeLink.click()

        const reasonOpts = ['Sales-Inquiry', 'Support', 'Legal']
        let randReason = reasonOpts[Math.floor(Math.random() * 3)]

        if(contact_us_data.reason !== "Support") {
            randReason = contact_us_data.reason
        }

        const randFirstName = faker.name.firstName()
        const randLastName = faker.name.lastName()
        const randEmail = faker.internet.email()


        const randNumCodeIdx = Math.floor(Math.random() * 221) + 1
        const randNumCode = await $(`#Phone_Number_Extension__c option:nth-child(${randNumCodeIdx})`).getValue()
        
        const randNum = faker.phone.number('###########')
        const randWebSite = faker.internet.url()
        const randText = faker.lorem.paragraph()

        const reasonSelector = await $('#Reason_for_Contact__c')
        const firstNameInp = await $('#FirstName')
        const lastNameInp = await $('#LastName')
        const emailInp = await $('#Email')
        const numCodeSelector = await $('#Phone_Number_Extension__c')
        const numInp = await $('#Phone_Number_Base__c')
        const webSiteInp = await $('#Website')
        const addInfoInp = await $('#Form_Additional_Information__c')
        const receiveBox = await $('[name="Subscription_Opt_In__c"]')
        const submitBtn = await $('button.mktoButton')

        await reasonSelector.selectByAttribute('value', randReason)
        await firstNameInp.addValue(randFirstName)
        await lastNameInp.addValue(randLastName)
        await emailInp.addValue(randEmail)
        await numCodeSelector.selectByAttribute('value', randNumCode)
        await numInp.addValue(randNum)
        await webSiteInp.addValue(randWebSite)
        await addInfoInp.addValue(randText)
        await receiveBox.click()

        await expect(reasonSelector).toHaveValue(randReason)
        await expect(firstNameInp).toHaveValue(randFirstName)
        await expect(lastNameInp).toHaveValue(randLastName)
        await expect(emailInp).toHaveValue(randEmail)
        await expect(numCodeSelector).toHaveValue(randNumCode)
        await expect(numInp).toHaveValue(randNum)
        await expect(webSiteInp).toHaveValue(randWebSite)
        await expect(addInfoInp).toHaveValue(randText)
        await expect(submitBtn).toBeClickable()
    });
})