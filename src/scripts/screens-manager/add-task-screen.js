import Screen from './screen.js';

class AddTaskScreen extends Screen {
    constructor() {
        super('add-task');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <h1>Welcome to the game!</h1>
        `;
        return screenContent;
    };
};

export default AddTaskScreen;