import Screen from './screen.js';

class AllTasksScreen extends Screen {
    constructor() {
        super('all-tasks');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class='allTasks-screen-container'>
            <div class='allTasks-screen-heading screen-heading'>
                <h1>All Tasks</h1>
                <img src='' alt='Add Task' id='add-task-button-icon' class='add-task-button-icon'>
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
};

export default AllTasksScreen;