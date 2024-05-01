import Screen from './screen.js';
import returnIcon from '../../assets/return.svg';
import forwardIcon from '../../assets/forward.svg';
import closeIcon from '../../assets/close.svg';
import addProject from '../../assets/add-project.svg';
import addTask from '../../assets/add-task.svg';
import changeProject from '../../assets/projects.svg';

class AddTaskScreen extends Screen {
    constructor() {
        super('add-task');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class="screen-header">
            <div class="nav-buttons">
                <img src='${returnIcon}' alt='Return' class='return-button-icon screen-'>
                <img src='${forwardIcon}' alt='Forward' class='forward-button-icon'>
            </div>
            <div class="screen-title">
                <h1>Add Task</h1>
            </div>
            <div class="screen-actions">
                <img src='${closeIcon}' alt='Close' class='close-button-icon'>
            </div>
        </div>
        <div id='add-task-screen-content' class="screen-content">
            <form class="add-task-form">
                <div class="form-group title-form-group">
                    <label for="task-title">Title</label>
                    <input type="text" name="task-title" required>
                </div>
                <div class="form-group description-form-group">    
                    <label for="task-description">Description</label>
                    <textarea name="task-description" required></textarea>
                </div>
                <div class="form-group due-date-form-group">
                    <label for="task-due-date">Due Date</label>
                    <input type="date" name="task-due-date" required>
                </div>
                <div class="form-group priority-form-group">
                    <div class="custom-select">
                        <label for="task-priority">Priority</label>
                        <select name="task-priority">
                            <option value="Low">Low</option>
                            <option value="Normal" selected>Normal</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>
                <div class="form-group project-assign-form-group">
                    <div class="add-task-project">
                        <p>Project</p>
                        <p>No Project</p>
                    </div>
                    <div class="project-buttons" class="form-group">
                        <img src='${addProject}' alt='Add Task' class='add-project-button-icon'>
                        <img src='${changeProject}' alt='Add Task' class='change-project-button-icon'>
                    </div>
                </div>
                <div class="form-group subtasks-form-group">
                    <div class="add-task-subtasks-container">Subtasks</div>
                    <img src='${addTask}' alt='Add Task' class='add-subtask-button-icon'>
                </div>
                <div class="form-group notes-form-group">
                    <div class="add-task-note-container">Notes</div>
                    <img src='${addTask}' alt='Add Task' class='add-note-button-icon'>
                </div>
                <div class="form-group checklist-form-group">
                    <div class="add-task-checklist-container">Checklist</div>
                    <img src='${addTask}' alt='Add Task' class='add-checklist-button-icon'>
                </div>
                <div class="form-group add-task-submit-button">
                    <button type="submit" class='add-task-submit'>Add Task</button>
                </div>
                <div class="form-group add-task-clear-button">
                    <button type="reset" class='add-task-clear'>Clear Form</button>
                </div>
            </form>
        </div>
        `;
        // title, description, dueDate, priority, project, subtasks, notes, checklist
        return screenContent;
    };
};

export default AddTaskScreen;