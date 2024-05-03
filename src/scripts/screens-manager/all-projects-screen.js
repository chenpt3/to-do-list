import Screen from './screen.js';
import addProjectButton from '../../assets/add-project.svg';
import returnIcon from '../../assets/return.svg';
import forwardIcon from '../../assets/forward.svg';
import closeIcon from '../../assets/close.svg';

class AllProjectsScreen extends Screen {
    constructor() {
        super('all-projects');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class="screen-header">
            <div class="nav-buttons">
                <img src='${returnIcon}' alt='Return' id='return-button-icon' class='return-button-icon screen-'>
                <img src='${forwardIcon}' alt='Forward' id='forward-button-icon' class='forward-button-icon'>
            </div>
            <div class="screen-title">
                <h1>All Projects</h1>
            </div>
            <div class="screen-actions">
                <img src='${addProjectButton}' alt='Add Project' id='add-project-button-icon' class='add-project-button-icon screen-changer' data-screen='add-project'>
                <img src='${closeIcon}' alt='Close' id='close-button-icon' class='close-button-icon'>
            </div>
        </div>
        <div class='all-project-screen-heading screen-heading'>
            <h1>All Projects</h1>
        </div>
        <div class='all-project-screen-text'>
            <p>Here are all the projects you have created</p>
        </div>
        <div class='all-project-screen-tasks'>
            <div class='all-project-screen-tasks-heading'>
                <h2>Projects</h2>
            </div>
            <div class='projects-screen-projects-list screen-projects-list'>
            </div>
        </div>
        `;
        return screenContent;
    };
};

export default AllProjectsScreen;