import {
    moonIcon,
    sunIcon,
    addProjectIcon,
    allTasksIcon,
    todayIcon,
    weekIcon,
    importantIcon,
    completedIcon,
    settingsIcon,
    helpIcon,
    menuIcon,
    logoIcon,
    userIcon,
    addTaskIcon,
    projectIcon,
    projectsIcon,
    saveIcon,
    searchIcon,
    closeIcon
    } from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/images.js';
/**
 * DOMElementCreator class is responsible for creating and manipulating DOM elements.
 * It initializes the body and container elements in the constructor.
 */
class DOMElementCreator {
    /**
     * Constructor initializes the body and container elements.
     */
    constructor() {
        this.body = document.querySelector('body');
        this.container = this.createElement('div', 'container', 'menu-open', 'menu-visible');
        this.appendChild(this.body, this.container);
    };

    /**
     * createElement function creates a new DOM element with the specified type, id, and classes.
     * @param {string} type - The type of the DOM element to create.
     * @param {string} id - The id of the DOM element to create.
     * @param {...string} classes - The classes to add to the DOM element.
     * @returns {HTMLElement} The created DOM element.
     */
    createElement(type, id, ...classes) {
        const element = document.createElement(type);
        element.id = id;
        classes.forEach(className => element.classList.add(className));
        return element;
    };

    /**
     * appendChild function appends a child element to a parent element.
     * @param {HTMLElement} parent - The parent element to append the child to.
     * @param {HTMLElement} child - The child element to append to the parent.
     * @returns {HTMLElement} The parent element.
     */
    appendChild(parent, child) {
        parent.appendChild(child);
        return parent;
    };

    /**
     * addText function adds text content to a DOM element.
     * @param {HTMLElement} element - The element to add text content to.
     * @param {string} text - The text content to add to the element.
     * @returns {HTMLElement} The element.
     */
    addText(element, text) {
        element.textContent = text;
        return element;
    };

    /**
     * addImage function adds an image source to a DOM element.
     * @param {HTMLElement} element - The element to add the image source to.
     * @param {string} src - The image source to add to the element.
     * @returns {HTMLElement} The element.
     */
    addImage(element, src) {
        element.src = src;
        return element;
    };
};

/**
 * ModalCreator class is responsible for creating and managing modals in the application.
 * It initializes the domCreator and adds modals in the constructor.
 */
class ModalCreator {
    /**
     * Constructor initializes the domCreator and adds modals.
     * @param {DOMElementCreator} domCreator - The DOMElementCreator instance to use for creating DOM elements.
     */
    constructor(domCreator) {
        this.domCreator = domCreator;
        this.addModals();
    };

    /**
     * addModals function creates a modals container and adds all the modals to it.
     */
    addModals() {
        const modalsContainer = this.domCreator.createElement('div', 'modals-container');
        modalsContainer.style.display = 'none';
        this.domCreator.appendChild(document.querySelector('body'), modalsContainer);
        const modalsList = ['settings', 'info', 'save', 'profile', 'addProject', 'addTask', 'addSubTask', 'addNote', 'editTask', 'confirm'];
        for (let i = 0; i < modalsList.length; i++) {
            this.addModal(modalsList[i], modalsContainer);
        };
    };

    /**
     * addModal function creates a new modal and adds it to the modals container.
     * @param {string} modalName - The name of the modal to create.
     * @param {HTMLElement} modalsContainer - The modals container to add the modal to.
     */
    addModal(modalName, modalsContainer) {
        const modal = this.domCreator.createElement('div', `${modalName}-modal`, 'modal');
        modal.style.display = 'none';
        this.domCreator.appendChild(modalsContainer, modal);
        this.addModalContent(modal, modalName);
    };

