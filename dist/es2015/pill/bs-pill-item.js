var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, Parent, bindable, containerless } from 'aurelia-framework';
import { BsPill } from './bs-pill';
export let BsPillItem = class BsPillItem {
    constructor(parentPill) {
        this.parentPill = parentPill;
    }
    attached() {
        this.id = this.id || this.title.replace(' ', '');
        this.parentPill.addPill(this);
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsPillItem.prototype, "id", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], BsPillItem.prototype, "active", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], BsPillItem.prototype, "disabled", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsPillItem.prototype, "link", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsPillItem.prototype, "glyph", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsPillItem.prototype, "title", void 0);
BsPillItem = __decorate([
    inject(Parent.of(BsPill)),
    containerless, 
    __metadata('design:paramtypes', [BsPill])
], BsPillItem);

//# sourceMappingURL=bs-pill-item.js.map
