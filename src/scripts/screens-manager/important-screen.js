import Screen from './screen.js';

class ImportantScreen extends Screen {
    constructor() {
        super('important');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class='important-screen-container'>
            <div class='allTasks-screen-heading screen-heading'>
                <h1>All Tasks</h1>
                <img src='' alt='Add Task' id='add-task-button-icon' class='add-task-button-icon'>
            </div>
            <div class='important-screen-text'>
                <p>Here are all your important tasks, across all projects</p>
            </div>
            <div class='important-screen-tasks'>
                <div class='important-screen-tasks-heading'>
                    <h2>Tasks</h2>
                </div>
                <div class='important-screen-tasks-list tasks-list'>
                </div>
            </div>
        </div>
        `;
        return screenContent;
    };
};

export default ImportantScreen;