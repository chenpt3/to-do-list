import { addTaskIcon } from "../../../assets/images/images";
class allTasksScreen {
    constructor() {
        this.renderScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class='allTasks-screen-container'>
            <div class='allTasks-screen-heading screen-heading'>
                <h1>All Tasks</h1>
                <img src=${addTaskIcon} alt='Add Task' id='add-task-button-icon' class='add-task-button-icon'>
            </div>
            <div class='allTasks-screen-text'>
                <p>Here are all the tasks you have created, across all projects</p>
                <p>Click on a task to view its details, or to edit or delete it</p>
            </div>
            <div class='allTasks-screen-tasks'>
                <div class='allTasks-screen-tasks-heading'>
                    <h2>Tasks</h2>
                </div>
                <div class='allTasks-screen-tasks-list tasks-list'>
                </div>
            </div>
        </div>
        `;
        return screenContent;
    };

    renderScreenContent() {
        const screen = document.querySelector('#allTasks-screen');
        screen.innerHTML = this.getScreenContent();
    };
};

export { allTasksScreen };