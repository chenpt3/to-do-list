class DomTool {
  constructor() {
    this.dom = document;
  };

    addClass(element, className) {
        element.classList.add(className);
    };

    removeClass(element, className) {
        element.classList.remove(className);
    };

    toggleClass(element, className) {
        element.classList.toggle(className);
    };

    addText(element, text) {
        element.textContent = text;
    };

    addEventListener(element, event, callback) {
        element.addEventListener(event, callback);
    };

    removeEventListener(element, event, callback) {
        element.removeEventListener(event, callback);
    };

    appendChild(parent, child) {
        parent.appendChild(child);
    };

    removeChild(parent, child) {
        parent.removeChild(child);
    };

    createElement(tag) {
        return this.dom.createElement(tag);
    };

    appentElement(parent, element) {
        parent.appendChild(element);
    };
};

export default DomTool;