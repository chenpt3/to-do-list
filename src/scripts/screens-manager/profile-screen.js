import Screen from './screen.js';

class ProfileScreen extends Screen {
    constructor() {
        super('profile');
        this.screen.innerHTML = this.getScreenContent();
    };

    getScreenContent() {
        const screenContent = `
        <h1>Welcome to the game!</h1>
        `;
        return screenContent;
    };
};

export default ProfileScreen;