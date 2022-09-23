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

    it('Should get talking to an experts from the SIP Trunking product page', async () => {
        const talkExpectsLink = await $('div:nth-child(4) [href*="contact-us"]')
        await talkExpectsLink.click()

        const reasonOpts = ['Sales-Inquiry', 'Support', 'Legal']
        const randReason = reasonOpts[Math.floor(Math.random() * 3)]

        const randFirstName = faker.name.firstName()
        const randLastName = faker.name.lastName()
        const randEmail = faker.internet.email()


        const randNumCodeIdx = Math.floor(Math.random() * 221) + 1
        const randNumCode = await $(`#Phone_Number_Extension__c option:nth-child(${randNumCodeIdx})`).getValue()
        
        const randNum = faker.phone.number()
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
        const receiveBox = await $('#mktoCheckbox_10173_0')
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

    it('Should get talking to an experts from the SIP Trunking page about the Scheduling a Demo of the Mission Control Portal', async () => {
        const scheduleLink = await $('header span>[href*="contact-us"]')
        await scheduleLink.click()

        const reason = 'Support'
        const randFirstName = faker.name.firstName()
        const randLastName = faker.name.lastName()
        const randEmail = faker.internet.email()

        const randNumCodeIdx = Math.floor(Math.random() * 221) + 1
        const randNumCode = await $(`#Phone_Number_Extension__c option:nth-child(${randNumCodeIdx})`).getValue()
        
        const randNum = faker.phone.number()
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
        const receiveBox = await $('#mktoCheckbox_10173_0')
        const submitBtn = await $('button.mktoButton')

        await reasonSelector.selectByAttribute('value', reason)
        await firstNameInp.addValue(randFirstName)
        await lastNameInp.addValue(randLastName)
        await emailInp.addValue(randEmail)
        await numCodeSelector.selectByAttribute('value', randNumCode)
        await numInp.addValue(randNum)
        await webSiteInp.addValue(randWebSite)
        await addInfoInp.addValue(randText)
        await receiveBox.click()

        await expect(reasonSelector).toHaveValue(reason)
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