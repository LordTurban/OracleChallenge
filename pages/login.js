import { t, Selector } from 'testcafe'

class Login{

    constructor() {
        this.emailField = Selector('#email')
        this.passwordField = Selector('#passwd')
        this.loginButton = Selector('#SubmitLogin')
    }

    loginProcess = async (credentials) => {
        await t
            .typeText(this.emailField, credentials.valid_email, {paste:true})
            .typeText(this.passwordField, credentials.valid_password, {paste:true})
            .click(this.loginButton)
            .wait(3000)
    }
}

export default new Login()