    /**
     * addModalContent function adds content to a modal.
     * @param {HTMLElement} modal - The modal to add content to.
     * @param {string} modalName - The name of the modal.
     */
    addModalContent(modal, modalName) {
        const modalTop = this.domCreator.createElement('div', `${modalName}-modal-top`, 'modal-top');
        this.domCreator.appendChild(modal, modalTop);

        const modalHeading = this.domCreator.createElement('h2', `${modalName}-heading`, 'modal-heading');
        const modalTitle = modalName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        this.domCreator.addText(modalHeading, modalTitle);
        this.domCreator.appendChild(modalTop, modalHeading);

        const modalClose = this.domCreator.createElement('img', `${modalName}-modal-close`, 'modal-close');
        this.domCreator.addImage(modalClose, closeIcon);
        this.domCreator.appendChild(modalTop, modalClose);

        const modalContent = this.domCreator.createElement('div', `${modalName}-modal-content`, 'modal-content');
        this.domCreator.appendChild(modal, modalContent);
    };
};

/**
 * HeaderCreator class is responsible for creating and managing the header in the application.
 * It initializes the domCreator and adds the header in the constructor.
 */
class HeaderCreator {
    /**
     * Constructor initializes the domCreator and adds the header.
     * @param {DOMElementCreator} domCreator - The DOMElementCreator instance to use for creating DOM elements.
     */
    constructor(domCreator) {
        this.domCreator = domCreator;
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
        const headerLogoContainer = this.domCreator.createElement('div', 'header-logo-container');
        const headerLogo = this.domCreator.createElement('img', 'header-logo');
        this.domCreator.addImage(headerLogo, logoIcon);
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
        const buttonNames = ['moon', 'sun', 'save', 'settings', 'help', 'menu'];
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
                this.domCreator.addImage(button, moonIcon);
                break;
            case 'sun':
                this.domCreator.addImage(button, sunIcon);
                break;
            case 'save':
                this.domCreator.addImage(button, saveIcon);
                break;
            case 'settings':
                this.domCreator.addImage(button, settingsIcon);
                break;
            case 'help':
                this.domCreator.addImage(button, helpIcon);
                break;
            case 'menu':
                this.domCreator.addImage(button, menuIcon);
                break;
        };
    };
};

/**
 * MenuCreator class is responsible for creating and managing the menu of the application.
 * It initializes the domCreator and adds the menu in the constructor.
 */
class MenuCreator {
    /**
     * Constructor initializes the domCreator and adds the menu.
     * @param {DOMElementCreator} domCreator - The DOMElementCreator instance to use for creating DOM elements.
     */
    constructor(domCreator) {
        this.domCreator = domCreator;
        this.addMenu();
    };

    /**
     * addMenu function creates a menu and adds elements to it.
     */
    addMenu() {
        const menu = this.domCreator.createElement('aside', 'menu');
        this.addMenuElements(menu);
        this.domCreator.appendChild(this.domCreator.container, menu);
    };

    /**
     * addMenuElements function adds elements to the menu.
     * @param {HTMLElement} menu - The menu to add elements to.
     */
    addMenuElements(menu) {
        this.addMenuControls(menu);
        this.addMenuButtons(menu);
        this.addProjects(menu)
    };

    /**
     * addMenuControls function adds controls to the menu.
     * @param {HTMLElement} menu - The menu to add controls to.
     */
    addMenuControls(menu) {
        const menuControlsContainer = this.domCreator.createElement('div', 'menu-controls-container');
        const menuControlsProfile = this.AddMenuControlsProfile(menuControlsContainer);
        const menuControlsButton = this.AddMenuControlsButton(menuControlsContainer);
        this.domCreator.appendChild(menu, menuControlsContainer);
    };

    /**
     * AddMenuControlsProfile function adds a profile control to the menu.
     * @param {HTMLElement} menuControlsContainer - The container to add the profile control to.
     */
    AddMenuControlsProfile(menuControlsContainer) {
        const menuControlsProfile = this.domCreator.createElement('div', 'menu-controls-profile');

        const menuControlsProfileImage = this.domCreator.createElement('img', 'menu-controls-profile-image', 'menu-button-image');
        this.domCreator.addImage(menuControlsProfileImage, userIcon);

        const menuControlsProfileName = this.domCreator.createElement('p', 'menu-controls-profile-name', 'menu-button-text');
        this.domCreator.addText(menuControlsProfileName, 'Chen');

        this.domCreator.appendChild(menuControlsProfile, menuControlsProfileImage);
        this.domCreator.appendChild(menuControlsProfile, menuControlsProfileName);
        this.domCreator.appendChild(menuControlsContainer, menuControlsProfile);
        return menuControlsProfile;
    };

