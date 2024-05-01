class ScreenChange {
    constructor() {
        this.addEventListeners();
    };

    getButtons() {
        return document.querySelectorAll('.screen-changer');
    };

    addEventListeners() {
        const buttons = this.getButtons();
        buttons.forEach(button => {
            button.addEventListener('click', event => {
                this.changeScreen(document.querySelector(`#${event.currentTarget.dataset.screen + '-screen'}`));
                event.currentTarget.classList.add('active-screen-changer');
            });
        });
    };

    changeScreen(screen) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => {
            screen.classList.add('screen-hide');
            screen.classList.add('hidden');
        });
        screen.classList.remove('screen-hide');
        screen.classList.remove('hidden');
    };
};

export default ScreenChange;