import Screen from './screen.js';

class ActiveProjectScreen extends Screen {
    constructor() {
        super('active-project');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <h1>Welcome to the game!</h1>
        `;
        return screenContent;
    };
};

export default ActiveProjectScreen;