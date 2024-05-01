import Screen from './screen.js';

class CompletedScreen extends Screen {
    constructor() {
        super('completed');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class='completed-screen-container'>
            <div class='completed-screen-heading screen-heading'>
                <h1>Completed Tasks</h1>
                <img src='' alt='Add Task' id='add-task-button-icon' class='add-task-button-icon'>
            </div>
            <div class='completed-screen-text'>
                <p>Here are all the tasks you have completed, across all projects</p>
            </div>
            <div class='completed-screen-tasks'>
                <div class='completed-screen-tasks-heading'>
                    <h2>Tasks</h2>
                </div>
                <div class='completed-screen-tasks-list tasks-list'>
                </div>
            </div>
        </div>
        `;
        return screenContent;
    };
};

export default CompletedScreen;