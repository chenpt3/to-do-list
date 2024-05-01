import Screen from './screen.js';

class AllProjectsScreen extends Screen {
    constructor() {
        super('all-projects');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class='allProject-screen-container'>
            <div class='allProject-screen-heading screen-heading'>
                <h1>All Projects</h1>
                <img src='' alt='Add Project' id='add-project-button-icon' class='add-project-button-icon'>
            </div>
            <div class='allProject-screen-text'>
                <p>Here are all the projects you have created</p>
            </div>
            <div class='allProject-screen-tasks'>
                <div class='allProject-screen-tasks-heading'>
                    <h2>Projects</h2>
                </div>
                <div class='projects-screen-projects-list screen-projects-list'>
                </div>
            </div>
        </div>
        `;
        return screenContent;
    };
};

export default AllProjectsScreen;