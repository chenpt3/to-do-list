import Screen from './screen.js';

class HomeScreen extends Screen {
    constructor() {
        super('home');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
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
        `;
        return screenContent;
    };
};

export default HomeScreen;