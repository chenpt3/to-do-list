import "./styles-manager/styles-manager.css";

import DomManager from "./dom-manager/dom-manager.js";
import TasksManager from "./tasks-manager/tasks-manager.js";
import AssetsManager from "./assets-manager/assets-manager.js";
import ScreensManager from "./screens-manager/screens-manager.js";
import StorageManger from "./storage-manager.js";
import ModalsManager from "./modals-manager/modals-manager.js";
import EventsManager from "./events-manager/events-manager.js";

class MainInterface {
    constructor() {
        this``.dom = new DomManager();
        this.TasksManager = new TasksManager();
        this.assets = new AssetsManager();
        this.screens = new ScreensManager();
        this.storage = new StorageManger();
        this.modals = new ModalsManager();
        this.events = new EventsManager();
    };

    init() {
        this.storage.init();
        this.assets.loadAssets();
        this.dom.init();
        this.screens.init();
        this.events.init();
    };
};

export default MainInterface;