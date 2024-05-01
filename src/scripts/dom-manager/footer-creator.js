/**
 * FooterCreator class is responsible for creating and managing the footer of the application.
 * It initializes the domCreator and adds the footer in the constructor.
 */
class FooterCreator {
    /**
     * Constructor initializes the domCreator and adds the footer.
     * @param {DOMElementCreator} domCreator - The DOMElementCreator instance to use for creating DOM elements.
     */
    constructor(domCreator, assetsManager) {
        this.domCreator = domCreator;
        this.assetsManager = assetsManager;
        this.addFooter();
    };

    /**
     * addFooter function creates the footer and adds it to the DOM.
     */
    addFooter() {
        const footer = this.domCreator.createElement('footer', 'footer');
        this.addFooterElements(footer);
        this.domCreator.appendChild(this.domCreator.container, footer);
    };

    /**
     * addFooterElements function adds elements to the footer.
     * @param {HTMLElement} footer - The footer to add elements to.
     */
    addFooterElements(footer) {
        this.addFooterText(footer);
    };

    /**
     * addFooterText function adds text to the footer.
     * @param {HTMLElement} footer - The footer to add the text to.
     */
    addFooterText(footer) {
        const footerText = this.domCreator.createElement('p', 'footer-text');
        this.domCreator.addText(footerText, 'To-Do List');
        this.domCreator.appendChild(footer, footerText);
    };
};

export default FooterCreator;