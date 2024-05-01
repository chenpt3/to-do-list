class Screen {
    constructor(screenName) {
        this.createScreen(screenName);
        this.screen = document.getElementById(`${screenName}-screen`);
    };

    createScreen(screenName, screenContent) {
        const screen = document.createElement('div');
        screen.classList.add('screen');
        screen.id = `${screenName}-screen`;
        screen.innerHTML = screenContent;
        return screen;
    };
};

export default Screen;