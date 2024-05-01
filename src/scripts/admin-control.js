import DomManager from './dom-manager/dom-manager.js';
import TasksManager from './tasks-manager/tasks-manager.js';
import ScreensManager from './screens-manager/screens-manager.js';
import EventsManager from './events-manager/events-manager.js';
import TasksAppender from './tasks-manager/tasks-appender.js';

/**
 * AdminControl class is responsible for managing the administrative control of the application.
 * It initializes the Populator object which manages tasks and projects, populates them on the screen, and handles their events.
 */
class AdminControl {
    /**
     * Constructor initializes the Populator object.
     */
    constructor() {
        new DomManager();
        new ScreensManager();
        new EventsManager();
        this.tasksManager = new TasksManager();
        new TasksAppender(this.tasksManager);
    };
};

export default AdminControl;