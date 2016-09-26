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
var bs_tab_1 = require('./bs-tab');
var BsTabItem = (function () {
    function BsTabItem(parentTab) {
        this.parentTab = parentTab;
    }
    BsTabItem.prototype.attached = function () {
        this.id = this.id || this.title.replace(' ', '');
        this.parentTab.addTab(this);
    };
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsTabItem.prototype, "id", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], BsTabItem.prototype, "active", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], BsTabItem.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsTabItem.prototype, "link", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsTabItem.prototype, "glyph", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsTabItem.prototype, "title", void 0);
    BsTabItem = __decorate([
        aurelia_framework_1.inject(aurelia_framework_1.Parent.of(bs_tab_1.BsTab)),
        aurelia_framework_1.containerless, 
        __metadata('design:paramtypes', [bs_tab_1.BsTab])
    ], BsTabItem);
    return BsTabItem;
}());
exports.BsTabItem = BsTabItem;

//# sourceMappingURL=bs-tab-item.js.map
