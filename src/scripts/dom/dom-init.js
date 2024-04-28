import { TaskManager } from '../tasks-manager';
import { initAllTasks } from './all-tasks';
import { moonIcon, sunIcon, addProjectIcon, allTasksIcon, todayIcon, weekIcon, importantIcon, completedIcon, settingsIcon, helpIcon, menuIcon } from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/images.js';
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
        this.TaskManager = new TaskManager();
        this.TaskManager.populateTaskManager();
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
        const headerLogoText = this.domCreator.createElement('p', 'header-logo-text');
        this.domCreator.addText(headerLogoText, 'To-Do List');
        this.domCreator.appendChild(headerLogoContainer, headerLogoText);
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
        this.generateScreenContent(screen);
    };

    generateScreenContent(screen) {
        switch (screen.id) {
            case 'welcome-screen':
                this.addWelcomeScreenContent(screen);
                break;
            case 'settings-screen':
                this.addSettingsScreenContent(screen);
                break;
            case 'help-screen':
                this.addHelpScreenContent(screen);
                break;
            case 'allTasks-screen':
                this.addAllTasksScreenContent(screen);
                break;
            case 'today-screen':
                this.addTodayScreenContent(screen);
                break;
            case 'week-screen':
                this.addWeekScreenContent(screen);
                break;
            case 'important-screen':
                this.addImportantScreenContent(screen);
                break;
            case 'completed-screen':
                this.addCompletedScreenContent(screen);
                break;
            case 'allProjects-screen':
                this.addAllProjectsScreenContent(screen);
                break;
            case 'activeProject-screen':
                this.addActiveProjectScreenContent(screen);
                break;
            case 'addProject-screen':
                this.addAddProjectScreenContent(screen);
                break;
        };
    };

    // Welcome screen
    addWelcomeScreenContent(screen) {
        const welcomeHeading = this.domCreator.createElement('h1', 'welcome-heading');
        this.domCreator.addText(welcomeHeading, "Welcome to Chen's To-Do List");
        this.domCreator.appendChild(screen, welcomeHeading);

        const welcomeText = this.domCreator.createElement('p', 'welcome-text');
        this.domCreator.addText(welcomeText, "This is a simple to-do list application that allows you to keep track of your tasks and projects. You can add tasks, mark them as completed, and filter them by date, importance, and project. You can also add projects and assign tasks to them. Enjoy!");
        this.domCreator.appendChild(screen, welcomeText);

        const welcomeButton = this.domCreator.createElement('div', 'welcome-button');
        this.domCreator.addText(welcomeButton, 'Get Started');
        this.domCreator.appendChild(screen, welcomeButton);
    };

    // Settings screen
    addSettingsScreenContent(screen) {
        const settingsHeading = this.domCreator.createElement('h1', 'settings-heading');
        this.domCreator.addText(settingsHeading, 'Settings');
        this.domCreator.appendChild(screen, settingsHeading);

        const settingsText = this.domCreator.createElement('p', 'settings-text');
        this.domCreator.addText(settingsText, 'Change the settings of the application here.');
        this.domCreator.appendChild(screen, settingsText);
    };

    // Help screen
    addHelpScreenContent(screen) {
        const helpHeading = this.domCreator.createElement('h1', 'help-heading');
        this.domCreator.addText(helpHeading, 'Help');
        this.domCreator.appendChild(screen, helpHeading);

        const helpText = this.domCreator.createElement('p', 'help-text');
        this.domCreator.addText(helpText, 'Get help with the application here.');
        this.domCreator.appendChild(screen, helpText);
    };

    // All tasks screen
    addAllTasksScreenContent(screen) {
        const allTasksHeading = this.domCreator.createElement('h1', 'allTasks-heading');
        this.domCreator.addText(allTasksHeading, 'All Tasks');
        this.domCreator.appendChild(screen, allTasksHeading);

        const allTasksText = this.domCreator.createElement('p', 'allTasks-text');
        this.domCreator.addText(allTasksText, 'View all tasks here.');
        this.domCreator.appendChild(screen, allTasksText);

        const allTasks = this.domCreator.createElement('div', 'allTasks');
        initAllTasks(allTasks, this.TaskManager);
        this.domCreator.appendChild(screen, allTasks);
    };

    // Today screen
    addTodayScreenContent(screen) {
        const todayHeading = this.domCreator.createElement('h1', 'today-heading');
        this.domCreator.addText(todayHeading, 'Today');
        this.domCreator.appendChild(screen, todayHeading);

        const todayText = this.domCreator.createElement('p', 'today-text');
        this.domCreator.addText(todayText, 'View tasks due today here.');
        this.domCreator.appendChild(screen, todayText);
    };

    // Week screen
    addWeekScreenContent(screen) {
        const weekHeading = this.domCreator.createElement('h1', 'week-heading');
        this.domCreator.addText(weekHeading, 'Week');
        this.domCreator.appendChild(screen, weekHeading);

        const weekText = this.domCreator.createElement('p', 'week-text');
        this.domCreator.addText(weekText, 'View tasks due this week here.');
        this.domCreator.appendChild(screen, weekText);
    };

    // Important screen
    addImportantScreenContent(screen) {
        const importantHeading = this.domCreator.createElement('h1', 'important-heading');
        this.domCreator.addText(importantHeading, 'Important');
        this.domCreator.appendChild(screen, importantHeading);

        const importantText = this.domCreator.createElement('p', 'important-text');
        this.domCreator.addText(importantText, 'View important tasks here.');
        this.domCreator.appendChild(screen, importantText);
    };

    // Completed screen
    addCompletedScreenContent(screen) {
        const completedHeading = this.domCreator.createElement('h1', 'completed-heading');
        this.domCreator.addText(completedHeading, 'Completed');
        this.domCreator.appendChild(screen, completedHeading);

        const completedText = this.domCreator.createElement('p', 'completed-text');
        this.domCreator.addText(completedText, 'View completed tasks here.');
        this.domCreator.appendChild(screen, completedText);
    };

    // All projects screen
    addAllProjectsScreenContent(screen) {
        const allProjectsHeading = this.domCreator.createElement('h1', 'allProjects-heading');
        this.domCreator.addText(allProjectsHeading, 'All Projects');
        this.domCreator.appendChild(screen, allProjectsHeading);

        const allProjectsText = this.domCreator.createElement('p', 'allProjects-text');
        this.domCreator.addText(allProjectsText, 'View all projects here.');
        this.domCreator.appendChild(screen, allProjectsText);
    };

    // Active project screen
    addActiveProjectScreenContent(screen) {
        const activeProjectHeading = this.domCreator.createElement('h1', 'activeProject-heading');
        this.domCreator.addText(activeProjectHeading, 'Active Project');
        this.domCreator.appendChild(screen, activeProjectHeading);

        const activeProjectText = this.domCreator.createElement('p', 'activeProject-text');
        this.domCreator.addText(activeProjectText, 'View the active project here.');
        this.domCreator.appendChild(screen, activeProjectText);
    };

    // Add project screen
    addAddProjectScreenContent(screen) {
        const addProjectHeading = this.domCreator.createElement('h1', 'addProject-heading');
        this.domCreator.addText(addProjectHeading, 'Add Project');
        this.domCreator.appendChild(screen, addProjectHeading);

        const addProjectText = this.domCreator.createElement('p', 'addProject-text');
        this.domCreator.addText(addProjectText, 'Add a new project here.');
        this.domCreator.appendChild(screen, addProjectText);
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