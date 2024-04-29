class ModalsManager {
    constructor() {
        this.modals = {};
        this.modal = null;
    };

    addModal(name, modal) {this.modals[name] = modal};

    openModal(name) {
        if (this.modal) this.modal.close();
        this.modal = this.modals[name];
        this.modal.open();
    };

    closeModal() {if (this.modal) this.modal.close()};
};

export default ModalsManager;