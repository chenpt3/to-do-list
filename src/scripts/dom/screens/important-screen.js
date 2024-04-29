import { addTaskIcon } from "../../../assets/images/images";

class importantScreen {
    constructor() {
        this.renderScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class='important-screen-container'>
            <div class='allTasks-screen-heading screen-heading'>
                <h1>All Tasks</h1>
                <img src=${addTaskIcon} alt='Add Task' id='add-task-button-icon' class='add-task-button-icon'>
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

    renderScreenContent() {
        const screen = document.querySelector('#important-screen');
        screen.innerHTML = this.getScreenContent();
    };
};

export { importantScreen };