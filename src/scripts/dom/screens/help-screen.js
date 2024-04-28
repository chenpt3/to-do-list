class helpScreen {
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
        const screen = document.querySelector('#help-screen');
        screen.innerHTML = this.getScreenContent();
    };
};

export { helpScreen };