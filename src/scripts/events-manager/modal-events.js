import { extend } from 'lodash';
import closeIcon from '../../assets/close.svg';

class BaseModal {
    constructor(taskManager, buttonData) {
        this.projects = taskManager.projects;
        this.tasks = taskManager.tasks;
        this.subtasks = taskManager.subtasks;
        this.notes = taskManager.notes;
        this.checklistItems = taskManager.checklistItems;
        this.task = this.tasks.find(task => task.id === buttonData.taskId);
    };
};

class UncompleteTask extends BaseModal {
    constructor(closeIcon, buttonData, taskManager) {
        super(taskManager, buttonData);
        this.init(closeIcon);
    };
    
    init(closeIcon) {
        const modal = document.getElementById('uncomplete-task-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Uncomplete Task</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
            <div class="modal-body">
                <form id="uncomplete-task-form">
                    <div class="modal-form">
                        <h3>${this.task.title}</h3>
                    </div>
                    <div class="modal-form">
                        <button type="submit" class="uncomplete-task-submit">Uncomplete</button>
                    </div>
                </form>
            </div>
        `;
    };
};

class AssignTaskToProject extends BaseModal {
    constructor(closeIcon, buttonData, taskManager) {
        super(taskManager);
        this.task = this.tasks.find(task => task.id === buttonData.taskId);
        this.init(closeIcon, buttonData);
        this.evalProjectList();
    };

    evalProjectList() {
        const projectList = document.querySelector('.assign-project-project-list');
        projectList.innerHTML = '';
        this.projects.forEach(project => {
            if (project.title === this.task.project) {
                return;
            };
            if (project.completed === true) {
                return;
            };
            if (project.tasks.length >= 10) {
                return;
            };
            if (project.dueDate < this.task.dueDate) {
                return;
            };
            const projectItem = document.createElement('li');
            projectItem.classList.add('assign-project-project-item');
            projectItem.textContent = project.title;
            projectList.appendChild(projectItem);
        });
    };

    init(closeIcon) {
        const modal = document.getElementById('assign-task-to-project-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Assign Task to Project</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
            <div class="modal-body">
                <form id="assign-task-to-project-form">
                    <div class="modal-form-group">
                        <h3>${this.task.title}</h3>
                    </div>
                    <div class="modal-form-group">
                        <ul class="assign-project-project-list">
                        </ul>
                    </div>
                    <div class="modal-form-group">
                        <button type="submit" class="assign-project-submit">Assign</button>
                    </div>
                </form>
            </div>
        `;
    };
};

class ChangeTaskProject extends BaseModal {
    constructor(closeIcon, buttonData, taskManager) {
        super(taskManager, buttonData);
        this.init(closeIcon);
        this.evalProjectList();
    };

    evalProjectList() {
        const projectList = document.querySelector('.change-task-project-list');
        projectList.innerHTML = '';
        this.projects.forEach(project => {
            if (project.title === this.task.project) {
                return;
            };
            if (project.completed === true) {
                return;
            };
            if (project.tasks.length >= 10) {
                return;
            };
            if (project.dueDate < this.task.dueDate) {
                return;
            };
            const projectItem = document.createElement('li');
            projectItem.classList.add('change-task-project-item');
            projectItem.textContent = project.title;
            projectList.appendChild(projectItem);
        });
    };

