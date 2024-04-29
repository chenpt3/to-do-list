class ModalsManager {
    constructor() {
        this.modals = this.getModals();
    };

    getModals() {
        const confirmModal = document.getElementById('confirm-modal-content');
        const settingsModal = document.getElementById('settings-modal-content');
        const saveModal = document.getElementById('save-modal-content');
        const infoModal = document.getElementById('info-modal-content');
        const profileModal = document.getElementById('profile-modal-content');
        const addProjectModal = document.getElementById('addProject-modal-content');
        const addTaskModal = document.getElementById('addTask-modal-content');
        const addSubtaskModal = document.getElementById('addSubtask-modal-content');
        const addNoteModal = document.getElementById('addNote-modal-content');
        const editTask = document.getElementById('editTask-modal-content');

        return {
            confirmModal,
            settingsModal,
            saveModal,
            infoModal,
            profileModal,
            addProjectModal,
            addTaskModal,
            addSubtaskModal,
            addNoteModal,
            editTask
        };
    };

    createAddTaskModal() {
        this.modals.addTaskModal.innerHTML = `
            <form id="add-task-form" class="modal-form">
                <input type="text" id="task-name" class="modal-input" placeholder="Task name" required>
                <input type="text" id="task-description" class="modal-input" placeholder="Task description">
                <input type="date" id="task-due-date" class="modal-input" placeholder="Due date">
                <input type="time" id="task-due-time" class="modal-input" placeholder="Due time">
                <button type="submit" class="modal-button">Add Task</button>
            </form>
        `;
    };
};

export { ModalsManager };