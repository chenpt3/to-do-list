import ScreenChange from "./screen-change";
import ColorTheme from "./color-theme";
import MenuToggle from "./menu-toggle";
import ModalEvents from "./modal-events";
import NavManager from "./nav-manager";

class EventsManager {
    constructor(domManager, populator, modalsManager, screensManager) {
        this.nav = new NavManager();
        this.domManager = domManager;
        this.populator = populator;
        this.modalsManager = modalsManager;
        this.screensManager = screensManager;
        new ModalEvents(this.modalsManager);
        new ScreenChange(this.nav);
        new ColorTheme();
        new MenuToggle();
        this.expandTask();
        this.expandProject();
    };

    expandTask() {
        const tasks = document.querySelectorAll('.task-body');
        tasks.forEach(task => {
            task.addEventListener('click', () => {
                task.querySelector('.task-info').classList.toggle('open');
            });
        });
    };

    expandProject() {
        const projects = document.querySelectorAll('.project-body');
        projects.forEach(project => {
            project.addEventListener('click', () => {
                project.querySelector('.project-info').classList.toggle('open');
            });
        });
    };
    
};

export default EventsManager;