import Screen from './screen.js';
import returnIcon from '../../assets/return.svg';
import forwardIcon from '../../assets/forward.svg';
import closeIcon from '../../assets/close.svg';
import logoIcon from '../../assets/logo.svg';

class HomeScreen extends Screen {
    constructor() {
        super('home');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <div class="screen-header">
            <div class="nav-buttons">
                <img src='${returnIcon}' alt='Return' id='return-button-icon' class='return-button-icon screen-'>
                <img src='${forwardIcon}' alt='Forward' id='forward-button-icon' class='forward-button-icon'>
            </div>
            <div class="screen-title">
                <img src='${logoIcon}' alt='Logo' id='main-logo-icon' class='main-logo-icon'>
            </div>
            <div class="screen-actions">
                <img src='${closeIcon}' alt='Close' id='close-button-icon' class='close-button-icon'>
            </div>
        </div>
        <div class='welcome-screen-heading'>
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