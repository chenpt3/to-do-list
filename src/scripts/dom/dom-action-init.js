import DOMInitializer from './dom-init.js';
import { Screens } from "./screens/screens.js";

/**
 * Events class is responsible for handling all the events in the application.
 * It initializes all the event listeners in the constructor.
 */
class Events {
    /**
     * Constructor initializes all the event listeners.
     */
    constructor() {
        this.toggleColorTheme();
        this.toggleMenu();
        this.modalCloseButtons();
        this.screensButtons();
        this.modalOpenButtons();
        this.saveButton();
    };

    /**
     * toggleColorTheme function adds event listeners to the theme toggle buttons.
     */
    toggleColorTheme() {
        const sunButton = document.querySelector('#sun-header-icon');
        sunButton.addEventListener('click', this.themeToggle);
    
        const moonButton = document.querySelector('#moon-header-icon');
        moonButton.addEventListener('click', this.themeToggle);
    };

    /**
     * toggleMenu function adds an event listener to the menu toggle button.
     */
    toggleMenu() {
        const menuButton = document.querySelector('#menu-controls-button');
        menuButton.addEventListener('click', this.menuToggle);
    }

    /**
     * modalCloseButtons function adds event listeners to all the modal close buttons.
     */
    modalCloseButtons() {
        const closeButtons = document.querySelectorAll('.modal-close');
        closeButtons.forEach(button => button.addEventListener('click', () => {
            const modalsContainer = document.querySelector('#modals-container');
            modalsContainer.classList.toggle('visible-modal');
            const modal = document.querySelector('.visible-modal');
            modal.classList.toggle('visible-modal');
        }));
    };

    /**
     * screensButtons function adds event listeners to all the screen buttons.
     */
    screensButtons() {
        const allTasksButton = document.querySelector('#allTasks');
        allTasksButton.addEventListener('click', () => this.screensToggle('allTasks'));

        const todayButton = document.querySelector('#today');
        todayButton.addEventListener('click', () => this.screensToggle('today'));

        const weekButton = document.querySelector('#week');
        weekButton.addEventListener('click', () => this.screensToggle('week'));

        const importantButton = document.querySelector('#important');
        importantButton.addEventListener('click', () => this.screensToggle('important'));

        const completedButton = document.querySelector('#completed');
        completedButton.addEventListener('click', () => this.screensToggle('completed'));

        const projectsButton = document.querySelector('#projects-button');
        projectsButton.addEventListener('click', () => this.screensToggle('allProjects'));

        const logoButton = document.querySelector('#header-logo-container');
        logoButton.addEventListener('click', () => this.screensToggle('welcome'));
    };

    /**
     * modalOpenButtons function adds event listeners to all the modal open buttons.
     */
    modalOpenButtons() {
        function modalOpen(modal) {
            const modalsContainer = document.querySelector('#modals-container');
            modalsContainer.classList.toggle('visible-modal');
            const modalElement = document.querySelector(`#${modal}-modal`);
            modalElement.classList.toggle('visible-modal');
        };

        const profileButton = document.querySelector('#menu-controls-profile');
        const addProjectButton = [document.querySelector('#add-project-button'), document.querySelector('.add-project-button-icon')];
        const addTaskButton = document.querySelectorAll('.add-task-button-icon');
        const infoButton = document.querySelector('#help-header-icon');
        const settingsButton = document.querySelector('#settings-header-icon');
        
        const openButtons = [profileButton, addProjectButton, addTaskButton, infoButton, settingsButton];
        const modalsList = ['profile', 'addProject', 'addTask', 'info', 'settings'];
        for (let i = 0; i < openButtons.length; i++) {
            if (openButtons[i].length > 0) {
                for (let j = 0; j < openButtons[i].length; j++) {
                    openButtons[i][j].addEventListener('click', () => modalOpen(modalsList[i]));
                };
            } else if (openButtons[i].length === undefined) {
                openButtons[i].addEventListener('click', () => modalOpen(modalsList[i]));
            };
        };
    };

    /**
     * saveButton function adds an event listener to the save button.
     */
    saveButton() {
        const saveButton = document.querySelector('#save-header-icon');
        saveButton.addEventListener('click', () => {
            const modalsContainer = document.querySelector('#modals-container');
            modalsContainer.classList.toggle('visible-modal');
            const modal = document.querySelector('#save-modal');
            modal.classList.toggle('visible-modal');
        });
    };

    /**
     * screensToggle function gets all screens, hides all screens, shows the specified screen, and stores the current screen in local storage.
     */
    screensToggle(screen) {
        // Get all screens
        const screens = document.querySelectorAll('.screen');
        // Hide all screens and show the specified screen
        screens.forEach(screen => screen.classList.add('screen-hidden'));
        const currentScreen = document.querySelector(`#${screen}-screen`);
        currentScreen.classList.remove('screen-hidden');
        // Store the current screen in local storage
        localStorage.setItem('screen', screen);
    };

