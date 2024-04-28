import DOMInitializer from './dom-init.js';

class DOMControl {
    constructor() {
        this.domInitializer = new DOMInitializer();
        this.determineTheme();
        this.determineOpenMenu();
        this.determineScreen();
        this.eventListeners();
    };

    determineTheme() {
        const body = document.querySelector('body');
        const theme = localStorage.getItem('theme');
        const sunButton = document.querySelector('#sun-header-icon');
        const moonButton = document.querySelector('#moon-header-icon');
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            sunButton.classList.toggle('hidden-theme-button');
            moonButton.classList.toggle('visible-theme-button')
        } else {
            moonButton.classList.toggle('hidden-theme-button');
            sunButton.classList.toggle('visible-theme-button');
        };
    };

    themeToggle() {
        const body = document.querySelector('body');
        const sunButton = document.querySelector('#sun-header-icon');
        const moonButton = document.querySelector('#moon-header-icon');
        body.classList.toggle('dark-theme');
        sunButton.classList.toggle('hidden-theme-button');
        moonButton.classList.toggle('hidden-theme-button');
        sunButton.classList.toggle('visible-theme-button');
        moonButton.classList.toggle('visible-theme-button');
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        };
    };

    determineOpenMenu() {
        const menu = document.querySelector('#container');
        const menuButtonsText = document.querySelectorAll('.menu-button-text');
        const open = localStorage.getItem('menu');
        if (open === 'true') {
            menu.classList.add('menu-open');
            menu.classList.remove('menu-close');
            menuButtonsText.forEach(button => button.classList.remove('hidden-menu-button-text'));
        } else {
            menu.classList.add('menu-close');
            menu.classList.remove('menu-open');
            menuButtonsText.forEach(button => button.classList.add('hidden-menu-button-text'));
        };
    }

    menuToggle() {
        const menu = document.querySelector('#container');
        const menuButtonsText = document.querySelectorAll('.menu-button-text');
        menu.classList.toggle('menu-open');
        menu.classList.toggle('menu-close');
        menuButtonsText.forEach(button => button.classList.toggle('hidden-menu-button-text'));

        if (menu.classList.contains('menu-open')) {
            localStorage.setItem('menu', 'true');
        } else {
            localStorage.setItem('menu', 'false');
        };

    };

    eventListeners() {
        const menuButton = document.querySelector('#menu-controls-button');
        menuButton.addEventListener('click', this.menuToggle);

        const sunButton = document.querySelector('#sun-header-icon');
        sunButton.addEventListener('click', this.themeToggle);

        const moonButton = document.querySelector('#moon-header-icon');
        moonButton.addEventListener('click', this.themeToggle);

        const logoButton = document.querySelector('#header-logo-container');
        logoButton.addEventListener('click', () => this.screensToggle('welcome'));

        const infoButton = document.querySelector('#help-header-icon');
        infoButton.addEventListener('click', () => this.screensToggle('help'));

        const settingsButton = document.querySelector('#settings-header-icon');
        settingsButton.addEventListener('click', () => this.screensToggle('settings'));

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
    };

    determineScreen() {
        const screens = document.querySelectorAll('.screen');
        const screen = localStorage.getItem('screen');
        if (screen) {
            screens.forEach(screen => screen.classList.add('screen-hidden'));
            const currentScreen = document.querySelector(`#${screen}-screen`);
            currentScreen.classList.remove('screen-hidden');
        } else {
            screens.forEach(screen => screen.classList.add('screen-hidden'));
            const currentScreen = document.querySelector('#welcome-screen');
            currentScreen.classList.remove('screen-hidden');
        };
    };

    screensToggle(screen) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.add('screen-hidden'));
        const currentScreen = document.querySelector(`#${screen}-screen`);
        currentScreen.classList.remove('screen-hidden');
        localStorage.setItem('screen', screen);
    };
};

export default DOMControl;