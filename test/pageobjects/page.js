const closeAssertCookieBtn = '[aria-label="close and deny"]'
const headerHidenLink = 'header div>span>a'
const prodDrop = 'header ul:nth-child(1) li:nth-child(1)'
const headSipTrunking = 'header [href*="sip-trunks"]'

class Page {

    async closeCookieAccertPopup () {
        await browser.url('https://telnyx.com/')
        if (await $(closeAssertCookieBtn).isDisplayed()) {
            const closeCookieBtn = await $(closeAssertCookieBtn)
            await closeCookieBtn.click()
        }
    }
    
    async openProdDropdown () {
        await $(headerHidenLink).moveTo()
        await $(prodDrop).moveTo()
    }

    async openPage (btn) {
        await $(btn).scrollIntoView({ block: "center" })
        await $(btn).click()
    }

    async clickSmth (element) {
        await $(element).click()
    }

    async headSipTrunkLinkClick () {
        await this.openProdDropdown()
        await this.clickSmth(headSipTrunking)
    }
}

module.exports = {
    Page: Page,
    page: new Page
}

