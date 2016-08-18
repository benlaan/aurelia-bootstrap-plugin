var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, containerless } from 'aurelia-framework';
export let BsPill = class BsPill {
    constructor() {
        this._items = [];
        this.stackSize = 3;
    }
    foreach(items, action) {
        Array.prototype.forEach.call(items, action);
    }
    activatePill(pill) {
        this.foreach(this._items, t => t.active = (t.id == pill.id));
    }
    addPill(pill) {
        this._items.push(pill);
    }
};
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], BsPill.prototype, "stacked", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsPill.prototype, "stackSize", void 0);
BsPill = __decorate([
    containerless, 
    __metadata('design:paramtypes', [])
], BsPill);

//# sourceMappingURL=bs-pill.js.map
