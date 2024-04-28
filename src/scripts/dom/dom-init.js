import { moonIcon, sunIcon, addProjectIcon, allTasksIcon, todayIcon, weekIcon, importantIcon, completedIcon, settingsIcon, helpIcon, menuIcon, logo } from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/images.js';
class DOMElementCreator {
    constructor() {
        this.body = document.querySelector('body');
        this.container = this.createElement('div', 'container', 'menu-open', 'menu-visible');
        this.appendChild(this.body, this.container);
    };

    createElement(type, id, ...classes) {
        const element = document.createElement(type);
        element.id = id;
        classes.forEach(className => element.classList.add(className));
        return element;
    };

    appendChild(parent, child) {
        parent.appendChild(child);
        return parent;
    };

    addText(element, text) {
        element.textContent = text;
        return element;
    };

    addImage(element, src) {
        element.src = src;
        return element;
    };
};

class DOMInitializer {
    constructor() {
        this.domCreator = new DOMElementCreator();
        this.initializeDOM();
    };

    initializeDOM() {
        this.addHeader();
        this.addMenu();
        this.addMain();
        this.addFooter();

    };

    addHeader() {
        const header = this.domCreator.createElement('header', 'header');
        this.addHeaderElements(header);
        this.domCreator.appendChild(this.domCreator.container, header);
    };

    addMenu() {
        const menu = this.domCreator.createElement('aside', 'menu');
        this.addMenuElements(menu);
        this.domCreator.appendChild(this.domCreator.container, menu);
    };

    addMain() {
        const mainContent = this.domCreator.createElement('main', 'main');
        this.addMainScreens(mainContent);
        this.domCreator.appendChild(this.domCreator.container, mainContent);
    };

    addFooter() {
        const footer = this.domCreator.createElement('footer', 'footer');
        this.addFooterElements(footer);
        this.domCreator.appendChild(this.domCreator.container, footer);
    };

    // Header elements
    addHeaderElements(header) {
        this.addHeaderLogo(header);
        this.addHeaderButtons(header);
    };

    addHeaderLogo(header) {
        const headerLogoContainer = this.domCreator.createElement('div', 'header-logo-container');
        const headerLogo = this.domCreator.createElement('img', 'header-logo');
        this.domCreator.addImage(headerLogo, logo);
        this.domCreator.appendChild(headerLogoContainer, headerLogo);
        this.domCreator.appendChild(header, headerLogoContainer);
    };

    addHeaderButtons(header) {
        const headerButtonsContainer = this.domCreator.createElement('div', 'header-buttons-container');
        this.domCreator.appendChild(header, headerButtonsContainer);
        const buttonNames = ['moon', 'sun', 'settings', 'help', 'menu'];
        buttonNames.forEach(buttonName => this.addHeaderButton(buttonName, headerButtonsContainer));
    };

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

    // Menu elements
    addMenuElements(menu) {
        this.addMenuControls(menu);
        this.addMenuButtons(menu);
        this.addMenuProjects(menu);
    };

    addMenuControls(menu) {
        const menuControlsContainer = this.domCreator.createElement('div', 'menu-controls-container');
        const menuControlsProfile = this.AddMenuControlsProfile(menuControlsContainer);
        const menuControlsButton = this.AddMenuControlsButton(menuControlsContainer);
        this.domCreator.appendChild(menu, menuControlsContainer);
    };

    AddMenuControlsProfile(menuControlsContainer) {
        const menuControlsProfile = this.domCreator.createElement('div', 'menu-controls-profile');
        const menuControlsProfileName = this.domCreator.createElement('p', 'menu-controls-profile-name', 'menu-button-text');
        this.domCreator.addText(menuControlsProfileName, 'Chen The Man');
        this.domCreator.appendChild(menuControlsProfile, menuControlsProfileName);
        this.domCreator.appendChild(menuControlsContainer, menuControlsProfile);
        return menuControlsProfile;
    };

    AddMenuControlsButton(menuControlsContainer) {
        const menuControlsButton = this.domCreator.createElement('div', 'menu-controls-button');
        const menuControlsButtonImage = this.domCreator.createElement('img', 'menu-controls-button-icon', 'menu-button-image');
        this.domCreator.addImage(menuControlsButtonImage, menuIcon);
        this.domCreator.appendChild(menuControlsButton, menuControlsButtonImage);
        this.domCreator.appendChild(menuControlsContainer, menuControlsButton);
        return menuControlsButton;
    };

    addMenuButtons(menu) {
        const menuButtonsContainer = this.domCreator.createElement('div', 'menu-buttons-container');
        this.domCreator.appendChild(menu, menuButtonsContainer);
        const buttonNames = ['allTasks', 'today', 'week', 'important', 'completed'];
        buttonNames.forEach(buttonName => this.addMenuButton(buttonName, menuButtonsContainer));
    };

    addMenuButton(buttonName, menuButtonsContainer) {
        const button = this.domCreator.createElement('div', buttonName, "menu-button");
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

    addMenuButtonImageAndText(button, icon, text, buttonName) {
        const image = this.domCreator.createElement('img', `${buttonName}-menu-icon`,'menu-button-image');
        this.domCreator.addImage(image, icon);
        this.domCreator.appendChild(button, image);
        const para = this.domCreator.createElement('p', `${buttonName}-menu-text`,'menu-button-text');
        this.domCreator.addText(para, text);
        this.domCreator.appendChild(button, para);
    };

    addMenuProjects(menu) {
        const menuProjectsContainer = this.domCreator.createElement('div', 'menu-projects-container');
        this.domCreator.appendChild(menu, menuProjectsContainer);
        this.addProjectButton(menuProjectsContainer);
    };

    addProjectButton(menuProjectsContainer) {
        const addProjectButton = this.domCreator.createElement('div', 'add-project-button', 'menu-button');
        this.domCreator.appendChild(menuProjectsContainer, addProjectButton);
        this.addMenuButtonImageAndText(addProjectButton, addProjectIcon, 'Add Project', 'add-project');
    };

    // Main elements
    addMainScreens(main) {
        this.addScreen(main, 'welcome');
        this.addScreen(main, 'settings');
        this.addScreen(main, 'help');
        this.addScreen(main, 'allTasks');
        this.addScreen(main, 'today');
        this.addScreen(main, 'week');
        this.addScreen(main, 'important');
        this.addScreen(main, 'completed');
        this.addScreen(main, 'allProjects');
        this.addScreen(main, 'activeProject');
        this.addScreen(main, 'addProject');
    }

    addScreen(main, screenName) {
        const screen = this.domCreator.createElement('div', `${screenName}-screen`, 'screen');
        this.domCreator.appendChild(main, screen);
    };

    // Footer elements
    addFooterElements(footer) {
        this.addFooterText(footer);
    };

    addFooterText(footer) {
        const footerText = this.domCreator.createElement('p', 'footer-text');
        this.domCreator.addText(footerText, 'To-Do List');
        this.domCreator.appendChild(footer, footerText);
    };
};

export default DOMInitializer;