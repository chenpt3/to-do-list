import moonIcon from './moon.svg';
import sunIcon from './sun.svg';
import addProjectIcon from './add-project.svg';
import allTasksIcon from './all-tasks.svg';
import todayIcon from './today.svg';
import weekIcon from './week.svg';
import importantIcon from './important.svg';
import completedIcon from './completed.svg';
import settingsIcon from './settings.svg';
import helpIcon from './help.svg';
import menuIcon from './menu.svg';
import logoIcon from './logo.svg';
import userIcon from './user.svg';
import addTaskIcon from './add-task.svg';
import projectIcon from './project.svg';
import projectsIcon from './projects.svg';
import saveIcon from './save.svg';
import searchIcon from './search.svg';
import closeIcon from './close.svg';

class AssetsManager {
    constructor() {
        this.assets = {
            moonIcon,
            sunIcon,
            addProjectIcon,
            allTasksIcon,
            todayIcon,
            weekIcon,
            importantIcon,
            completedIcon,
            settingsIcon,
            helpIcon,
            menuIcon,
            logoIcon,
            userIcon,
            addTaskIcon,
            projectIcon,
            projectsIcon,
            saveIcon,
            searchIcon,
            closeIcon
        };
    };

    getAsset(assetName) {
        return this.assets[assetName];
    };
};

export default AssetsManager;