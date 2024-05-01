import Screen from './screen.js';

class AddProjectScreen extends Screen {
    constructor() {
        super('add-project');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <h1>Welcome to the game!</h1>
        `;
        return screenContent;
    };
};

export default AddProjectScreen;