import { format, add, isWithinInterval } from 'date-fns';

/**
 * Populator class is responsible for managing tasks and projects, 
 * populating them on the screen, and handling their events.
 */
class TasksAppender {
    /**
     * Constructor initializes the task manager and DOM control, 
     * and populates the screens.
     */
    constructor(taskManager) {
        this.taskManager = taskManager;
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
        const subtasks = this.taskManager.subtasks;
        const notes = this.taskManager.notes;
        const checklist = this.taskManager.checklistItems;
        const screen = document.querySelector(`#${screenName}-screen`);
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `
            <div class='task-header'>
                <div class='task-title'>
                    <h3>${task.title}</h3>
                </div>
                <div class='task-description'>
                    <p>${task.description}</p>
                </div>
                <div class='task-status'>
                    <p>Status: ${task.status}</p>
                </div>
                <div class='task-priority'>
                    <p>Priority: ${task.priority}</p>
                </div>
                <div class='task-due-in'>
                    <p>Due in: ${task.dueIn > 0 ? `${task.dueIn} days` : task.dueIn === 0 ? 'Today' : `Overdue by ${Math.abs(task.dueIn)} days`}</p>
                </div>
                <div class='task-due-date'>
                    <p>Due Date: ${
                        task.dueDate.getDate() < 10 ? `0${task.dueDate.getDate()}` : task.dueDate.getDate()}/${
                        task.dueDate.getMonth() < 9 ? `0${task.dueDate.getMonth() + 1}` : task.dueDate.getMonth() + 1}/${
                        task.dueDate.getFullYear()
                    }</p>
                </div<
            </div>
            <div class='task-body hidden'>
                <div class='task-id'>
                    <p>ID: ${task.taskId}</p>
                </div>
                <div class='task-project'>
                    <p>Project: <span>${task.project}<span></p>
                </div>
                <div class='task-assign-to-project'>
                    <button>Assign to Project</button>
                </div>
                <div class='task-change-project hidden'>
                    <button>Change Project</button>
                </div>
                <div class='task-subtasks'>
                    <ul> Subtasks:
                        ${subtasks.map(subtask => {
                            if (subtask.owner === task.title) {
                                return `<li>${subtask.title}</li>`;
                            };
                        }).join('')}
                    </ul>
                </div>
                <div class='task-add-subtask-button'>
                    <button>Add Subtask</button>
                </div>
                <div class='task-notes'>
                    <ul> Notes:
                        ${notes.map(note => {
                            if (note.owner === task.title) {
                                return `<li>${note.title}</li>`;
                            };
                        }).join('')}
                    </ul>
                </div>
                <div class='task-add-note-button'>
                    <button>Add Note</button>
                </div>
                <div class='task-checklist'>
                    <ul> Checklist:
                        ${checklist.map(item => {
                            if (item.owner === task.title) {
                                return `<li>${item.title}</li>`;
                            };
                        }).join('')}
                    </ul>
                </div>
                <div class='task-add-checklist-item-button'>
                    <button>Add Checklist Item</button>
                </div>
                <div class='task-edit-button'>
                    <button>Edit</button>
                </div>
                <div class='task-complete-button'>
                    <button>Complete</button>
                </div>
                <div class='task-reopen-button hidden'>
                    <button>Reopen</button>
                </div>
            </div>
        `;
        taskElement.classList.add(`task-body`);
        document.querySelector(`.${screenName}-screen-tasks-list`).appendChild(taskElement);
        document.querySelector(`.${screenName}-screen-tasks-list`).classList.add('task-list');
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
            <div class='project-header'>
                <div class='project-title'>
                    <h3>${project.title}</h3>
                </div>
                <div class='project-description'>
                    <p>${project.description}</p>
                </div>
                <div class='project-status'>
                    <p>Status: ${project.status}</p>
                </div>
                <div class='project-priority'>
                    <p>Priority: ${project.priority}</p>
                </div>
                <div class='project-due-in'>
                    <p>Due in: ${project.dueIn > 0 ? `${project.dueIn} days` : project.dueIn === 0 ? 'Today' : `Overdue by ${Math.abs(project.dueIn)} days`}</p>
                </div>
                <div class='project-due-date'>
                    <p>Due Date: ${
                        project.dueDate.getDate() < 10 ? `0${project.dueDate.getDate()}` : project.dueDate.getDate()}/${
                        project.dueDate.getMonth() < 9 ? `0${project.dueDate.getMonth() + 1}` : project.dueDate.getMonth() + 1}/${
                        project.dueDate.getFullYear()
                    }</p>
                </div<
            </div>
            <div class='project-body'>
                <div class='project-id'>
                    <p>ID: ${project.projectId}</p>
                </div>
                <div class='project-tasks'>
                    <ul> Tasks:
                        ${this.taskManager.tasks.map(task => {
                            if (task.project === project.title) {
                                return `<li>${task.title}</li>`;
                            };
                        }).join('')}
                    </ul>
                </div>
                <div class='project-add-task-button'>
                    <button>Add Task</button>
                </div>
                <div class='project-notes'>
                    <ul> Notes:
                        ${this.taskManager.notes.map(note => {
                            if (note.owner === project.title) {
                                return `<li>${note.title}</li>`;
                            };
                        }).join('')}
                    </ul>
                </div>
                <div class='project-add-note-button'>
                    <button>Add Note</button>
                </div>
                <div class='project-checklist'>
                    <ul> Checklist:
                        ${this.taskManager.checklistItems.map(item => {
                            if (item.owner === project.title) {
                                return `<li>${item.title}</li>`;
                            };
                        }).join('')}
                    </ul>
                </div>
                <div class='project-edit-button'>
                    <button>Edit</button>
                </div>
                <div class='project-complete-button'>
                    <button>Complete</button>
                </div>
                <div class='project-reopen-button hidden'>
                    <button>Reopen</button>
                </div>
            </div>
            `;
            projectElement.classList.add('project-body');
            document.querySelector('.projects-screen-projects-list').appendChild(projectElement);
        });
    };
};

export default TasksAppender;