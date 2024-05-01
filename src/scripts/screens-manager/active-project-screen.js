import Screen from './screen.js';
import returnIcon from '../../assets/return.svg';
import forwardIcon from '../../assets/forward.svg';
import closeIcon from '../../assets/close.svg';


class ActiveProjectScreen extends Screen {
    constructor() {
        super('active-project');
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
                <h1>Active Project</h1>
            </div>
            <div class="screen-actions">
                <img src='${closeIcon}' alt='Close' id='close-button-icon' class='close-button-icon'>
            </div>
        </div>
        `;
        return screenContent;
    };
};

export default ActiveProjectScreen;