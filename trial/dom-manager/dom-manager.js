import DomTool from './dom-tool.js';
import Header from './header.js';
import Aside from './aside.js';
import Main from './main.js';
import Footer from './footer.js';

class DomManager {
    constructor() {
        this.domTool = new DomTool();
        new Header(this.domTool);
        new Aside(this.domTool);
        new Main(this.domTool);
        new Footer(this.domTool);
        this.selectDom();
        this.selectBody();
        this.selectHeader();
        this.selectAside();
    };

    selectDom() {
        this.dom = document;
        this.html = this.dom.documentElement;
        this.head = this.dom.head;
        this.body = this.dom.body;
        this.body.modals = this.dom.querySelectorAll('#modals-container');
    };

    selectBody() {
        this.header = querySelector('header');
        this.aside = querySelector('aside');
        this.main = querySelector('main');
        this.footer = querySelector('footer');
        this.main.screen = this.main.querySelector('#screen-container');
        this.footer.text = this.footer.querySelectorAll('#footer-text');
    };

    selectHeader() {
        this.header.logo = querySelector('#header-logo');
        this.header.buttons = querySelectorAll('.header-icon');
        this.header.buttons.sun = querySelector('#header-sun-icon');
        this.header.buttons.moon = querySelector('#header-moon-icon');
        this.header.buttons.settings = querySelector('#header-settings-icon');
        this.header.buttons.info = querySelector('#header-info-icon');
        this.header.buttons.menu = querySelector('#header-menu-icon');
    };

    selectAside() {
        this.aside.controls = querySelector('#menu-controls');
        this.aside.controls.menuButton = querySelector('#menu-button');
        this.aside.controls.profile = querySelector('#menu-profile');
        this.aside.controls.profile.picture = querySelector('#menu-profile-picture');
        this.aside.controls.profile.name = querySelector('#menu-profile-name');

        this.aside.screensButtons = querySelector('#menu-screen-buttons');
        this.aside.screensButtons.allTasks = querySelector('#menu-all-tasks-button');
        this.aside.screensButtons.forToday = querySelector('#menu-for-today-button');
        this.aside.screensButtons.thisWeek = querySelector('#menu-this-week-button');
        this.aside.screensButtons.important = querySelector('#menu-important-button');
        this.aside.screensButtons.completed = querySelector('#menu-completed-button');

        this.aside.projects = querySelector('#menu-projects');
        this.aside.projects.allProjects = querySelector('#menu-all-projects-button');
        this.aside.projects.projectsListContainer = querySelector('#menu-projects-list-container');
        this.aside.projects.projectsListContainer.projectsList = querySelector('#menu-projects-list');
        this.aside.projects.projectsListContainer.addProject = querySelector('#menu-add-project-button');
    };
};

export default DomManager;