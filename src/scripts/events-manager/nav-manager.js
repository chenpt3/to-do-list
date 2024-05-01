// A Class to manage the navigation history of the app
// Two buttons, previous and next, will be added to the app to navigate through the history
// The previous button will be disabled if there is no history
// The next button will be disabled if there is no future
// If the user navigates to a new screen while in the middle of the history, the future will be cleared
// The history will be stored in the NavManager class
// To add a screen to the history, the addScreen method will be called, passing the screen id and the screen innerHTML
class NavManager {
    constructor() {
        this.stack = [];
        this.current = -1;
        this.maxHistory = 30;
        this.loadState();
    };

    addScreen(screenId, screenHTML) {
        // If the new screen is the same as the current screen, do nothing
        if (this.stack[this.current] && this.stack[this.current].screenId === screenId) {
            return;
        }

        // Remove any screens in the future when adding a new screen
        this.stack = this.stack.slice(0, this.current + 1);
        this.stack.push({ screenId, screenHTML });
        this.current++;

        if (this.stack.length > this.maxHistory) {
            this.stack.shift();
            this.current--;
        };

        this.saveState();
    };

    getPreviousScreen() {
        if (this.hasPreviousScreen()) {
            this.current--;
        }
        return this.stack[this.current];
    };
    
    getNextScreen() {
        if (this.hasNextScreen()) {
            this.current++;
        }
        return this.stack[this.current];
    };

    hasPreviousScreen() {
        return this.current > 0;
    };

    hasNextScreen() {
        return this.current < this.stack.length - 1;
    };

    saveState() {
        localStorage.setItem('navManager', JSON.stringify(this));
    };

    loadState() {
        const navManager = JSON.parse(localStorage.getItem('navManager'));
        if (navManager) {
            this.stack = navManager.stack;
            this.current = navManager.current;
        };
    };

    clearState() {
        localStorage.removeItem('navManager');
        this.stack = [];
        this.current = -1;
    };
};

export default NavManager;