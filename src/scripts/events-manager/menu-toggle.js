class MenuToggle {
    constructor() {
        this.addEventListeners();
        this.load();
    };

    addEventListeners() {
        const menuButton = document.querySelector('#menu-controls-button-icon');
        menuButton.addEventListener('click', () => {
            this.toggleMenu();
            this.hideMenuText();
            this.save();
        });
    };

    toggleMenu() {
        const container = document.querySelector('#container');
        container.classList.toggle('menu-open');
        container.classList.toggle('menu-close');
        const controls = document.querySelector('#menu-controls-container');
        controls.classList.toggle('menu-controls-open');
        controls.classList.toggle('menu-controls-closed');
    };

    hideMenuText() {
        const menuText = document.querySelectorAll('.menu-button-text');
        menuText.forEach(text => {
            text.classList.toggle('hidden');
        });
    };

    save() {
        const menuOpen = document.querySelector('#container').classList.contains('menu-open');
        localStorage.setItem('menuOpen', menuOpen);
    }

    load() {
        const menuOpen = localStorage.getItem('menuOpen');
        if (menuOpen === 'true') {
            return
        } else if (menuOpen === 'false') {
            this.toggleMenu();
            this.hideMenuText();
        } else {
            return
        };
    };    
};

export default MenuToggle;