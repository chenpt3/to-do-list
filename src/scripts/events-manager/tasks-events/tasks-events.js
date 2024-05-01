class TasksEvents {
    constructor(tasksManager) {
        this.tasksManager = tasksManager;
    };

    populateScreens() {
        this.clearAllScreensTasks();
        this.clearAllScreensProjects();
        this.populateAllTasksScreen();
        this.populateTodayScreen();
        this.populateWeekScreen();
        this.populateImportantScreen();
        this.populateCompletedScreen();
        this.populateAllProjectsScreen();
        this.addEventListeners();
    };

    
};