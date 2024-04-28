import { Screens } from "./screens/screens.js";

class ScreensManager {
    constructor() {
        this.screensContent = new Screens();
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

export { ScreensManager };