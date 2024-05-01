import { format, add, isWithinInterval } from 'date-fns';

/**
 * Populator class is responsible for managing tasks and projects, 
 * populating them on the screen, and handling their events.
 */
class TasksPupulator {
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
                    <h2>${task.title}</h2>
                </div>
                <div class='task-description'>
                    <h4>Description:</h4>
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
                </div>
                <div class='task-complete-button'>
                    <button>Complete</button>
                </div>
            </div>
            <div class='task-info'>
                <div class='task-id'>
                    <p>ID: ${task.taskId}</p>
                </div>
                <div class='task-project'>
                    <p>Project: <span>${task.project}<span></p>
                </div>
                <div class='task-assign-to-project'>
                    <button id="task-assign-to-project-button" class="modal-opener" data-modal='assign-task-to-project'>Assign to Project</button>
                </div>
                <div class='task-change-project'>
                    <button id='task-change-project-button' class="modal-opener" data-modal='change-task-project'>Change Project</button>
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
                    <button id='task-add-subtask-button' class="modal-opener" data-modal='add-subtask'>Add Subtask</button>
                </div>
                <div class='task-edit-subtasks-button'>
                    <button id='task-edit-subtask-button' class="modal-opener" data-modal='edit-subtask'>Edit Subtask</button>
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
                    <button id='task-add-note-button' class="modal-opener" data-modal='add-note'>Add Note</button>
                </div>
                <div class='task-edit-notes-button'>
                    <button id='task-edit-notes-button' class="modal-opener" data-modal='edit-note'>Edit Notes</button>
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
                    <button id='task-add-checklist-button' class="modal-opener" data-modal='add-checklist'>Add Checklist Item</button>
                </div>
                <div class='task-edit-checklist-button'>
                    <button id='task-edit-checklist-button' class="modal-opener" data-modal='edit-checklist'>Edit Checklist</button>
                </div>
                <div class='task-edit-button'>
                    <button id='task-edit-task-button' class="screen-changer" data-screen='edit-task'>Edit Task</button>
                </div>
                <div class='task-uncomplete-button'>
                    <button id='task-uncomplete-task-button' class="modal-opener" data-modal='uncomplete-task'>Uncomplete Task</button>
                </div>
                <div class='open-task-button'>
                    <button id='task-open-task-button' class="screen-changer" data-screen='active-task'>Open Task</button>
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
     * populateAllTasksScreen method populates the allTasks screen with tasks.
     */
    populateAllTasksScreen() {
        const allTasks = this.taskManager.tasks;
        allTasks.forEach(task => {
            if (task.completed === true) {
                return;
            };
            this.addTaskToScreen(task, 'all-tasks');
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
                </div>
                <div class='project-complete-button'>
                    <button>Complete</button>
                </div>
            </div>
            <div class='project-info'>
                <div class='project-id'>
                    <p>ID: ${project.projectId}</p>
                </div>
                <div class='project-tasks-header'>
                    <p>Tasks:</p>
                </div>
                <div class='project-tasks'>
                    <ul>
                        ${this.taskManager.tasks.map(task => {
                            if (task.project === project.title) {
                                return `<li>${task.title}</li>`;
                            };
                        }).join('')}
                    </ul>
                </div>
                <div class='project-add-task-button'>
                    <button id='project-add-task-button' class='screen-changer' data-screen='add-task'>Add Task</button>
                </div>
                <div class='project-edit-tasks-button'>
                    <button id='project-edit-task-button' class='screen-changer' data-screen='edit-task'>Edit Task</button>
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
                    <button id='project-add-notes-button' class="modal-opener" data-modal='add-note'>Add Note</button>
                </div>
                <div class='project-edit-notes-button'>
                    <button id='project-edit-notes-button' class="modal-opener" data-modal='edit-note'>Edit Notes</button>
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
                <div class='project-add-checklist-item-button'>
                    <button id='project-add-checklist-button data-modal='add-checklist' class="modal-opener">Add Checklist Item</button>
                </div>
                <div class='project-edit-checklist-button'>
                    <button id='project-edit-checklist-button' class="modal-opener" data-modal='edit-checklist'>Edit Checklist</button>
                </div>
                <div class='project-edit-button'>
                    <button id='project-edit-project-button' class="screen-changer" data-screen='edit-project'>Edit Project</button>
                </div>
                <div class='project-uncomplete-button'>
                    <button id='project-uncomplete-project-button' class="modal-opener" data-modal='uncomplete-project'>Uncomplete</button>
                </div>
                <div class='open-project-button'>
                    <button id='project-open-project-button' class="screen-changer" data-screen='active-project'>Open Project</button>
                </div>
            </div>
            `;
            projectElement.classList.add('project-body');
            document.querySelector('.projects-screen-projects-list').appendChild(projectElement);
        });
    };
};

export default TasksPupulator;