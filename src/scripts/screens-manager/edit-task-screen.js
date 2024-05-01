import Screen from './screen.js';

class EditTaskScreen extends Screen {
    constructor() {
        super('edit-task');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <h1>Welcome to the game!</h1>
        `;
        return screenContent;
    };
};

export default EditTaskScreen;