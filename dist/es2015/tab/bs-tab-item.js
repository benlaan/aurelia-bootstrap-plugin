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
import { BsTab } from './bs-tab';
export let BsTabItem = class BsTabItem {
    constructor(parentTab) {
        this.parentTab = parentTab;
    }
    attached() {
        this.id = this.id || this.title.replace(' ', '');
        this.parentTab.addTab(this);
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsTabItem.prototype, "id", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], BsTabItem.prototype, "active", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], BsTabItem.prototype, "disabled", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsTabItem.prototype, "link", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsTabItem.prototype, "glyph", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsTabItem.prototype, "title", void 0);
BsTabItem = __decorate([
    inject(Parent.of(BsTab)),
    containerless, 
    __metadata('design:paramtypes', [BsTab])
], BsTabItem);

//# sourceMappingURL=bs-tab-item.js.map
