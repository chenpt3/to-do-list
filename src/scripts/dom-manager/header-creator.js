/**
 * HeaderCreator class is responsible for creating and managing the header in the application.
 * It initializes the domCreator and adds the header in the constructor.
 */
class HeaderCreator {
    /**
     * Constructor initializes the domCreator and adds the header.
     * @param {DOMElementCreator} domCreator - The DOMElementCreator instance to use for creating DOM elements.
     */
    constructor(domCreator, assetsManager) {
        this.domCreator = domCreator;
        this.assetsManager = assetsManager;
        this.addHeader();
    };

    /**
     * addHeader function creates a header and adds elements to it.
     */
    addHeader() {
        const header = this.domCreator.createElement('header', 'header');
        this.addHeaderElements(header);
        this.domCreator.appendChild(this.domCreator.container, header);
    };

    /**
     * addHeaderElements function adds elements to the header.
     * @param {HTMLElement} header - The header to add elements to.
     */
    addHeaderElements(header) {
        this.addHeaderLogo(header);
        this.addHeaderButtons(header);
    };

    /**
     * addHeaderLogo function adds a logo to the header.
     * @param {HTMLElement} header - The header to add the logo to.
     */
    addHeaderLogo(header) {
        const headerLogoContainer = this.domCreator.createElement('div', 'header-logo-container');;
        const headerLogo = this.domCreator.createElement('img', 'header-logo', 'screen-changer');
        headerLogo.dataset.screen = 'home';
        this.domCreator.addImage(headerLogo, this.assetsManager.getAsset('logoIcon'));
        this.domCreator.appendChild(headerLogoContainer, headerLogo);
        this.domCreator.appendChild(header, headerLogoContainer);
    };

    /**
     * addHeaderButtons function adds buttons to the header.
     * @param {HTMLElement} header - The header to add the buttons to.
     */
    addHeaderButtons(header) {
        const headerButtonsContainer = this.domCreator.createElement('div', 'header-buttons-container');
        this.domCreator.appendChild(header, headerButtonsContainer);
        const buttonNames = ['moon', 'sun', 'settings', 'help', 'menu'];
        buttonNames.forEach(buttonName => this.addHeaderButton(buttonName, headerButtonsContainer));
    };

    /**
     * addHeaderButton function adds a button to the header.
     * @param {string} buttonName - The name of the button to add.
     * @param {HTMLElement} headerButtonsContainer - The container to add the button to.
     */
    addHeaderButton(buttonName, headerButtonsContainer) {
        const button = this.domCreator.createElement('img', `${buttonName}-header-icon`, 'header-button');
        this.domCreator.appendChild(headerButtonsContainer, button);
        switch (buttonName) {
            case 'moon':
                this.domCreator.addImage(button, this.assetsManager.getAsset('moonIcon'));
                button.classList.add('color-theme-changer');
                button.classList.add('hidden');
                button.dataset.colorTheme = 'dark';
                break;
            case 'sun':
                this.domCreator.addImage(button, this.assetsManager.getAsset('sunIcon'));
                button.classList.add('color-theme-changer');
                button.dataset.colorTheme = 'light';
                break;
            case 'settings':
                this.domCreator.addImage(button, this.assetsManager.getAsset('settingsIcon'));
                button.classList.add('screen-changer');
                button.dataset.screen = 'settings';
                break;
            case 'help':
                this.domCreator.addImage(button, this.assetsManager.getAsset('helpIcon'));
                button.classList.add('screen-changer');
                button.dataset.screen = 'help';
                break;
            case 'menu':
                this.domCreator.addImage(button, this.assetsManager.getAsset('menuIcon'));
                button.classList.add('hidden');
                break;
            default:
                break;
        };
    };
};

export default HeaderCreator;