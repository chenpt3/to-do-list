import Screen from './screen.js';

class HelpScreen extends Screen {
    constructor() {
        super('help');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <h1>Welcome to the game!</h1>
        `;
        return screenContent;
    };
};

export default HelpScreen;