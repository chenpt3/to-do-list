import Screen from './screen.js';
import addTaskButton from '../../assets/add-task.svg';
import returnIcon from '../../assets/return.svg';
import forwardIcon from '../../assets/forward.svg';
import closeIcon from '../../assets/close.svg';

class ThisWeekScreen extends Screen {
    constructor() {
        super('this-week');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class="screen-header">
            <div class="nav-buttons">
                <img src='${returnIcon}' alt='Return' id='return-button-icon' class='return-button-icon screen-'>
                <img src='${forwardIcon}' alt='Forward' id='forward-button-icon' class='forward-button-icon'>
            </div>
            <div class="screen-title">
                <h1>Important Tasks</h1>
            </div>
            <div class="screen-actions">
                <img src='${addTaskButton}' alt='Add Task' id='add-task-button-icon' class='add-task-button-icon screen-changer' data-screen='add-task'>
                <img src='${closeIcon}' alt='Close' id='close-button-icon' class='close-button-icon'>
            </div>
        </div>
        <div class='allTasks-screen-heading screen-heading'>
            <h1>All Tasks</h1>
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
        `;
        return screenContent;
    };
};

export default ThisWeekScreen;