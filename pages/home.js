import { t, Selector } from 'testcafe'

class Home{

    constructor() {
        this.loginPageButton = Selector('.login')
        
    }

    toLoginPage = async () => {
        await t
            .click(this.loginPageButton)
    }
}

export default new Home()