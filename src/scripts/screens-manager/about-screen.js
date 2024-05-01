import Screen from './screen.js';

class AboutScreen extends Screen {
    constructor() {
        super('about');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <h1>Welcome to the game!</h1>
        `;
        return screenContent;
    };
};

export default AboutScreen;