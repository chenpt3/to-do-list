import AddProjectScreen from './add-project.js';
import AddTaskScreen from './add-task.js';
import AllProjectsScreen from './all-projects.js';
import AllTasksScreen from './all-tasks.js';
import CompletedTasksScreen from './completed-tasks.js';
import EditProjectScreen from './edit-project.js';
import EditTaskScreen from './edit-task.js';
import ForTodayScreen from './for-today.js';
import ImportantTasksScreen from './important-tasks.js';
import ProjectScreen from './project.js';
import TaskScreen from './task.js';
import ThisWeekScreen from './this-week.js';
import SettingsScreen from './settings.js';
import InfoScreen from './info.js';
import ProfileScreen from './profile.js';
import HomeProfileScreen from './home-profile.js';

class ScreensManager {
    constructor(parentElement) {
        this.masterScreen = parentElement;
        this.screens = {};
        this.currentScreen = null;
    };

    addScreens() {
        this.addScreen(new AddProjectScreen(this.masterScreen));
        this.addScreen(new AddTaskScreen(this.masterScreen));
        this.addScreen(new AllProjectsScreen(this.masterScreen));
        this.addScreen(new AllTasksScreen(this.masterScreen));
        this.addScreen(new CompletedTasksScreen(this.masterScreen));
        this.addScreen(new EditProjectScreen(this.masterScreen));
        this.addScreen(new EditTaskScreen(this.masterScreen));
        this.addScreen(new ForTodayScreen(this.masterScreen));
        this.addScreen(new ImportantTasksScreen(this.masterScreen));
        this.addScreen(new ProjectScreen(this.masterScreen));
        this.addScreen(new TaskScreen(this.masterScreen));
        this.addScreen(new ThisWeekScreen(this.masterScreen));
        this.addScreen(new SettingsScreen(this.masterScreen));
        this.addScreen(new InfoScreen(this.masterScreen));
        this.addScreen(new ProfileScreen(this.masterScreen));
        this.addScreen(new HomeProfileScreen(this.masterScreen));
    };

    addScreen(screen) {this.screens[screen.name] = screen};

    showScreen(screenName) {
        if (this.currentScreen) this.currentScreen.hide();
        this.currentScreen = this.screens[screenName];
        this.currentScreen.show();
    };
};

export default ScreensManager;