    /**
     * AddMenuControlsButton function adds a button control to the menu.
     * @param {HTMLElement} menuControlsContainer - The container to add the button control to.
     */
    AddMenuControlsButton(menuControlsContainer) {
        const menuControlsButton = this.domCreator.createElement('div', 'menu-controls-button');
        const menuControlsButtonImage = this.domCreator.createElement('img', 'menu-controls-button-icon', 'menu-button-image');
        this.domCreator.addImage(menuControlsButtonImage, menuIcon);
        this.domCreator.appendChild(menuControlsButton, menuControlsButtonImage);
        this.domCreator.appendChild(menuControlsContainer, menuControlsButton);
        return menuControlsButton;
    };

    /**
     * addMenuButtons function adds buttons to the menu.
     * @param {HTMLElement} menu - The menu to add the buttons to.
     */
    addMenuButtons(menu) {
        const menuButtonsContainer = this.domCreator.createElement('div', 'menu-buttons-container');
        this.domCreator.appendChild(menu, menuButtonsContainer);
        const buttonNames = ['allTasks', 'today', 'week', 'important', 'completed'];
        buttonNames.forEach(buttonName => this.addMenuButton(buttonName, menuButtonsContainer));
    };

    /**
     * addProjects function adds projects to the menu.
     * @param {HTMLElement} menu - The menu to add the projects to.
     */
    addProjects(menu) {
        const projectsContainer = this.domCreator.createElement('div', 'projects-container');
        this.domCreator.appendChild(menu, projectsContainer);

        const projectsButton = this.domCreator.createElement('div', 'projects-button', 'menu-button');
        this.domCreator.appendChild(projectsContainer, projectsButton);
        
        const projectsButtonImage = this.domCreator.createElement('img', 'projects-button-icon', 'menu-button-image');
        this.domCreator.addImage(projectsButtonImage, projectsIcon);
        this.domCreator.appendChild(projectsButton, projectsButtonImage);

        const projectsButtonText = this.domCreator.createElement('p', 'projects-button-text', 'menu-button-text');
        this.domCreator.addText(projectsButtonText, 'My Projects');
        this.domCreator.appendChild(projectsButton, projectsButtonText);

        this.addProjectsList(projectsContainer);
    };

    /**
     * addProjectsList function adds a list of projects to the menu.
     * @param {HTMLElement} projectsContainer - The container to add the projects list to.
     */
    addProjectsList(projectsContainer) {
        const projectsList = this.domCreator.createElement('div', 'projects-list');
        this.domCreator.appendChild(projectsContainer, projectsList);

        const projectsListContent = this.domCreator.createElement('div', 'projects-list-content');
        this.domCreator.appendChild(projectsList, projectsListContent);

        this.addAddProjectButton(projectsList);
    };

    /**
     * addAddProjectButton function adds a button to add a project to the menu.
     * @param {HTMLElement} projectList - The list to add the button to.
     */
    addAddProjectButton(projectList) {
        const addProjectButton = this.domCreator.createElement('div', 'add-project-button', 'menu-projects-button');
        this.domCreator.appendChild(projectList, addProjectButton);

        const addProjectButtonImage = this.domCreator.createElement('img', 'add-project-button-icon', 'menu-button-image');
        this.domCreator.addImage(addProjectButtonImage, addProjectIcon);
        this.domCreator.appendChild(addProjectButton, addProjectButtonImage);

        const addProjectButtonText = this.domCreator.createElement('p', 'add-project-button-text', 'menu-button-text');
        this.domCreator.addText(addProjectButtonText, 'Add Project');
        this.domCreator.appendChild(addProjectButton, addProjectButtonText);
    };

