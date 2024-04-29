class activeTaskScreen {
    constructor() {
        this.renderScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <h1>Welcome to the game!</h1>
        `;
        return screenContent;
    };

    renderScreenContent() {
        const screen = document.querySelector('#activeTask-screen ');
        screen.innerHTML = this.getScreenContent();
    };
};

export { activeTaskScreen };