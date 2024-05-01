/**
 * MenuCreator class is responsible for creating and managing the menu of the application.
 * It initializes the domCreator and adds the menu in the constructor.
 */
class MenuCreator {
    /**
     * Constructor initializes the domCreator and adds the menu.
     * @param {DOMElementCreator} domCreator - The DOMElementCreator instance to use for creating DOM elements.
     */
    constructor(domCreator, assetsManager) {
        this.domCreator = domCreator;
        this.assetsManager = assetsManager;
        this.addMenu();
    };

    /**
     * addMenu function creates a menu and adds elements to it.
     */
    addMenu() {
        const menu = this.domCreator.createElement('aside', 'menu');
        this.addMenuElements(menu);
        this.domCreator.appendChild(this.domCreator.container, menu);
    };

    /**
     * addMenuElements function adds elements to the menu.
     * @param {HTMLElement} menu - The menu to add elements to.
     */
    addMenuElements(menu) {
        this.addMenuControls(menu);
        this.addMenuButtons(menu);
        this.addProjects(menu)
    };

    /**
     * addMenuControls function adds controls to the menu.
     * @param {HTMLElement} menu - The menu to add controls to.
     */
    addMenuControls(menu) {
        const menuControlsContainer = this.domCreator.createElement('div', 'menu-controls-container', 'menu-controls-open');
        this.AddMenuControlsProfile(menuControlsContainer);
        this.AddMenuControlsButton(menuControlsContainer);
        this.domCreator.appendChild(menu, menuControlsContainer);
    };

    /**
     * AddMenuControlsProfile function adds a profile control to the menu.
     * @param {HTMLElement} menuControlsContainer - The container to add the profile control to.
     */
    AddMenuControlsProfile(menuControlsContainer) {
        const menuControlsProfile = this.domCreator.createElement('div', 'menu-controls-profile', 'screen-changer');
        menuControlsProfile.dataset.screen = 'profile';

        const menuControlsProfileImage = this.domCreator.createElement('img', 'menu-controls-profile-image', 'menu-button-image');
        this.domCreator.addImage(menuControlsProfileImage, this.assetsManager.getAsset('userIcon'));

        const menuControlsProfileName = this.domCreator.createElement('p', 'menu-controls-profile-name', 'menu-button-text');
        this.domCreator.addText(menuControlsProfileName, 'Chen');

        this.domCreator.appendChild(menuControlsProfile, menuControlsProfileImage);
        this.domCreator.appendChild(menuControlsProfile, menuControlsProfileName);
        this.domCreator.appendChild(menuControlsContainer, menuControlsProfile);
        return menuControlsProfile;
    };

    /**
     * AddMenuControlsButton function adds a button control to the menu.
     * @param {HTMLElement} menuControlsContainer - The container to add the button control to.
     */
    AddMenuControlsButton(menuControlsContainer) {
        const menuControlsButton = this.domCreator.createElement('div', 'menu-controls-button');
        const menuControlsButtonImage = this.domCreator.createElement('img', 'menu-controls-button-icon', 'menu-button-image');
        this.domCreator.addImage(menuControlsButtonImage, this.assetsManager.getAsset('menuIcon'));
        this.domCreator.appendChild(menuControlsButton, menuControlsButtonImage);
        this.domCreator.appendChild(menuControlsContainer, menuControlsButton);
        return menuControlsButton;
    };

    /**
     * addMenuButtons function adds buttons to the menu.
     * @param {HTMLElement} menu - The menu to add the buttons to.
     */
    addMenuButtons(menu) {
        const menuButtonsContainer = this.domCreator.createElement('div', 'menu-buttons-container');
        this.domCreator.appendChild(menu, menuButtonsContainer);
        const buttonNames = ['all-tasks', 'for-today', 'this-week', 'important', 'completed'];
        buttonNames.forEach(buttonName => this.addMenuButton(buttonName, menuButtonsContainer));
    };

