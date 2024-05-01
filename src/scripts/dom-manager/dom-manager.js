import AssetsManager from "../../assets/assets-manager.js";
import DOMElementCreator from "./element-creator.js";
import FooterCreator from "./footer-creator.js";
import HeaderCreator from "./header-creator.js";
import MainCreator from "./main-creator.js";
import MenuCreator from "./menu-creator.js";

/**
 * DOMInitializer class is responsible for initializing the DOM of the application.
 * It initializes the domCreator and all the other creators in the constructor.
 */
class DomManager {
    /**
     * Constructor initializes the domCreator and all the other creators.
     */
    constructor() {
        this.domCreator = new DOMElementCreator();
        this.AssetsManager = new AssetsManager();
        this.initializeDOM();
    };

    /**
     * initializeDOM function initializes all the creators.
     * @param {DOMElementCreator} domCreator - The DOMElementCreator instance to use for creating DOM elements.
     */
    initializeDOM() {
        this.header = new HeaderCreator(this.domCreator, this.AssetsManager);
        this.menu = new MenuCreator(this.domCreator, this.AssetsManager);
        this.main = new MainCreator(this.domCreator, this.AssetsManager);
        this.footer = new FooterCreator(this.domCreator, this.AssetsManager);
    };
};

export default DomManager;