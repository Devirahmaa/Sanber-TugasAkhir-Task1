const { Given, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page.js');

Given('I open the browser', async () => {
    await LoginPage.open();
});

Then('I should see the login page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/');
    await expect(LoginPage.btnSubmit).toBeDisplayed();
});
