import ScreenChange from "./screen-change";
import ColorTheme from "./color-theme";
import MenuToggle from "./menu-toggle";

class EventsManager {
    constructor() {
        new ScreenChange();
        new ColorTheme();
        new MenuToggle();
    };
};

export default EventsManager;