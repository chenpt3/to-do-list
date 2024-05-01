import NavManager from './nav-manager.js';
class ScreenChange {
    constructor() {
        this.navManager = new NavManager();
        this.addEventListeners();
        this.addNavEventListeners();
        this.addCloseButtonEventListeners();
        this.loadScreen();
        this.updateNavButtons();

    };

    getButtons() {
        return document.querySelectorAll('.screen-changer');
    };

    addEventListeners() {
        const buttons = this.getButtons();
        buttons.forEach(button => {
            button.addEventListener('click', event => {
                buttons.forEach(button => {
                    button.classList.remove('active-screen-changer');
                });
                this.changeScreen(document.querySelector(`#${event.currentTarget.dataset.screen + '-screen'}`));
                event.currentTarget.classList.add('active-screen-changer');
            });
        });
    };

    changeScreen(screen, addToNav = true) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => {
            screen.classList.add('screen-hide');
            screen.classList.add('hidden');
        });
        screen.classList.remove('screen-hide');
        screen.classList.remove('hidden');
        if (addToNav) {
            this.navManager.addScreen(screen.id, screen.innerHTML);
        };
        this.saveScreen();
        this.updateNavButtons();
    };

    clearScreen() {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => {
            screen.classList.add('hidden');
        });
    };

    addNavEventListeners() {
        const returnButtons = document.querySelectorAll('.return-button-icon');
        const forwardButtons = document.querySelectorAll('.forward-button-icon');
        returnButtons.forEach(button => {
            button.addEventListener('click', this.returnEvent.bind(this));
        });
        forwardButtons.forEach(button => {
            button.addEventListener('click', this.forwardEvent.bind(this));
        });
    };

    returnEvent() {
        if (this.navManager.hasPreviousScreen()) {
            const previousScreen = this.navManager.getPreviousScreen();
            this.changeScreen(document.querySelector(`#${previousScreen.screenId}`), false);
        };
        this.updateNavButtons();
    };

    forwardEvent() {
        if (this.navManager.hasNextScreen()) {
            const nextScreen = this.navManager.getNextScreen();
            this.changeScreen(document.querySelector(`#${nextScreen.screenId}`), false);
        };
        this.updateNavButtons();
    };

    updateNavButtons() {
        const returnButtons = document.querySelectorAll('.return-button-icon');
        const forwardButtons = document.querySelectorAll('.forward-button-icon');
        if (this.navManager.hasPreviousScreen()) {
            returnButtons.forEach(button => button.classList.remove('disabled'));
        } else {
            returnButtons.forEach(button => button.classList.add('disabled'));
        };
        if (this.navManager.hasNextScreen()) {
            forwardButtons.forEach(button => button.classList.remove('disabled'));
        } else {
            forwardButtons.forEach(button => button.classList.add('disabled'));
        };
    };

    saveScreen() {
        let screen = document.querySelector('.screen:not(.hidden)');
        if (screen === null) {
            localStorage.removeItem('currentScreen');
            return;
        };
        localStorage.setItem('currentScreen', JSON.stringify(screen.id));
    };

    loadScreen() {
        const screen = JSON.parse(localStorage.getItem('currentScreen'));
        if (screen) {
            this.changeScreen(document.querySelector(`#${screen}`));
        };
    };

    addCloseButtonEventListeners() {
        const closeButtons = document.querySelectorAll('.close-button-icon');
        closeButtons.forEach(button => {
            button.addEventListener('click', this.closeScreen.bind(this));
        });
    }

    closeScreen() {
        this.clearScreen();
        this.saveScreen();
        this.updateNavButtons();
        this.navManager.clearState();
    };
};

export default ScreenChange;
