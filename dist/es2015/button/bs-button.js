var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, bindable, containerless } from 'aurelia-framework';
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize[ButtonSize["ExtraSmall"] = 0] = "ExtraSmall";
    ButtonSize[ButtonSize["Small"] = 1] = "Small";
    ButtonSize[ButtonSize["Large"] = 2] = "Large";
})(ButtonSize || (ButtonSize = {}));
export let BsButton = class BsButton {
    constructor(element) {
        this.element = element;
        this.style = "default";
    }
    get sizeClass() {
        switch (ButtonSize[this.size]) {
            case ButtonSize.ExtraSmall:
                return "btn-xs";
            case ButtonSize.Small:
                return "btn-sm";
            case ButtonSize.Large:
                return "btn-lg";
            default:
                return "";
        }
    }
    click() {
        this.element.dispatchEvent(new CustomEvent("click", { bubbles: true }));
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsButton.prototype, "size", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsButton.prototype, "class", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsButton.prototype, "style", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsButton.prototype, "glyph", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsButton.prototype, "link", void 0);
BsButton = __decorate([
    containerless,
    autoinject, 
    __metadata('design:paramtypes', [Element])
], BsButton);

//# sourceMappingURL=bs-button.js.map
