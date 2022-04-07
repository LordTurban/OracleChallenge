const {Builder, By, Key, until} = require('selenium-webdriver');

(async function mainTest() {
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();

    await driver.get('http://automationpractice.com/index.php');

    await driver.getTitle(); // => "My Store"

    driver.manage().setTimeouts({implicit: 0.5 })

    let goToSignInButton = await driver.findElement(By.className('login'));
    let emailBox = await driver.findElement(By.id('email'));
    let passwordBox = await driver.findElement(By.id('passwd'));
    let signInButton = await driver.findElement(By.id('SubmitLogin'));

    await goToSignInButton.click();
    driver.manage().setTimeouts({implicit: 1.5 })
    await emailBox.sendKeys('fturbana@hotmail.com');
    driver.manage().setTimeouts({implicit: 0.5 })
    await passwordBox.sendKeys('123456');
    driver.manage().setTimeouts({implicit: 0.5 })
    await signInButton.click();

    driver.manage().setTimeouts({implicit: 0.5 })

    //await searchButton.click();

    //await driver.findElement(By.className('page-heading')).getText("AUTHENTICATION");
    

    await driver.quit();
})();