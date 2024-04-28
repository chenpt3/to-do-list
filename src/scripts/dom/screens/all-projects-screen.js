class allProjectsScreen {
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
        const screen = document.querySelector('#allProjects-screen');
        screen.innerHTML = this.getScreenContent();
    };
};

export { allProjectsScreen };