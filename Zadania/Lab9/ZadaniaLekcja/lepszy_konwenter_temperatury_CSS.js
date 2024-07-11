export class CSS {
    classNames = [];
    inlineStyles = [];

    constructor(element) {
        this.element = element;
    }

    appendClass(name) {
        this.classNames.push(name);
        return this;
    }

    appendInlineStyle(ownproperty, value) {
        let o = {};
        o[ownproperty] = value;
        this.inlineStyles.push(o);
        return this;
    }

    build() {
        for (let c of this.classNames) {
            this.element.className += c + ' ';
        }
        for (let i of this.inlineStyles) {
            this.element.style[Object.getOwnPropertyNames(i)[0]] = i[Object.getOwnPropertyNames(i)[0]];
        }
    }
}