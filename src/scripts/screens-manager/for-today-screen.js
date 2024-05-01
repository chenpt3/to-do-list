import Screen from './screen.js';
import addTaskButton from '../../assets/add-task.svg';
import returnIcon from '../../assets/return.svg';
import forwardIcon from '../../assets/forward.svg';
import closeIcon from '../../assets/close.svg';

class ForTodayScreen extends Screen {
    constructor() {
        super('for-today');
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
                <h1>Due Today</h1>
            </div>
            <div class="screen-actions">
                <img src='${addTaskButton}' alt='Add Task' id='add-task-button-icon' class='add-task-button-icon screen-changer' data-screen='add-task'>
                <img src='${closeIcon}' alt='Close' id='close-button-icon' class='close-button-icon'>
            </div>
        </div>
        <div class='today-screen-heading screen-heading'>
            <h1>Today's Tasks</h1>
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
        `;
        return screenContent;
    };
};

export default ForTodayScreen;