import Screen from './screen.js';

class EditProjectScreen extends Screen {
    constructor() {
        super('edit-project');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <h1>Welcome to the game!</h1>
        `;
        return screenContent;
    };
};

export default EditProjectScreen;