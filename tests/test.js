import Header from '../pages/header'
import Home from '../pages/home'
import Login from '../pages/login'
import ProductList from '../pages/productList'
import ProductDetail from '../pages/productDetail'
import CheckoutSummary from '../pages/checkout'

const testData = require('../utils/testData.json')

fixture `Automated flow for purchasing 3 items`.page`http://automationpractice.com/index.php`;

test('Test 1', async t => {
    // Starts at http://automationpractice.com/index.php
    await Home.toLoginPage()
    await Login.loginProcess(testData.user)
    await Header.toHomePage()
    await Header.toWomanProductList()
    await ProductList.toFirstProductDetail()
    await ProductDetail.addToCart()
    await ProductDetail.continueShopping()
    await Header.toWomanProductList()
    await ProductList.toSecodProductDetail()
    await ProductDetail.addToCart()
    await ProductDetail.continueShopping()
    await Header.toWomanProductList()
    await ProductList.toThirdProductDetail()
    await ProductDetail.addToCart()
    await ProductDetail.toCheckout()
    await CheckoutSummary.proceedToCheckoutFromCartSummary()
    await CheckoutSummary.proceedToCheckoutFromAddress()
    await CheckoutSummary.proceedToCheckoutFromShipping()
    await CheckoutSummary.paymentMethod()
    await CheckoutSummary.orderConfirmation()
    await Header.toHomePage()
})