    init(closeIcon) {
        const modal = document.getElementById('change-task-project-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Change Task Project</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
            <div class="modal-body">
                <form id="change-task-project-form">
                    <div class="modal-form-group">
                        <h3>${this.task.title}</h3>
                    </div>
                    <div class="modal-form-group">
                        <ul class="change-task-project-list">
                        </ul>
                    </div>
                    <div class="modal-form-group">
                        <button type="submit" class="change-task-project-submit">Assign</button>
                    </div>
                </form>
            </div>
        `;
    };
};

class AddSubtask extends BaseModal {
    constructor(closeIcon, buttonData, taskManager) {
        super(taskManager, buttonData);
        this.init(closeIcon);
    };

    init(closeIcon) {
        const modal = document.getElementById('add-subtask-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Add Subtask</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
            <div class="modal-body">
                <form id="add-subtask-form">
                    <div class="modal-form-group">
                        <h3>${this.task.title}</h3>
                    </div>
                    <div class="modal-form-group">
                        <input type="text" id="add-subtask-title" name="add-subtask-title" placeholder="Subtask Title">
                    </div>
                    <div class="modal-form-group">
                        <button>Add Notes</button>
                    </div>
                    <div class="modal-form-group">
                        <input type="date" id="add-subtask-due-date" name="add-subtask-due-date">
                    </div>
                    <div class="modal-form-group">
                        <button type="submit" class="add-subtask-submit">Add</button>
                    </div>
                </form>
            </div>
        `;
    };
};

class EditSubtask extends BaseModal {
    constructor(closeIcon, buttonData, taskManager) {
        super(taskManager, buttonData);
        this.init(closeIcon);
        this.evalSubtaskItems();
    };

    evalSubtaskItems() {
        const subtaskList = document.querySelector('.edit-subtask-modal-list');
        subtaskList.innerHTML = '';
        this.subtasks.forEach(subtask => {
            if (subtask.owner !== this.task.title) {
                return;
            };
            if (subtask.completed === true) {
                return;
            };
            if (subtask.dueDate < this.task.dueDate) {
                return;
            };

            const subtaskItem = document.createElement('li');
            subtaskItem.classList.add('edit-subtask-item-modal-list-item');
            subtaskItem.textContent = subtask.title;
            subtaskList.appendChild(subtaskItem);
        });
    };

    init(closeIcon) {
        const modal = document.getElementById('edit-subtask-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Edit Subtask</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
            <div class="modal-body">
                <form id="edit-subtask-form">
                    <div class="modal-form-group">
                        <h3>${this.task.title}</h3>
                    </div>
                    <div class="modal-form-group">
                        <ul class="edit-subtask-modal-list">
                        </ul>
                    </div>
                    <div class="modal-form-group">
                        <button type="submit" class="edit-subtask-submit">Edit</button>
                    </div>
                </form>
            </div>
        `;
    };
};

class AddNote extends BaseModal {
    constructor(closeIcon, buttonData, taskManager) {
        super(taskManager, buttonData);
        this.init(closeIcon);
    };

    init(closeIcon) {
        const modal = document.getElementById('add-note-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Add Note</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
            <div class="modal-body">
                <form id="add-note-form">
                    <div class="modal-form-group">
                        <h3>${this.task.title}</h3>
                    </div>
                    <div class="modal-form-group">
                        <input type="text" id="add-note-title" name="add-note-title" placeholder="Note Title">
                    </div>
                    <div class="modal-form-group">
                        <textarea id="add-note-content" name="add-note-content" placeholder="Note Content"></textarea>
                    </div>
                    <div class="modal-form-group">
                        <button type="submit" class="add-note-submit">Add</button>
                    </div>
                </form>
            </div>
        `;
    };
};

class EditNote extends BaseModal {
    constructor(closeIcon, buttonData, taskManager) {
        super(taskManager, buttonData);
        this.init(closeIcon);
        this.evalNoteItems();
    };

    evalNoteItems() {   
        const noteList = document.querySelector('.edit-note-modal-list');
        noteList.innerHTML = '';
        this.notes.forEach(note => {
            if (note.owner !== this.task.title) {
                return;
            };
            if (note.completed === true) {
                return;
            };
            if (note.dueDate < this.task.dueDate) {
                return;
            };
            const noteItem = document.createElement('li');
            noteItem.classList.add('edit-note-item-modal-list-item');
            noteItem.textContent = note.title;
            noteList.appendChild(noteItem);
        });
    };

