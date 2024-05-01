import HomeScreen from './home-screen.js';
import AllTasksScreen from './all-tasks-screen.js';
import ForTodayScreen from './for-today-screen.js';
import ThisWeekScreen from './this-week-screen.js';
import ImportantScreen from './important-screen.js';
import CompletedScreen from './completed-screen.js';
import AllProjectsScreen from './all-projects-screen.js';
import ActiveProjectScreen from './active-project-screen.js';
import SettingsScreen from './settings-screen.js';
import AboutScreen from './about-screen.js';
import HelpScreen from './help-screen.js';
import ProfileScreen from './profile-screen.js';
import AddProjectScreen from './add-project-screen.js';
import EditProjectScreen from './edit-project-screen.js';
import AddTaskScreen from './add-task-screen.js';
import EditTaskScreen from './edit-task-screen.js';
import ActiveTaskScreen from './active-task-screen.js';

class ScreensManager {
    constructor() {
        new HomeScreen();
        new AllTasksScreen();
        new ForTodayScreen();
        new ThisWeekScreen();
        new ImportantScreen();
        new CompletedScreen();
        new AllProjectsScreen();
        new ActiveProjectScreen();
        new SettingsScreen();
        new AboutScreen();
        new HelpScreen();
        new ProfileScreen();
        new AddProjectScreen();
        new EditProjectScreen();
        new AddTaskScreen();
        new EditTaskScreen();
        new ActiveTaskScreen();
    };
};

export default ScreensManager;