    /**
     * addProjects function adds projects to the menu.
     * @param {HTMLElement} menu - The menu to add the projects to.
     */
    addProjects(menu) {
        const projectsContainer = this.domCreator.createElement('div', 'projects-container');
        this.domCreator.appendChild(menu, projectsContainer);

        const projectsButton = this.domCreator.createElement('div', 'projects-button', 'menu-button', 'screen-changer');
        projectsButton.dataset.screen = 'all-projects';
        this.domCreator.appendChild(projectsContainer, projectsButton);
        
        const projectsButtonImage = this.domCreator.createElement('img', 'projects-button-icon', 'menu-button-image');
        this.domCreator.addImage(projectsButtonImage, this.assetsManager.getAsset('projectsIcon'));
        this.domCreator.appendChild(projectsButton, projectsButtonImage);

        const projectsButtonText = this.domCreator.createElement('p', 'projects-button-text', 'menu-button-text');
        this.domCreator.addText(projectsButtonText, 'My Projects');
        this.domCreator.appendChild(projectsButton, projectsButtonText);

        this.addProjectsList(projectsContainer);
    };

    /**
     * addProjectsList function adds a list of projects to the menu.
     * @param {HTMLElement} projectsContainer - The container to add the projects list to.
     */
    addProjectsList(projectsContainer) {
        const projectsList = this.domCreator.createElement('div', 'projects-list');
        this.domCreator.appendChild(projectsContainer, projectsList);

        const projectsListContent = this.domCreator.createElement('div', 'projects-list-content');
        this.domCreator.appendChild(projectsList, projectsListContent);

        this.addAddProjectButton(projectsList);
    };

    /**
     * addAddProjectButton function adds a button to add a project to the menu.
     * @param {HTMLElement} projectList - The list to add the button to.
     */
    addAddProjectButton(projectList) {
        const addProjectButton = this.domCreator.createElement('div', 'add-project-button', 'menu-projects-button', 'screen-changer');
        addProjectButton.dataset.screen = 'add-project';
        this.domCreator.appendChild(projectList, addProjectButton);

        const addProjectButtonImage = this.domCreator.createElement('img', 'add-project-button-icon', 'menu-button-image');
        this.domCreator.addImage(addProjectButtonImage, this.assetsManager.getAsset('addProjectIcon'));
        this.domCreator.appendChild(addProjectButton, addProjectButtonImage);

        const addProjectButtonText = this.domCreator.createElement('p', 'add-project-button-text', 'menu-button-text');
        this.domCreator.addText(addProjectButtonText, 'Add Project');
        this.domCreator.appendChild(addProjectButton, addProjectButtonText);
    };

    /**
     * addMenuButton function adds a button to the menu.
     * @param {string} buttonName - The name of the button to add.
     * @param {HTMLElement} menuButtonsContainer - The container to add the button to.
     */
    addMenuButton(buttonName, menuButtonsContainer) {
        const button = this.domCreator.createElement('div', buttonName, 'menu-button', 'screen-changer');
        button.dataset.screen = buttonName;
        this.domCreator.appendChild(menuButtonsContainer, button);
        let icon;
        switch (buttonName) {
            case 'all-tasks':
                icon = 'allTasksIcon';
                this.addMenuButtonImageAndText(button, 'All Tasks', buttonName, icon);
                break;
            case 'for-today':
                icon = 'todayIcon';
                this.addMenuButtonImageAndText(button, 'For Today', buttonName, icon);
                break;
            case 'this-week':
                icon = 'weekIcon';
                this.addMenuButtonImageAndText(button, 'This Week', buttonName, icon);
                break;
            case 'important':
                icon = 'importantIcon';
                this.addMenuButtonImageAndText(button, 'Important', buttonName, icon);
                break;
            case 'completed':
                icon = 'completedIcon';
                this.addMenuButtonImageAndText(button, 'Completed', buttonName, icon);
                break;
        };
    };

    /**
     * addMenuButtonImageAndText function adds an image and text to a menu button.
     * @param {HTMLElement} button - The button to add the image and text to.
     * @param {string} icon - The icon to add to the button.
     * @param {string} text - The text to add to the button.
     * @param {string} buttonName - The name of the button.
     */
    addMenuButtonImageAndText(button, text, buttonName, icon) {
        const image = this.domCreator.createElement('img', `${buttonName}-menu-icon`,'menu-button-image');
        this.domCreator.addImage(image, this.assetsManager.getAsset(icon));
        this.domCreator.appendChild(button, image);
        const para = this.domCreator.createElement('p', `${buttonName}-menu-text`,'menu-button-text');
        this.domCreator.addText(para, text);
        this.domCreator.appendChild(button, para);
    };
};

export default MenuCreator;