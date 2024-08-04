const { Given, When, Then } = require('@wdio/cucumber-framework');
const ProductPage = require('../../pages/product.page.js');

Given(/^I am on the product creation page$/, async () => {
    await ProductPage.open();
});

When(/^I fill in the product details$/, async () => {
    await ProductPage.enterProductName('Test Product');
    await ProductPage.enterProductDescription('This is a test product.');
    await ProductPage.enterProductPurchasePrice('500');
    await ProductPage.enterProductSalePrice('1000');
    await ProductPage.enterProductStock('50');
    await ProductPage.selectProductCategory('Electronics');
});

When(/^I submit the form$/, async () => {
    await ProductPage.submitForm();
});

Then(/^I should see the new product in the product list$/, async () => {
    const productExists = await ProductPage.isProductInList('Test Product');
    expect(productExists).toBe(true);
});
