class welcomeScreen {
    constructor() {
        this.renderScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class='welcome-screen-container'>
            <div class='welcome-screen-heading'>
                <h1>Welcome to 'TODO-BOM'</h1> 
                <h2>Your Personal Task Manager</h2>
            </div>
            <div class='welcome-screen-text'>
                <p>Organize your tasks, projects, and deadlines with ease.</p>
                <p>Get started by creating a project and adding tasks to it.</p>
                <p>You can also start by adding tasks to the 'All Tasks' section (we'll sort it out for you).</p>
                <p>Click on the 'Help' section to learn more about how to use this app.</p>
            </div>
        </div>
        `;
        return screenContent;
    };

    renderScreenContent() {
        const screen = document.querySelector('#welcome-screen');
        screen.innerHTML = this.getScreenContent();
    };
};

export { welcomeScreen };