const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');

Given('I am on the login page', async () => {
    await LoginPage.open();
});

When('I login with valid credentials', async () => {
    await LoginPage.login('valid_username', 'valid_password');
});

Then('I should see the dashboard page', async () => {
    await expect(browser).toHaveUrlContaining('dashboard');
});
