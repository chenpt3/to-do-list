import Screen from './screen.js';
import addTaskButton from '../../assets/add-task.svg';
import returnIcon from '../../assets/return.svg';
import forwardIcon from '../../assets/forward.svg';
import closeIcon from '../../assets/close.svg';

class CompletedScreen extends Screen {
    constructor() {
        super('completed');
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
                <h1>Completed Tasks and Projects</h1>
            </div>
            <div class="screen-actions">
                <img src='${addTaskButton}' alt='Add Task' id='add-task-button-icon' class='add-task-button-icon screen-changer' data-screen='add-task'>
                <img src='${closeIcon}' alt='Close' id='close-button-icon' class='close-button-icon'>
            </div>
        </div>
        <div class='completed-screen-heading screen-heading'>
            <h1>Completed Tasks</h1>
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
        `;
        return screenContent;
    };
};

export default CompletedScreen;