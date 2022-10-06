const helper = require('../../helper/helper')
const { faker } = require('@faker-js/faker')
const contact_us_data = helper.parseJsonFile('./environments/contact_us_data.json')
const registration_data = helper.parseJsonFile('./environments/registration_data.json')
const { mainPage } = require('../pageobjects/main.page')
const { sipTrunkingProdPage } = require('../pageobjects/sip.trunk.prod.page')
const { signUpPage, verifyEmailPage } = require('../pageobjects/sign.up.pages')
const { contactUsPage } = require('../pageobjects/contact.us.page')

describe('Registration and contact support test suite for the SIP Trunking page', () => {
    beforeEach( async () => {
        await mainPage.headSipTrunkLinkClick()
    });
    
    it('Should sign up from the SIP Trunking product page', async () => {
        await sipTrunkingProdPage.getFreeBtnClick()

        let randEmail = faker.internet.email()

        if(!registration_data.email)
            randEmail = faker.internet.exampleEmail()
        
        await signUpPage.fillInAllFields(
            randEmail,
            faker.name.fullName(),
            faker.internet.password(30, false, /[!-}]/, '!1So')
        )

        await signUpPage.clickSubmitBtn()
        
        await expect(verifyEmailPage.verifyEmail()).toHaveText(randEmail)
        await expect(verifyEmailPage.resendLink()).toBeDisplayed()
    });

    it('Should get talking to an experts from the SIP Trunking product page', async () => {
        await sipTrunkingProdPage.talkExpertsLinkClick()

        let randReason = contactUsPage.reasonOpt[Math.floor(Math.random() * 3)]

        if(contact_us_data.reason !== "Support") {
            randReason = contact_us_data.reason
        }

        const randFirstName = faker.name.firstName()
        const randLastName = faker.name.lastName()
        const randEmail = faker.internet.email()

        const randNumCodeIdx = Math.floor(Math.random() * 221) + 1
        const randNumCodeElem = await contactUsPage.numCode(randNumCodeIdx)
        const randNumCode = await randNumCodeElem.getValue()
        
        const randNum = faker.phone.number('###########')
        const randWebSite = faker.internet.url()
        const randText = faker.lorem.paragraph()
        
        await contactUsPage.fillInAllFields(
            randReason,
            randFirstName,
            randLastName,
            randEmail,
            randNumCode,
            randNum,
            randWebSite,
            randText
        )

        await expect(contactUsPage.reasonSelector()).toHaveValue(randReason)
        await expect(contactUsPage.firstNameInp()).toHaveValue(randFirstName)
        await expect(contactUsPage.lastNameInp()).toHaveValue(randLastName)
        await expect(contactUsPage.emailInp()).toHaveValue(randEmail)
        await expect(contactUsPage.numCodeSelector()).toHaveValue(randNumCode)
        await expect(contactUsPage.numInp()).toHaveValue(randNum)
        await expect(contactUsPage.webSiteInp()).toHaveValue(randWebSite)
        await expect(contactUsPage.addInfoInp()).toHaveValue(randText)
        await expect(contactUsPage.submitBtn()).toBeClickable()
    });

    it('Should get talking to an experts from the SIP Trunking page about the \
 Scheduling a Demo of the Mission Control Portal', async () => {
        const scheduleLink = await $('header span>[href*="contact-us"]')
        await scheduleLink.click()

        const reason = contact_us_data.reason
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