    /**
     * addMenuButton function adds a button to the menu.
     * @param {string} buttonName - The name of the button to add.
     * @param {HTMLElement} menuButtonsContainer - The container to add the button to.
     */
    addMenuButton(buttonName, menuButtonsContainer) {
        const button = this.domCreator.createElement('div', buttonName, 'menu-button');
        this.domCreator.appendChild(menuButtonsContainer, button);
        switch (buttonName) {
            case 'allTasks':
                this.addMenuButtonImageAndText(button, allTasksIcon, 'All Tasks', buttonName);
                break;
            case 'today':
                this.addMenuButtonImageAndText(button, todayIcon, 'Today', buttonName);
                break;
            case 'week':
                this.addMenuButtonImageAndText(button, weekIcon, 'Week', buttonName);
                break;
            case 'important':
                this.addMenuButtonImageAndText(button, importantIcon, 'Important', buttonName);
                break;
            case 'completed':
                this.addMenuButtonImageAndText(button, completedIcon, 'Completed', buttonName);
                break;
        };
    };

    /**
     * addMenuButtonImageAndText function adds an image and text to a menu button.
     * @param {HTMLElement} button - The button to add the image and text to.
     * @param {string} icon - The icon to add to the button.
     * @param {string} text - The text to add to the button.
     * @param {string} buttonName - The name of the button.
     */
    addMenuButtonImageAndText(button, icon, text, buttonName) {
        const image = this.domCreator.createElement('img', `${buttonName}-menu-icon`,'menu-button-image');
        this.domCreator.addImage(image, icon);
        this.domCreator.appendChild(button, image);
        const para = this.domCreator.createElement('p', `${buttonName}-menu-text`,'menu-button-text');
        this.domCreator.addText(para, text);
        this.domCreator.appendChild(button, para);
    };
};

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
    };

    /**
     * addMain function creates the main content and adds it to the DOM.
     */
    addMain() {
        const mainContent = this.domCreator.createElement('main', 'main');
        this.addMainScreens(mainContent);
        this.domCreator.appendChild(this.domCreator.container, mainContent);
    };

    /**
     * addMainScreens function adds screens to the main content.
     * @param {HTMLElement} main - The main content to add screens to.
     */
    addMainScreens(main) {
        this.addScreen(main, 'welcome');
        this.addScreen(main, 'allTasks');
        this.addScreen(main, 'today');
        this.addScreen(main, 'week');
        this.addScreen(main, 'important');
        this.addScreen(main, 'completed');
        this.addScreen(main, 'allProjects');
        this.addScreen(main, 'activeProject');
        this.addScreen(main, 'activeTask');
    }

    /**
     * addScreen function adds a screen to the main content.
     * @param {HTMLElement} main - The main content to add the screen to.
     * @param {string} screenName - The name of the screen to add.
     */
    addScreen(main, screenName) {
        const screen = this.domCreator.createElement('div', `${screenName}-screen`, 'screen');
        this.domCreator.appendChild(main, screen);
    };
};

/**
 * FooterCreator class is responsible for creating and managing the footer of the application.
 * It initializes the domCreator and adds the footer in the constructor.
 */
class FooterCreator {
    /**
     * Constructor initializes the domCreator and adds the footer.
     * @param {DOMElementCreator} domCreator - The DOMElementCreator instance to use for creating DOM elements.
     */
    constructor(domCreator) {
        this.domCreator = domCreator;
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

/**
 * DOMInitializer class is responsible for initializing the DOM of the application.
 * It initializes the domCreator and all the other creators in the constructor.
 */
class DOMInitializer {
    /**
     * Constructor initializes the domCreator and all the other creators.
     */
    constructor() {
        this.domCreator = new DOMElementCreator();
        this.initializeDOM(this.domCreator);
    };

    /**
     * initializeDOM function initializes all the creators.
     * @param {DOMElementCreator} domCreator - The DOMElementCreator instance to use for creating DOM elements.
     */
    initializeDOM(domCreator) {
        this.modals = new ModalCreator(domCreator);
        this.header = new HeaderCreator(domCreator);
        this.menu = new MenuCreator(domCreator);
        this.main = new MainCreator(domCreator);
        this.footer = new FooterCreator(domCreator);
    };
};

export default DOMInitializer;