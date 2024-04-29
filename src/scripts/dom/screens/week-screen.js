
import { addTaskIcon } from "../../../assets/images/images";
class weekScreen {
    constructor() {
        this.renderScreenContent();
    };

    getScreenContent() {
        const screenContent = `
            <div class='week-screen-container'>
                <div class='allTasks-screen-heading screen-heading'>
                    <h1>All Tasks</h1>
                    <img src=${addTaskIcon} alt='Add Task' id='add-task-button-icon' class='add-task-button-icon'>
                </div>
                <div class='week-screen-text'>
                    <p>Here are all the tasks that are due in this week, across all projects</p>
                </div>
                <div class='week-screen-tasks'>
                    <div class='week-screen-tasks-heading'>
                        <h2>Tasks</h2>
                    </div>
                    <div class='week-screen-tasks-list tasks-list'>
                </div>
            </div>
        `;
        return screenContent;
    };

    renderScreenContent() {
        const screen = document.querySelector('#week-screen');
        screen.innerHTML = this.getScreenContent();
    };
};

export { weekScreen };