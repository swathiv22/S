const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.google.com');
        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);
        await driver.wait(until.titleContains('Selenium WebDriver'), 10000);
        console.log('Search completed!');
    } finally {
        await driver.quit();
    }
})();
// mkdir po cd po
// npm init -y
// npm install selenium-webdriver chromedriver
// node test.js
