import { t, Selector } from 'testcafe'

import XPathSelector from '../utils/xpathSelector'

class ProductList{

    constructor() {
        this.firstProductItem = XPathSelector('//*[@src="http://automationpractice.com/img/p/1/1-home_default.jpg"]')
        this.secondProductItem = XPathSelector('//*[@src="http://automationpractice.com/img/p/7/7-home_default.jpg"]')
        this.thirdProductItem = XPathSelector('//*[@src="http://automationpractice.com/img/p/8/8-home_default.jpg"]')
        
    }

    toFirstProductDetail = async () => {
        await t
            .click(this.firstProductItem)
    }

    toSecodProductDetail = async () => {
        await t
            .click(this.secondProductItem)
    }

    toThirdProductDetail = async () => {
        await t
            .click(this.thirdProductItem)
    }
}

export default new ProductList()