class EventsManager {
    constructor() {
        this.events = {};
    };

    addEvents() {
        this.events = {
            "screenChange": this.screenChange,
            "menuToggle": this.menuToggle,
            "themeChange": this.themeChange,
            "modalChange": this.modalChange,
            "taskComplete": this.taskComplete,
            "taskExpandCollapse": this.taskExpandCollapse,
            "projectComplete": this.projectComplete,
            "projectExpandCollapse": this.projectExpandCollapse
        };
    };

    screenChange() {
        console.log("screenChange");
    };

    menuToggle() {
        console.log("menuToggle");
    };

    themeChange() {
        console.log("themeChange");
    };

    modalChange() {
        console.log("modalChange");
    };

    taskComplete() {
        console.log("taskComplete");
    };

    taskExpandCollapse() {
        console.log("taskExpandCollapse");
    };

    projectComplete() {
        console.log("projectComplete");
    };

    projectExpandCollapse() {
        console.log("projectExpandCollapse");
    };
};

export default EventsManager;