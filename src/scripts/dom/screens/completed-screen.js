import { addTaskIcon } from "../../../assets/images/images";

class completedScreen {
    constructor() {
        this.renderScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class='completed-screen-container'>
            <div class='completed-screen-heading screen-heading'>
                <h1>Completed Tasks</h1>
                <img src=${addTaskIcon} alt='Add Task' id='add-task-button-icon' class='add-task-button-icon'>
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

    renderScreenContent() {
        const screen = document.querySelector('#completed-screen');
        screen.innerHTML = this.getScreenContent();
    };
};

export { completedScreen };