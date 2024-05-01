import Screen from './screen.js';

class ForTodayScreen extends Screen {
    constructor() {
        super('for-today');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
            <div class='today-screen-container'>
                <div class='today-screen-heading screen-heading'>
                    <h1>Today's Tasks</h1>
                    <img src='' alt='Add Task' id='add-task-button-icon' class='add-task-button-icon'>
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
};

export default ForTodayScreen;