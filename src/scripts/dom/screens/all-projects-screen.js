import { addProjectIcon } from "../../../assets/images/images.js";
class allProjectsScreen {
    constructor() {
        this.renderScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class='allProject-screen-container'>
            <div class='allProject-screen-heading screen-heading'>
                <h1>All Projects</h1>
                <img src=${addProjectIcon} alt='Add Project' id='add-project-button-icon' class='add-project-button-icon'>
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

    renderScreenContent() {
        const screen = document.querySelector('#allProjects-screen');
        screen.innerHTML = this.getScreenContent();
    };
};

export { allProjectsScreen };