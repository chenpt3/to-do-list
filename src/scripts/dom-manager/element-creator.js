/**
 * DOMElementCreator class is responsible for creating and manipulating DOM elements.
 * It initializes the body and container elements in the constructor.
 */
class DOMElementCreator {
    /**
     * Constructor initializes the body and container elements.
     */
    constructor() {
        this.body = document.querySelector('body');
        this.container = this.createElement('div', 'container', 'menu-open', 'menu-visible');
        this.appendChild(this.body, this.container);
    };

    /**
     * createElement function creates a new DOM element with the specified type, id, and classes.
     * @param {string} type - The type of the DOM element to create.
     * @param {string} id - The id of the DOM element to create.
     * @param {...string} classes - The classes to add to the DOM element.
     * @returns {HTMLElement} The created DOM element.
     */
    createElement(type, id, ...classes) {
        const element = document.createElement(type);
        element.id = id;
        classes.forEach(className => element.classList.add(className));
        return element;
    };

    /**
     * appendChild function appends a child element to a parent element.
     * @param {HTMLElement} parent - The parent element to append the child to.
     * @param {HTMLElement} child - The child element to append to the parent.
     * @returns {HTMLElement} The parent element.
     */
    appendChild(parent, child) {
        parent.appendChild(child);
        return parent;
    };

    /**
     * addText function adds text content to a DOM element.
     * @param {HTMLElement} element - The element to add text content to.
     * @param {string} text - The text content to add to the element.
     * @returns {HTMLElement} The element.
     */
    addText(element, text) {
        element.textContent = text;
        return element;
    };

    /**
     * addImage function adds an image source to a DOM element.
     * @param {HTMLElement} element - The element to add the image source to.
     * @param {string} src - The image source to add to the element.
     * @returns {HTMLElement} The element.
     */
    addImage(element, src) {
        element.src = src;
        return element;
    };
};

export default DOMElementCreator;