import { create } from "lodash";

class Aside {
    constructor(domTool) {
        this.domTool = domTool;
        this.createAside();
    };

    createAside() {
        this.aside = this.domTool.createDom('aside');
        this.domTool.appendElement(this.domTool.dom.body, this.aside);
        this.createAsideControls();
        this.createAsideScreensButtons();
        this.createAsideProjects();
    };

    createAsideControls() {
        this.controls = this.domTool.createDom('div');
        this.controls.id = 'menu-controls';
        this.domTool.appendElement(this.aside, this.controls);
        this.createMenuButton();
        this.createProfile();
    };

    createMenuButton() {
        this.menuButton = this.domTool.createDom('div');
        this.menuButton.id = 'menu-button';
        this.domTool.appendElement(this.controls, this.menuButton);
    };

    createProfile() {
        this.profile = this.domTool.createDom('div');
        this.profile.id = 'menu-profile';
        this.domTool.appendElement(this.controls, this.profile);
        this.createProfilePicture();
        this.createProfileName();
    };

    createProfilePicture() {
        this.picture = this.domTool.createDom('img');
        this.picture.id = 'menu-profile-picture';
        this.domTool.appendElement(this.profile, this.picture);
    };

    createProfileName() {
        this.name = this.domTool.createDom('div');
        this.name.id = 'menu-profile-name';
        this.domTool.appendElement(this.profile, this.name);
    };

    createAsideScreensButtons() {
        this.screensButtons = this.domTool.createDom('div');
        this.screensButtons.id = 'menu-screens-buttons';
        this.domTool.appendElement(this.aside, this.screensButtons);
        const screens = ['all-tasks', 'for-today', 'this-week', 'important', 'completed'];
        screens.forEach(screen => this.createScreenButton(screen));
    };

    createScreenButton(screen) {
        this.screenButton = this.domTool.createDom('div');
        this.screenButton.id = `menu-${screen}-button`;
        this.domTool.appendElement(this.screensButtons, this.screenButton);
        createScreenButtonIcon(screenButton);
        createScreenButtonText(screenButton);
    };

    createScreenButtonIcon(screenButton) {
        this.icon = this.domTool.createDom('img');
        this.icon.id = `${screenButton.id}-icon`;
        this.icon.src = `images/${screenButton.id}.png`;
        this.domTool.appendElement(screenButton, this.icon);
    };

    createScreenButtonText(screenButton) {
        this.text = this.domTool.createDom('p');
        this.text.id = `${screenButton.id}-text`;
        this.text.textContent = screenButton.id.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
        this.domTool.appendElement(screenButton, this.text);
    };

    createAsideProjects() {
        this.projects = this.domTool.createDom('div');
        this.projects.id = 'menu-projects';
        this.domTool.appendElement(this.aside, this.projects);
        createAllProjectsButton();
        createProjectListContainer();
    };

    createAllProjectsButton() {
        this.allProjects = this.domTool.createDom('div');
        this.allProjects.id = 'menu-all-projects-button';
        this.domTool.appendElement(this.projects, this.allProjects);
        createAllProjectsButtonIcon();
        createAllProjectsButtonText();
    };

    createAllProjectsButtonIcon() {
        this.icon = this.domTool.createDom('img');
        this.icon.id = 'menu-all-projects-icon';
        this.icon.src = 'images/all-projects.png';
        this.domTool.appendElement(this.allProjects, this.icon);
    };

    createAllProjectsButtonText() {
        this.text = this.domTool.createDom('p');
        this.text.id = 'menu-all-projects-text';
        this.text.textContent = 'All Projects';
        this.domTool.appendElement(this.allProjects, this.text);
    };

    createProjectListContainer() {
        this.projectList = this.domTool.createDom('div');
        this.projectList.id = 'menu-projects-list-container';
        this.domTool.appendElement(this.projects, this.projectList);
        createProjectsList();
        createAddProjectButton();
    };

    createProjectsList() {
        this.projectsList = this.domTool.createDom('div');
        this.projectsList.id = 'menu-projects-list';
        this.domTool.appendElement(this.projectList, this.projectsList);
    };

    createAddProjectButton() {
        this.addProject = this.domTool.createDom('div');
        this.addProject.id = 'menu-add-project-button';
        this.domTool.appendElement(this.projectList, this.addProject);
        createAddProjectIcon();
        createAddProjectText();
    };

    createAddProjectIcon() {
        this.icon = this.domTool.createDom('img');
        this.icon.id = 'menu-add-project-icon';
        this.icon.src = 'images/add-project.png';
        this.domTool.appendElement(this.addProject, this.icon);
    };

    createAddProjectText() {
        this.text = this.domTool.createDom('p');
        this.text.id = 'menu-add-project-text';
        this.text.textContent = 'Add Project';
        this.domTool.appendElement(this.addProject, this.text);
    };
};

export default Aside;