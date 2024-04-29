import { addTaskIcon } from "../../../assets/images/images";

class todayScreen {
    constructor() {
        this.renderScreenContent();
    };

    getScreenContent() {
        const screenContent = `
            <div class='today-screen-container'>
                <div class='today-screen-heading screen-heading'>
                    <h1>Today's Tasks</h1>
                    <img src=${addTaskIcon} alt='Add Task' id='add-task-button-icon' class='add-task-button-icon'>
                </div>
                <div class='today-screen-text'>
                    <p>Here are all the tasks that are due in today, across all projects</p>
                </div>
                <div class='today-screen-tasks'>
                    <div class='today-screen-tasks-heading'>
                        <h2>Tasks</h2>
                    </div>
                    <div class='today-screen-tasks-list tasks-list'>
                    </div>
                </div>
            </div>
        `;
        return screenContent;
    };

    renderScreenContent() {
        const screen = document.querySelector('#today-screen');
        screen.innerHTML = this.getScreenContent();
    };
};

export { todayScreen };