    init(closeIcon) {
        const modal = document.getElementById('edit-note-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Edit Note</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
            <div class="modal-body">
                <form id="edit-note-form">
                    <div class="modal-form-group">
                        <h3>${this.task.title}</h3>
                    </div>
                    <div class="modal-form-group">
                        <ul class="edit-note-modal-list">
                        </ul>
                    </div>
                    <div class="modal-form-group">
                        <button type="submit" class="edit-note-submit">Edit</button>
                    </div>
                </form>
            </div>            
        `;
    };
};

class AddChecklist extends BaseModal {
    constructor(closeIcon, buttonData, taskManager) {
        super(taskManager, buttonData);
        this.init(closeIcon)
    };

    init(closeIcon) {
        const modal = document.getElementById('add-checklist-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Add Checklist</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
            <div class="modal-body">
                <form id="add-checklist-form">
                    <div class="modal-form-group">
                        <h3>${this.task.title}</h3>
                    </div>
                    <div class="modal-form-group">
                        <input type="text" id="add-checklist-item" name="add-checklist-item" placeholder="Checklist Item">
                    </div>
                    <div class="modal-form-group">
                        <button type="submit" class="add-checklist-submit">Add</button>
                    </div>
                </form>
            </div>
        `;
    };
};

class EditChecklist extends BaseModal {
    constructor(closeIcon, buttonData, taskManager) {
        super(taskManager, buttonData);
        this.init(closeIcon);
        this.evalChecklistItems(taskManager);
    };

    evalChecklistItems() {
        const checklist = document.querySelector('.edit-check-list-modal-list');
        checklist.innerHTML = '';
        this.checklistItems.forEach(item => {
            if (item.owner !== this.task.title) {
                return;
            };
            if (item.completed === true) {
                return;
            };
            if (item.dueDate < this.task.dueDate) {
                return;
            };
            const checklistItem = document.createElement('li');
            checklistItem.classList.add('edit-checklist-item-modal-list-item');
            checklistItem.textContent = item.title;
            checklist.appendChild(checklistItem);
        });
    };

    init(closeIcon) {
        const modal = document.getElementById('edit-checklist-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Edit Checklist</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
            <div class="modal-body">
                <form id="edit-checklist-form">
                    <div class="modal-form-group">
                        <h3>${this.task.title}</h3>
                    </div>
                    <div class="modal-form-group">
                        <ul class="edit-check-list-modal-list">
                        </ul>
                    </div>
                    <div class="modal-form-group">
                        <button type="submit" class="edit-checklist-submit">Edit</button>
                    </div>
                </form>
            </div>
        `;
    };
};

class ModalEvents {
    constructor(modalManager, taskManager) {
        this.closeIcon = closeIcon;
        this.taskManager = taskManager;
        this.modalManager = modalManager;
        this.addModalEvents();
    };

    addModalEvents() {
        const buttons = document.querySelectorAll('.modal-opener');
        buttons.forEach(button => {
            button.addEventListener('click', e => {
                e.stopPropagation();
                const currentModal = document.querySelector('.modal');
                if (currentModal !== null) {
                    document.body.removeChild(currentModal);
                };
                const modalName = e.target.dataset.modal;
                const modal = this.modalManager.createModal(modalName);
                this.modalManager.addModal(modal);
                this.appendModalContent(modalName, e.target.dataset);
                this.addModalCloseEvent();
                this.addModalCloseOnOutsideClick();
            });
        });
    };

    appendModalContent(modalName, buttonData) {
        const modal = document.getElementById(modalName);
        const content = document.createElement('div');
        content.classList.add('modal-content');
        content.id = `${modalName}-modal-content`;
        modal.appendChild(content);
        const newName = this.transName(modalName);
        const nameString = `new ${newName}(this.closeIcon, buttonData, this.taskManager)`;
        const newModal = eval(nameString);
    };

    addModalCloseEvent() {
        const closeButton = document.querySelector('.modal-closer');
        closeButton.addEventListener('click', () => {
            const modal = document.querySelector('.modal');
            document.body.removeChild(modal);
        });
    };

    addModalCloseOnOutsideClick() {
        const modal = document.querySelector('.modal');
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            };
        });
    };

    transName(modalName) {
        const objectName = modalName.split('-').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join('');
        return objectName;
    };
};

export default ModalEvents;