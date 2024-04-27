import moonSVG from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/moon.svg';
import sunSVG from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/sun.svg';
import addProjectSVG from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/add-project.svg';
import allTasksSVG from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/allTasks.svg';
import todaySVG from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/today.svg';
import weekSVG from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/week.svg';
import importantSVG from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/important.svg';
import completedSVG from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/completed.svg';
import settingsSVG from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/settings.svg';
import helpSVG from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/help.svg';
import menuSVG from '/Users/chenpetito/Documents/repos/to-do-list/src/assets/images/menu.svg';

// An object to create DOM elements and append them
class DOM {
    constructor() {
        this.body = document.querySelector('body');
        this.container = this.createElement('div', 'container');
        this.appendChild(this.body, this.container);
    };

    createElement(type, id, ...classes) {
        const element = document.createElement(type);
        element.id = id;
        classes.forEach(className => element.classList.add(className));
        return element;
    };

    appendChild(parent, child) {
        parent.appendChild(child);
        return parent;
    };

    addText(element, text) {
        element.textContent = text;
        return element;
    };

    addImage(element, src) {
        element.src = src;
        return element;
    }
};

// Initialize the DOM
class domControls {
    constructor() {
        this.dom = new DOM();
        this.init();
    };

    init() {
        this.addHeader();
        this.addMenu();
        this.addMain();
        this.addFooter();
    };

    addHeader() {
        const header = this.dom.createElement('header', 'header');
        this.addHeaderElements(header);
        this.dom.appendChild(this.dom.container, header);
    };

    addMenu() {
        const menu = this.dom.createElement('aside', 'menu');
        this.addMenuElements(menu);
        this.dom.appendChild(this.dom.container, menu);
    };

    addMain() {
        const main = this.dom.createElement('main', 'main');
        this.dom.appendChild(this.dom.container, main);
    };

    addFooter() {
        const footer = this.dom.createElement('footer', 'footer');
        this.addFooterElements(footer);
        this.dom.appendChild(this.dom.container, footer);
    };

    // Header elements
    addHeaderElements(header) {
        this.addHeaderLogo(header);
        this.addHeaderButtons(header);
    };

    addHeaderLogo(header) {
        const headerLogo = this.dom.createElement('div', 'header-logo');
        const headerPara = this.dom.createElement('p', 'header-para');
        this.dom.addText(headerPara, 'To-Do List');
        this.dom.appendChild(headerLogo, headerPara);
        this.dom.appendChild(header, headerLogo);
    };

    addHeaderButtons(header) {
        const headerButtons = this.dom.createElement('div', 'header-buttons');
        this.dom.appendChild(header, headerButtons);
        const tempBtns = ['moon', 'sun', 'settings', 'help', 'menu'];
        tempBtns.forEach(btn => this.addHeaderButton(btn, headerButtons));
    };

    addHeaderButton(btn, headerButtons) {
        const button = this.dom.createElement('img', `${btn}-image`, 'header-button');
        this.dom.appendChild(headerButtons, button);
        switch (btn) {
            case 'moon':
                this.dom.addImage(button, moonSVG);
                break;
            case 'sun':
                this.dom.addImage(button, sunSVG);
                break;
            case 'settings':
                this.dom.addImage(button, settingsSVG);
                break;
            case 'help':
                this.dom.addImage(button, helpSVG);
                break;
            case 'menu':
                this.dom.addImage(button, menuSVG);
                break;
        };
    };

    // Menu elements
    addMenuElements(menu) {
        this.addMenuButtons(menu);
        this.addMenuProjects(menu);
    };

    addMenuButtons(menu) {
        const menuButtons = this.dom.createElement('div', 'menu-buttons');
        this.dom.appendChild(menu, menuButtons);
        const tempBtns = ['allTasks', 'today', 'week', 'important', 'completed'];
        tempBtns.forEach(btn => this.addMenuButton(btn, menuButtons));
    };

    addMenuButton(btn, menuButtons) {
        const button = this.dom.createElement('div', btn, "menu-button");
        this.dom.appendChild(menuButtons, button);
        switch (btn) {
            case 'allTasks':
                this.addMenuButtonImage(button, allTasksSVG, btn);
                this.addMenuButtonPara(button, 'All Tasks', btn);
                break;
            case 'today':
                this.addMenuButtonImage(button, todaySVG, btn);
                this.addMenuButtonPara(button, 'Today', btn);
                break;
            case 'week':
                this.addMenuButtonImage(button, weekSVG, btn);
                this.addMenuButtonPara(button, 'Week', btn);
                break;
            case 'important':
                this.addMenuButtonImage(button, importantSVG, btn);
                this.addMenuButtonPara(button, 'Important', btn);
                break;
            case 'completed':
                this.addMenuButtonImage(button, completedSVG, btn);
                this.addMenuButtonPara(button, 'Completed', btn);
                break;
        };
    };

    addMenuButtonImage(button, src, btn) {
        const image = this.dom.createElement('img', `${btn}-image`,'button-image');
        this.dom.addImage(image, src);
        this.dom.appendChild(button, image);
    };

    addMenuButtonPara(button, text, btn) {
        const para = this.dom.createElement('p', `${btn}-para`,'button-para');
        this.dom.addText(para, text);
        this.dom.appendChild(button, para);
    };

    addMenuProjects(menu) {
        const menuProjects = this.dom.createElement('div', 'menu-projects');
        this.dom.appendChild(menu, menuProjects);
        this.addMenuAddProject(menuProjects);
    };

    addMenuAddProject(menuProjects) {
        const addProject = this.dom.createElement('div', 'add-project', 'menu-button');
        this.dom.appendChild(menuProjects, addProject);
        this.addMenuButtonImage(addProject, addProjectSVG, 'add-project');
        this.addMenuButtonPara(addProject, 'Add Project', 'add-project');
    };

    // Footer elements
    addFooterElements(footer) {
        this.addFooterPara(footer);
    };

    addFooterPara(footer) {
        const footerPara = this.dom.createElement('p', 'footer-para');
        this.dom.addText(footerPara, 'To-Do List');
        this.dom.appendChild(footer, footerPara);
    };
};

export default domControls;