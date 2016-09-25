var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, autoinject, computedFrom } from 'aurelia-framework';
export let BsTextArea = class BsTextArea {
    constructor() {
        this.windowResized = (event) => {
            if (this.value) {
                this.value += " ";
                setTimeout(() => {
                    this.value = this.value.trim();
                });
            }
        };
        this.placeholder = "";
        window.addEventListener('resize', this.windowResized, true);
    }
    calculateContentHeight(lineHeight) {
        var origHeight = this.element.style.height;
        var height = this.element.offsetHeight;
        var scrollHeight = this.element.scrollHeight;
        var overflow = this.element.style.overflow;
        if (height >= scrollHeight) {
            this.element.style.height = (height + lineHeight) + 'px';
            this.element.style.overflow = 'hidden';
            if (scrollHeight < this.element.scrollHeight) {
                while (this.element.offsetHeight >= this.element.scrollHeight)
                    this.element.style.height = (height -= lineHeight) + 'px';
                while (this.element.offsetHeight < this.element.scrollHeight)
                    this.element.style.height = (height++) + 'px';
                this.element.style.height = origHeight;
                this.element.style.overflow = overflow;
                return height;
            }
        }
        return scrollHeight;
    }
    get requiredRows() {
        if (this.rows)
            return this.rows;
        var lineHeight = parseInt(window.getComputedStyle(this.element).lineHeight, 10);
        var scrollHeight = this.calculateContentHeight(lineHeight);
        var rows = Math.ceil(scrollHeight / lineHeight);
        var min = this.minRows || 1;
        var max = this.maxRows || 10000;
        return Math.min(max, Math.max(min, rows));
    }
};
__decorate([
    bindable, 
    __metadata('design:type', HTMLElement)
], BsTextArea.prototype, "element", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsTextArea.prototype, "rows", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsTextArea.prototype, "minRows", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsTextArea.prototype, "maxRows", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsTextArea.prototype, "value", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsTextArea.prototype, "placeholder", void 0);
__decorate([
    computedFrom("value", "element"), 
    __metadata('design:type', Number)
], BsTextArea.prototype, "requiredRows", null);
BsTextArea = __decorate([
    autoinject(), 
    __metadata('design:paramtypes', [])
], BsTextArea);

//# sourceMappingURL=bs-textarea.js.map
