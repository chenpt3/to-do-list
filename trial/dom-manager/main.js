class Main {
    constructor(domTool) {
        this.domTool = domTool;
        this.createMain();
    };

    createMain() {
        this.main = this.domTool.createDom('main');
        this.domTool.appendElement(this.domTool.dom.body, this.main);
        this.createScreenContainer();
    };

    createScreenContainer() {
        this.screenContainer = this.domTool.createDom('div');
        this.screenContainer.id = 'screen-container';
        this.domTool.appendElement(this.main, this.screenContainer);
    };
};

export default Main;