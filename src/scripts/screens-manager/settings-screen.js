import Screen from './screen.js';

class SettingsScreen extends Screen {
    constructor() {
        super('settings');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <h1>Welcome to the game!</h1>
        `;
        return screenContent;
    };
};

export default SettingsScreen;