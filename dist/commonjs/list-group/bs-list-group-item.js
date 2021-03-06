"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require('aurelia-framework');
var BsListGroupItem = (function () {
    function BsListGroupItem() {
    }
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Array)
    ], BsListGroupItem.prototype, "items", void 0);
    BsListGroupItem = __decorate([
        aurelia_framework_1.containerless, 
        __metadata('design:paramtypes', [])
    ], BsListGroupItem);
    return BsListGroupItem;
}());
exports.BsListGroupItem = BsListGroupItem;

//# sourceMappingURL=bs-list-group-item.js.map