    /**
 * menuToggle function gets the menu and related elements, toggles the menu state, and stores the current menu state in local storage.
 */
    menuToggle() {
        // Get the menu and related elements
        const menu = document.querySelector('#container');
        const menuButtonsText = document.querySelectorAll('.menu-button-text');
        const profile = document.querySelector('#menu-controls-profile');
        const projectsList = document.querySelector('#projects-list');
        const projectsButton = document.querySelector('#add-project-button-icon');
        // Toggle the menu and adjust the visibility of the menu and related elements
        menu.classList.toggle('menu-open');
        menu.classList.toggle('menu-close');
        menuButtonsText.forEach(button => button.classList.toggle('hidden-menu-button-text'));
        profile.classList.toggle('hidden-menu-button-text');
        projectsList.classList.toggle('hidden-menu-button-text');
        projectsButton.classList.toggle('hidden-menu-button-text');
        // Store the current menu state in local storage
        if (menu.classList.contains('menu-open')) {
            localStorage.setItem('menu', 'true');
        } else {
            localStorage.setItem('menu', 'false');
        };
    };

    /**
     * themeToggle function gets the body element and theme buttons, toggles the theme, and stores the current theme in local storage.
     */
    themeToggle() {
        // Get the body element and theme buttons
        const body = document.querySelector('body');
        const sunButton = document.querySelector('#sun-header-icon');
        const moonButton = document.querySelector('#moon-header-icon');
        // Toggle the theme and adjust the visibility of the theme buttons
        body.classList.toggle('dark-theme');
        sunButton.classList.toggle('hidden-theme-button');
        moonButton.classList.toggle('hidden-theme-button');
        sunButton.classList.toggle('visible-theme-button');
        moonButton.classList.toggle('visible-theme-button');
        // Store the current theme in local storage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        };
    };
};

/**
 * DOMControl class is responsible for controlling the DOM elements and screens.
 * It initializes the DOM elements, determines the initial theme, menu state, and screen based on local storage.
 */
class DOMControl {
    /**
     * Constructor initializes DOM elements and screens, and determines the initial theme, menu state, and screen.
     */
    constructor() {
        // Initialize DOM elements and screens
        this.domInitializer = new DOMInitializer();
        this.screensContent = new Screens();
        this.events = new Events();
        // Determine the initial theme, menu state, and screen based on local storage
        this.determineTheme();
        this.determineOpenMenu();
        this.determineScreen();
        this.determineMemory();
    };

    /**
     * determineTheme function gets the body element and theme buttons, and sets the theme based on local storage.
     */
    determineTheme() {
        // Get the body element and theme buttons
        const body = document.querySelector('body');
        const theme = localStorage.getItem('theme');
        const sunButton = document.querySelector('#sun-header-icon');
        const moonButton = document.querySelector('#moon-header-icon');
        // If the theme is dark, add the dark-theme class and adjust the visibility of the theme buttons
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            sunButton.classList.toggle('hidden-theme-button');
            moonButton.classList.toggle('visible-theme-button')
        } else {
            // If the theme is not dark, adjust the visibility of the theme buttons
            moonButton.classList.toggle('hidden-theme-button');
            sunButton.classList.toggle('visible-theme-button');
        };
    };

    /**
     * determineOpenMenu function gets the menu and related elements, and sets the menu state based on local storage.
     */
    determineOpenMenu() {
        // Get the menu and related elements
        const menu = document.querySelector('#container');
        const menuButtonsText = document.querySelectorAll('.menu-button-text');
        const open = localStorage.getItem('menu');
        const profile = document.querySelector('#menu-controls-profile');
        const projectsList = document.querySelector('#projects-list');
        const projectsButton = document.querySelector('#add-project-button-icon');
        // If the menu is open, adjust the classes and visibility of the menu and related elements
        if (open === 'true') {
            menu.classList.add('menu-open');
            menu.classList.remove('menu-close');
            menuButtonsText.forEach(button => button.classList.remove('hidden-menu-button-text'));
            profile.classList.remove('hidden-menu-button-text');
            projectsList.classList.remove('hidden-menu-button-text');
            projectsButton.classList.remove('hidden-menu-button-text');
        } else {
            // If the menu is not open, adjust the classes and visibility of the menu and related elements
            menu.classList.add('menu-close');
            menu.classList.remove('menu-open');
            menuButtonsText.forEach(button => button.classList.add('hidden-menu-button-text'));
            profile.classList.add('hidden-menu-button-text');
            projectsList.classList.add('hidden-menu-button-text');
            projectsButton.classList.add('hidden-menu-button-text');
        };
    };

    /**
     * determineScreen function gets all screens, and sets the screen based on local storage.
     */
    determineScreen() {
        // Get all screens
        const screens = document.querySelectorAll('.screen');
        const screen = localStorage.getItem('screen');
        // If a screen is stored in local storage, hide all screens and show the stored screen
        if (screen) {
            screens.forEach(screen => screen.classList.add('screen-hidden'));
            const currentScreen = document.querySelector(`#${screen}-screen`);
            currentScreen.classList.remove('screen-hidden');
        } else {
            // If no screen is stored in local storage, hide all screens and show the welcome screen
            screens.forEach(screen => screen.classList.add('screen-hidden'));
            const currentScreen = document.querySelector('#welcome-screen');
            currentScreen.classList.remove('screen-hidden');
        };
    };

    determineMemory() {
        return;
    };
};

export default DOMControl;

