import { t, Selector } from 'testcafe'

import XPathSelector from '../utils/xpathSelector'

class Header{

    constructor() {
        this.logo = XPathSelector('//*[@class="logo img-responsive"]')
        this.womanProductsButton = XPathSelector('//*[@class="sf-with-ul"]')
    }

    toHomePage = async () => {
        await t
            .click(this.logo)
            .wait(3000)
    }

    toWomanProductList = async () => {
        await t
            .click(this.womanProductsButton)
            .wait(3000)
    }
}

export default new Header()