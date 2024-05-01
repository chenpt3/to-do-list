import closeIcon from '../../assets/close.svg';

class AssignTaskToProject {
    constructor(closeIcon) {
        this.init(closeIcon)
    };

    init(closeIcon) {
        const modal = document.getElementById('assign-task-to-project-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Assign Task to Project</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
        `;
    };
};

class ChangeTaskProject {
    constructor(closeIcon) {
        this.init(closeIcon)
    };

    init(closeIcon) {
        const modal = document.getElementById('change-task-project-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Change Task Project</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
        `;
    };
};

class AddSubtask {
    constructor(closeIcon) {
        this.init(closeIcon)
    };

    init(closeIcon) {
        const modal = document.getElementById('add-subtask-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Add Subtask</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
        `;
    };
};

class EditSubtask {
    constructor(closeIcon) {
        this.init(closeIcon)
    };

    init(closeIcon) {
        const modal = document.getElementById('edit-subtask-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Edit Subtask</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
        `;
    };
};

class AddNote {
    constructor(closeIcon) {
        this.init(closeIcon)
    };

    init(closeIcon) {
        const modal = document.getElementById('add-note-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Add Note</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
        `;
    };
};

class EditNote {
    constructor(closeIcon) {
        this.init(closeIcon)
    };

    init(closeIcon) {
        const modal = document.getElementById('edit-note-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Edit Note</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
        `;
    };
};

class AddChecklist {
    constructor(closeIcon) {
        this.init(closeIcon)
    };

    init(closeIcon) {
        const modal = document.getElementById('add-checklist-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Add Checklist</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
        `;
    };
};

class EditChecklist {
    constructor(closeIcon) {
        this.init(closeIcon)
    };

    init(closeIcon) {
        const modal = document.getElementById('edit-checklist-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Edit Checklist</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
        `;
    };
};

class UncompleteTask {
    constructor(closeIcon) {
        this.init(closeIcon)
    };
    
    init(closeIcon) {
        const modal = document.getElementById('uncomplete-task-modal-content');
        modal.innerHTML = `
            <div class="modal-header">
                <h2>Uncomplete Task</h2>
                <img src="${closeIcon}" class="modal-closer" alt='Close'>
            </div>
        `;
    };
};



class ModalEvents {
    constructor(modalManager, assetsManager) {
        this.closeIcon = closeIcon;
        this.assetsManager = assetsManager;
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
                this.appendModalContent(modalName);
                this.addModalCloseEvent();
                this.addModalCloseOnOutsideClick();
            });
        });
    };

    appendModalContent(modalName) {
        const modal = document.getElementById(modalName);
        const content = document.createElement('div');
        content.classList.add('modal-content');
        content.id = `${modalName}-modal-content`;
        modal.appendChild(content);
        const newName = this.transName(modalName);
        const nameString = `new ${newName}(this.closeIcon)`;
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
        //Takes a string 'modal-name' or 'modal' and return a string 'ModalName' or 'Modal' 
        const objectName = modalName.split('-').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join('');
        return objectName;
    };
};

export default ModalEvents;