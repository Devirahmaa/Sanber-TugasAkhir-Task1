const BasePage = require('./base.page.js');

class ProductPage extends BasePage {
    get inputName() { return $('#name'); }
    get inputDescription() { return $('#description'); }
    get inputPurchasePrice() { return $('#purchasePrice'); }
    get inputSalePrice() { return $('#salePrice'); }
    get inputStock() { return $('#stock'); }
    get dropdownCategory() { return $('#category'); }
    get submitButton() { return $('button[type="submit"]'); }
    get productList() { return $('#product-list'); }

    async open() {
        await super.open('/products/create');
    }

    async enterProductName(name) {
        await this.inputName.setValue(name);
    }

    async enterProductDescription(description) {
        await this.inputDescription.setValue(description);
    }

    async enterProductPurchasePrice(purchasePrice) {
        await this.inputPurchasePrice.setValue(purchasePrice);
    }

    async enterProductSalePrice(salePrice) {
        await this.inputSalePrice.setValue(salePrice);
    }

    async enterProductStock(stock) {
        await this.inputStock.setValue(stock);
    }

    async selectProductCategory(category) {
        await this.dropdownCategory.selectByVisibleText(category);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async isProductInList(name) {
        const products = await this.productList.$$('li');
        for (let product of products) {
            const text = await product.getText();
            if (text.includes(name)) {
                return true;
            }
        }
        return false;
    }
}

module.exports = new ProductPage();
