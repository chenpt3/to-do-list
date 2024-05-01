import { add } from "lodash";

/**
 * MainCreator class is responsible for creating and managing the main content of the application.
 * It initializes the domCreator and adds the main content in the constructor.
 */
class MainCreator {
    /**
     * Constructor initializes the domCreator and adds the main content.
     * @param {DOMElementCreator} domCreator - The DOMElementCreator instance to use for creating DOM elements.
     */
    constructor(domCreator) {
        this.domCreator = domCreator;
        this.addMain();
        this.init();
    };

    /**
     * addMain function creates the main content and adds it to the DOM.
     */
    addMain() {
        const mainContent = this.domCreator.createElement('main', 'main');
        this.addMainScreen(mainContent);
        this.domCreator.appendChild(this.domCreator.container, mainContent);
    };

    /**
     * addMainScreens function adds screens to the main content.
     * @param {HTMLElement} main - The main content to add screens to.
     */
    addMainScreen(main) {
        const mainScreen = this.domCreator.createElement('div', 'main-screen');
        this.domCreator.appendChild(main, mainScreen);
    };

    /**
     * addScreen function adds a screen to the main content.
     * @param {HTMLElement} main - The main content to add the screen to.
     * @param {string} screenName - The name of the screen to add.
     */
    addScreen(main, screenName) {
        const screen = this.domCreator.createElement('div', `${screenName}-screen`, 'screen', 'hidden');
        this.domCreator.appendChild(main, screen);
    };

    init() {
        const main = document.querySelector('main');
        this.addScreen(main, 'home');
        this.addScreen(main, 'for-today');
        this.addScreen(main, 'this-week');
        this.addScreen(main, 'important');
        this.addScreen(main, 'all-tasks');
        this.addScreen(main, 'completed');
        this.addScreen(main, 'all-projects');
        this.addScreen(main, 'active-project');
        this.addScreen(main, 'settings');
        this.addScreen(main, 'about');
        this.addScreen(main, 'help');
        this.addScreen(main, 'profile');
        this.addScreen(main, 'add-project');
        this.addScreen(main, 'add-task');
        this.addScreen(main, 'edit-task');
        this.addScreen(main, 'edit-project');
    };
};

export default MainCreator;