import { welcomeScreen } from './welcome-screen.js';
import { allTasksScreen } from './all-tasks-screen.js';
import { todayScreen } from './today-screen.js';
import { weekScreen } from './week-screen.js';
import { importantScreen } from './important-screen.js';
import { completedScreen } from './completed-screen.js';
import { allProjectsScreen } from './all-projects-screen.js';
import { activeProjectScreen } from './active-project-screen.js';
import { activeTaskScreen } from './active-task-screen.js';

class Screens {
    constructor() {
        this.screens = {
            welcome: new welcomeScreen(),
            allTasks: new allTasksScreen(),
            today: new todayScreen(),
            week: new weekScreen(),
            important: new importantScreen(),
            completed: new completedScreen(),
            allProjects: new allProjectsScreen(),
            activeProject: new activeProjectScreen(),
            activeTask: new activeTaskScreen()
        };
    };
};

export { Screens };