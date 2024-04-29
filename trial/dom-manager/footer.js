class Footer {
    constructor(domTool) {
        this.domTool = domTool;
        this.createFooter();
    };

    createFooter() {
        this.footer = this.domTool.createDom('footer');
        this.domTool.appendElement(this.domTool.dom.body, this.footer);
        this.createFooterText();
    };

    createFooterText() {
        this.text = this.domTool.createDom('div');
        this.text.id = 'footer-text';
        this.domTool.appendElement(this.footer, this.text);
    };
};

export default Footer;