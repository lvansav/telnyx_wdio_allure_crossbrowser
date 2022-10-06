const { Page } = require('./page')

//sign up page's locators
const emailInp = '#email'
const nameInp = '#full_name'
const passInp = '#password'
const termsBox = '[aria-labelledby="terms-label"]'
const createAccBtn = '[type="submit"]'
//verifying email page's locators
const verifyEmail = '//h1/following-sibling::div//strong'
const resendLink = 'main button'

class SignUpPage extends Page {
    async fillInAllFields ( email, fullName, password) {
        await $(emailInp).addValue(email)
        await $(nameInp).addValue(fullName)
        await $(passInp).addValue(password)
        await $(termsBox).click()
    }

    async clickSubmitBtn () {
        const btn = await $(createAccBtn)
        await btn.waitForClickable({
            timeout: 60000,
            timeoutMsg: 'Create account button is not clickable'
        })
        await btn.click()
    }
}

class VerifyEmailPage extends Page {
    async verifyEmail () {
        return await $(verifyEmail)
    }

    async resendLink () {
        return await $(resendLink)
    }
}

module.exports = {
    SignUpPage: SignUpPage,
    signUpPage: new SignUpPage,
    VerifyEmailPage: VerifyEmailPage,
    verifyEmailPage: new VerifyEmailPage
}