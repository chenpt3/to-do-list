class ModalsManager {
    constructor() {};

    createModal(modalName) {
        const modal =  document.createElement('div');
        modal.id = modalName;
        modal.classList.add('modal');
        return modal;
    };

    addModal(modal) {
        document.body.appendChild(modal);
    };

    removeModal() {
        document.body.removeChild(this.modal);
    };
};

export default ModalsManager;