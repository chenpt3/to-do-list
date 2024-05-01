import DomManager from './dom-manager/dom-manager.js';
import ScreensManager from './screens-manager/screens-manager.js';
import TasksManager from './tasks-manager/tasks-manager.js';
import TasksPupulator from './tasks-manager/tasks-populator.js';
import EventsManager from './events-manager/events-manager.js';
import ModalsManager from './modals-manager/modals-manager.js';


/**
 * AdminControl class is responsible for managing the administrative control of the application.
 * It initializes the Populator object which manages tasks and projects, populates them on the screen, and handles their events.
 */
class AdminControl {
    /**
     * Constructor initializes the Populator object.
     */
    constructor() {
        this.dom = new DomManager();
        this.screens = new ScreensManager();
        this.modals = new ModalsManager();
        this.tasks = new TasksManager();
        this.pop = new TasksPupulator(this.tasks);
        this.events = new EventsManager(this.tasks, this.pop, this.modals, this.dom, this.screens);
    };
};

export default AdminControl;