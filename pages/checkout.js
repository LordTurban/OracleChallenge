import { t, Selector } from 'testcafe'

import XPathSelector from '../utils/xpathSelector'

class CheckoutSummary{

    constructor() {
        this.toCheckoutButtonFromCartSummary = XPathSelector('//*[@class="button btn btn-default standard-checkout button-medium"]')
        this.toCheckoutButtonFromAddress = XPathSelector('//*[@class="button btn btn-default button-medium"]')
        this.termsAndConditionsCheckbox = XPathSelector('//*[@name="cgv"]')
        this.toCheckoutButtonFromShipping = XPathSelector('//*[@class="button btn btn-default standard-checkout button-medium"]')
        this.bankPaymentMethod = XPathSelector('//*[@class="bankwire"]')
        this.orderConfirmationButton = XPathSelector('//*[@class="button btn btn-default button-medium"]')
    }

    proceedToCheckoutFromCartSummary = async () => {
        await t
            .click(this.toCheckoutButtonFromCartSummary)
    }

    proceedToCheckoutFromAddress = async () => {
        await t
            .click(this.toCheckoutButtonFromAddress)
    }

    proceedToCheckoutFromShipping = async () => {
        await t
            .click(this.termsAndConditionsCheckbox)
            .click(this.toCheckoutButtonFromShipping)
    }

    paymentMethod = async () => {
        await t
            .click(this.bankPaymentMethod)
    }

    orderConfirmation = async () => {
        await t
            .click(this.orderConfirmationButton)
    }
}

export default new CheckoutSummary()