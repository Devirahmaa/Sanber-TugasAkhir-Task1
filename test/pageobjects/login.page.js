class LoginPage {
    // Selektor untuk elemen halaman login
    get inputEmail() { return $('#email'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $('#login-button'); }

    async open() {
        await browser.url('/login');
    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
