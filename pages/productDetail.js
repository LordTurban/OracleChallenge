import { t, Selector } from 'testcafe'

import XPathSelector from '../utils/xpathSelector'

class ProductDetail{

    constructor() {
        this.addToCartButton = XPathSelector('//*[@name="Submit"]')
        this.continueShoppingButton = XPathSelector('//*[@title="Continue shopping"]')
        this.toCheckoutButton = XPathSelector('//*[@title="Proceed to checkout"]')
    }

    addToCart = async () => {
        await t
            .click(this.addToCartButton)
    }

    continueShopping = async () => {
        await t
            .click(this.continueShoppingButton)
    }

    toCheckout = async () => {
        await t
            .click(this.toCheckoutButton)
    }
}

export default new ProductDetail()