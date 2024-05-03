import Screen from './screen.js';
import returnIcon from '../../assets/return.svg';
import forwardIcon from '../../assets/forward.svg';
import closeIcon from '../../assets/close.svg';


class ActiveTaskScreen extends Screen {
    constructor() {
        super('active-task');
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
                <h1>Active Task</h1>
            </div>
            <div class="screen-actions">
                <img src='${closeIcon}' alt='Close' id='close-button-icon' class='close-button-icon'>
            </div>
        </div>
        <div id='active-task-screen-content' class="screen-content">
            <div class="active-task">
                <div class="active-task-title">
                    <h2>Task Title</h2>
                </div>
                <div class="active-task-description">
                    <p>Task Description</p>
                </div>
                <div class="active-task-due-date">
                    <p>Due Date</p>
                </div>
                <div class="active-task-due-in">
                    <p>Due in</p>
                </div>
                <div class="active-task-priority">
                    <p>Priority</p>
                </div>
                <div class="active-task-project">
                    <p>Project</p>
                </div>
                <div class="active-task-status">
                    <p>Status</p>
                </div>
                <div class="active-task-created-at">
                    <p>Created at</p>
                </div>
                <div class="active-task-updated-at">
                    <p>Updated at</p>
                </div>
                <div class="active-task-subtasks">
                    <p>Subtasks</p>
                </div>
                <div class="active-task-notes">
                    <p>Notes</p>
                </div>
                <div class="active-task-checklist">
                    <p>Checklist</p>
                </div>
                <div class="active-task-actions">
                    <button class="complete-task-button">Complete Task</button>
                    <button class="uncomplete-task-button">Uncomplete Task</button>
                    <button class="edit-task-button">Edit Task</button>
                    <button class="delete-task-button">Delete Task</button>
                    <button class="restore-task-button">Restore Task</button>
                    <button class="freeze-task-button">Freeze Task</button>
                    <button class="unfreeze-task-button">Unfreeze Task</button>
            </div>
        `;
        return screenContent;
    };
};

export default ActiveTaskScreen;