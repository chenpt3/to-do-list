class importantScreen {
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
        const screen = document.querySelector('#important-screen');
        screen.innerHTML = this.getScreenContent();
    };
};

export { importantScreen };