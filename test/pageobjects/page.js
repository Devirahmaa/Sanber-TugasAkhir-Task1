module.exports = class Page {
    open (path) {
        return browser.url(`https://kasirdemo.vercel.app/${path}`);
    }
};
