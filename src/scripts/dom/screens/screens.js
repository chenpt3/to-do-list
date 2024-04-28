import { welcomeScreen } from './welcome-screen.js';
import { allTasksScreen } from './all-tasks-screen.js';
import { settingsScreen } from './settings-screen.js';
import { helpScreen } from './help-screen.js';
import { todayScreen } from './today-screen.js';
import { weekScreen } from './week-screen.js';
import { importantScreen } from './important-screen.js';
import { completedScreen } from './completed-screen.js';
import { allProjectsScreen } from './all-projects-screen.js';
import { activeProjectScreen } from './active-project-screen.js';
import { addProjectScreen } from './add-project-screen.js';

class Screens {
    constructor() {
        this.screens = {
            welcome: new welcomeScreen(),
            allTasks: new allTasksScreen(),
            settings: new settingsScreen(),
            help: new helpScreen(),
            today: new todayScreen(),
            week: new weekScreen(),
            important: new importantScreen(),
            completed: new completedScreen(),
            allProjects: new allProjectsScreen(),
            activeProject: new activeProjectScreen(),
            addProject: new addProjectScreen()
        };
    };
};

export { Screens };