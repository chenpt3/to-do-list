class Header {
    constructor(domTool) {
        this.domTool = domTool;
        this.createHeader();
    };

    createHeader() {
        this.header = this.domTool.createDom('header');
        this.domTool.appendElement(this.domTool.dom.body, this.header);
        this.createHeaderContent();
    };

    createHeaderContent() {
        this.createHeaderLogo();
        this.createHeaderIcons();
    };

    createHeaderLogo() {
        this.logo = this.domTool.createDom('img');
        this.logo.id = 'header-logo';
        this.logo.src = 'images/logo.png';
        this.domTool.appendElement(this.header, this.logo);
    };

    createHeaderIcons() {
        this.iconsContainer = this.domTool.createDom('div');
        this.domTool.appendElement(this.header, iconsContainer);
        const icons = ['sun', 'moon', 'settings', 'info', 'menu'];
        icons.forEach(icon => this.createIcon(icon));
    };

    createIcon(icon) {
        this.icon = this.domTool.createDom('img');
        this.icon.classList.add('header-icon');
        this.icon.id = `header-${icon}-icon`;
        this.icon.src = `images/${icon}.png`;
        this.domTool.appendElement(this.iconsContainer, this.icon);
    };
};

export default Header;