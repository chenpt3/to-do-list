import { TaskManager } from './tasks-manager.js';
import DOMControl from './dom/dom-action-init.js';

class Populator {
    constructor() {
        this.taskManager = new TaskManager();
        this.taskManager.populateTaskManager();
        this.domControl = new DOMControl();
        this.populateScreens();
    };

    populateScreens() {
        this.populateAllTasksScreen();
    };

    addTaskToScreen(task, screenName) {
        const screen = document.querySelector(`#${screenName}-screen`);
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `
            <div class='task-group'>
                <div class='task-header'>
                    <div class='task-title'>
                        <h3>${task.title}</h3>
                    </div>
                    <div class='task-description'>
                        <p>${task.description}</p>
                    </div>
                </div>
                <div class='task-stats'>
                    <div class='task-stat due-date-stats'>
                        <p class='task-stat-title'>Due Date:</p>
                        <p class='task-stat'>${task.dueDate}</p>
                    </div>
                    <div class='task-stat priority-stats'>
                        <p class='task-stat-title'>Priority:</p>
                        <p class='task-stat'>${task.priority}</p>
                    </div>
                </div>
                <div class='task-project'>
                    <p class='task-stat-title'>Project:</p>
                    <p class='task-stat'>${task.project}</p>
                </div>
            </div>
            <div class='task-actions'>
                <div class='task-action subtasks-stats'>
                    <p class='task-stat-title'>Subtasks:</p>
                    <p class='task-stat'>${task.subtasks}</p>
                </div>
                <div class='task-action notes-stats'>
                    <p class='task-stat-title'>Notes:</p>
                    <p class='task-stat'>${task.notes}</p>
                </div>
            </div>
            <div class='task-buttons'>
                <button class='edit-task-button'>Edit</button>
                <button class='complete-task-button'>Complete</button>
            </div>
        `;
        taskElement.classList.add(`task-body`);
        screen.querySelector(`.${screenName}-screen-tasks-list`).appendChild(taskElement);
        screen.querySelector(`.${screenName}-screen-tasks-list`).classList.add('task-list');
    }; 

    populateAllTasksScreen() {
        const allTasks = this.taskManager.tasks;
        allTasks.forEach(task => {
            this.addTaskToScreen(task, 'allTasks');
        });
    };
};

class AdminControl {
    constructor() {
        this.populator = new Populator();
    };
};

export default AdminControl;