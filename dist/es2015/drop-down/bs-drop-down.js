var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, containerless } from 'aurelia-framework';
import { DOM } from 'aurelia-pal';
export let BsDropDown = class BsDropDown {
    constructor(dom) {
        this.dom = dom;
        this.style = "default";
        document.addEventListener("click", () => { this.opened = false; });
    }
    toggle() {
        this.opened = !this.opened;
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsDropDown.prototype, "label", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsDropDown.prototype, "style", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], BsDropDown.prototype, "opened", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], BsDropDown.prototype, "split", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Array)
], BsDropDown.prototype, "items", void 0);
BsDropDown = __decorate([
    inject(DOM),
    containerless, 
    __metadata('design:paramtypes', [Document])
], BsDropDown);

//# sourceMappingURL=bs-drop-down.js.map
