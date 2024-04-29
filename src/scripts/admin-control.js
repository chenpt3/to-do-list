import { TaskManager } from './tasks-manager.js';
import DOMControl from './dom/dom-action-init.js';
import { add, format, isWithinInterval } from 'date-fns';

/**
 * Populator class is responsible for managing tasks and projects, 
 * populating them on the screen, and handling their events.
 */
class Populator {
    /**
     * Constructor initializes the task manager and DOM control, 
     * and populates the screens.
     */
    constructor() {
        this.taskManager = new TaskManager();
        this.domControl = new DOMControl();
        this.populateScreens();
    };

    /**
     * populateScreens method clears all screens and populates them with tasks and projects.
     */
    populateScreens() {
        this.clearAllScreensTasks();
        this.clearAllScreensProjects();
        this.populateAllTasksScreen();
        this.populateTodayScreen();
        this.populateWeekScreen();
        this.populateImportantScreen();
        this.populateCompletedScreen();
        this.populateAllProjectsScreen();
        this.addEventListeners();
    };

    /**
     * addTaskToScreen method adds a task to a specific screen.
     * @param {Object} task - The task object to be added.
     * @param {string} screenName - The name of the screen where the task will be added.
     */
    addTaskToScreen(task, screenName) {
        const screen = document.querySelector(`#${screenName}-screen`);
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `
            <div class='task-header'>
                <h3>${task.title}</h3>
                <p>Due Date: ${format(task.dueDate, 'dd-MM-yyyy')}</p>
            </div>
            <div class='task-stats'>
                <div class='task-stat project-stat'>
                    <p class='task-stat-title'>Project:</p>
                    <p class='task-stat'>${task.project}</p>
                </div>
                <div class='task-stat priority-stat'>
                    <p class='task-stat-title'>Priority:</p>
                    <p class='task-stat'>${task.priority}</p>
                </div>
                <div class='task-stat description-stat'>
                    <p class='task-stat-title'>Description:</p>
                    <p class'task-stat>${task.description}</p>
                </div>
            </div>
            <div class='task-actions'>
                <div class='task-action subtasks-stat'>
                    <p class='task-stat-title'>Subtasks:</p>
                    <p class='task-stat'>${task.subtasks}</p>
                </div>
                <div class='task-action notes-stat'>
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

    /**
     * clearAllScreensTasks method clears all tasks from all screens.
     */
    clearAllScreensTasks() {
        const lists = document.querySelectorAll('.tasks-list');
        lists.forEach(list => {
            list.innerHTML = '';
        });
    };

    /**
     * clearAllScreensProjects method clears all projects from all screens.
     */
    clearAllScreensProjects() {
        const lists = document.querySelectorAll('.screen-projects-list');
        lists.forEach(list => {
            list.innerHTML = '';
        });
    };

    /**
     * addEventListeners method adds event listeners to the task and project buttons.
     */
    addEventListeners() {
        const editTaskButtons = document.querySelectorAll('.edit-task-button');
        const completeTaskButtons = document.querySelectorAll('.complete-task-button');
        editTaskButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const taskDiv = e.target.parentElement.parentElement.childNodes[1].childNodes[1].innerText;
                this.taskManager.getTaskByTitle(taskDiv);
                this.domControl.editTaskForm();
            });
        });
        completeTaskButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const taskDiv = e.target.parentElement.parentElement.childNodes[1].childNodes[1].innerText;
                this.taskManager.getTaskByTitle(taskDiv).completed = true;
                this.populateScreens();
            });
        });

        const editProjectButtons = document.querySelectorAll('.edit-project-button');
        const completeProjectButtons = document.querySelectorAll('.complete-project-button');
        editProjectButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const projectDiv = e.target.parentElement.parentElement.childNodes[1].childNodes[1].innerText;
                this.taskManager.getProjectByTitle(projectDiv);
                this.domControl.editProjectForm();
            });
        });
        completeProjectButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const projectDiv = e.target.parentElement.parentElement.childNodes[1].childNodes[1].innerText;
                this.taskManager.getProjectByTitle(projectDiv).completed = true;
                this.populateScreens();
            });
        });
    };

    /**
     * populateAllTasksScreen method populates the allTasks screen with tasks.
     */
    populateAllTasksScreen() {
        const allTasks = this.taskManager.tasks;
        allTasks.forEach(task => {
            if (task.completed === true) {
                return;
            };
            this.addTaskToScreen(task, 'allTasks');
        });
    };

    /**
     * populateTodayScreen method populates the today screen with tasks due today.
     */
    populateTodayScreen() {
        const todayTasks = this.taskManager.tasks.filter(task => {
            const todayDate = new Date();
            const taskDate = new Date(task.dueDate);
            return format(todayDate, 'MM/dd/yyyy') === format(taskDate, 'MM/dd/yyyy');
        });
        todayTasks.forEach(task => {
            if (task.completed === true) {
                return;
            };
            this.addTaskToScreen(task, 'today');
        });
    };

    /**
     * populateWeekScreen method populates the week screen with tasks due this week.
     */
    populateWeekScreen() {
        const weekTasks = this.taskManager.tasks.filter(task => {
            const todayDate = new Date();
            const weekDate = add(todayDate, { days: 7 });
            todayDate.setHours(0, 0, 0, 0);
            weekDate.setHours(0, 0, 0, 0);
            task.dueDate.setHours(0, 0, 0, 0);
            return isWithinInterval(task.dueDate, { start: todayDate, end: weekDate });
        });
        weekTasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime()); // Sort tasks by dueDate
        weekTasks.forEach(task => {
            if (task.completed === true) {
                return;
            };
            this.addTaskToScreen(task, 'week');
        });
    };

    /**
     * populateImportantScreen method populates the important screen with high priority tasks.
     */
    populateImportantScreen() {
        const importantTasks = this.taskManager.tasks.filter(task => task.priority === 'High');
        importantTasks.forEach(task => {
            if (task.completed === true) {
                return;
            };
            this.addTaskToScreen(task, 'important');
        });
    };

    /**
     * populateCompletedScreen method populates the completed screen with completed tasks.
     */
    populateCompletedScreen() {
        const completedTasks = this.taskManager.tasks.filter(task => task.completed === true);
        completedTasks.forEach(task => {
            this.addTaskToScreen(task, 'completed');
        });
    };

    /**
     * populateAllProjectsScreen method populates the allProjects screen with open projects.
     */
    populateAllProjectsScreen() {
        const openProjects = this.taskManager.projects.filter(project => project.completed !== true);
        const projectsScreen = document.querySelector('#allProjects-screen');
        openProjects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.innerHTML = `
            <div class='task-header'>
                <h3>${project.title}</h3>
                <p>Due Date: ${format(project.dueDate, 'dd-MM-yyyy')}</p>
            </div>
            <div class='task-stats'>
                <div class='task-stat priority-stat'>
                    <p class='task-stat-title'>Priority:</p>
                    <p class='task-stat'>${project.priority}</p>
                </div>
                <div class='task-stat description-stat'>
                    <p class='task-stat-title'>Description:</p>
                    <p class'task-stat>${project.description}</p>
                </div>
            </div>
            <div class='task-actions'>
                <div class='task-action subtasks-stat'>
                    <p class='task-stat-title'>Subtasks:</p>
                    <p class='task-stat'>${project.subtasks}</p>
                </div>
                <div class='task-action notes-stat'>
                    <p class='task-stat-title'>Notes:</p>
                    <p class='task-stat'>${project.notes}</p>
                </div>
            </div>
            <div class='task-buttons'>
                <button class='edit-project-button'>Edit</button>
                <button class='complete-project-button'>Complete</button>
            </div>
            `;
            projectElement.classList.add('project-body');
            projectsScreen.querySelector('.projects-screen-projects-list').appendChild(projectElement);
        });
    };
};

/**
 * AdminControl class is responsible for managing the administrative control of the application.
 * It initializes the Populator object which manages tasks and projects, populates them on the screen, and handles their events.
 */
class AdminControl {
    /**
     * Constructor initializes the Populator object.
     */
    constructor() {
        this.populator = new Populator();
    };
};

export default AdminControl;