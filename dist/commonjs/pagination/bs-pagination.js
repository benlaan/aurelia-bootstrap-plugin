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
var BsPagination = (function () {
    function BsPagination() {
        this._items = null;
        this.firstPageLink = "#";
        this.lastPageLink = "#";
    }
    BsPagination.prototype.calculateItems = function () {
        if (this.pageCount <= this.maxDisplayCount) {
            var result = [];
            for (var index = 1; index <= this.pageCount; index++)
                result.push(index);
            return result;
        }
        var result = [];
        var half = this.maxDisplayCount / 2;
        for (var index = 1; index <= half; index++)
            result.push(index);
        result.push("...");
        for (var index = this.pageCount - half + 1; index <= this.pageCount; index++)
            result.push(index);
        return result;
    };
    BsPagination.prototype.getLinkFormat = function (index) {
        return this.linkFormat.replace(/\{\{(.*?)\}\}/, index.toString());
    };
    Object.defineProperty(BsPagination.prototype, "items", {
        get: function () {
            if (this._items != null && this.pageCount && this.maxDisplayCount)
                return this._items;
            this._items = this.calculateItems();
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Number)
    ], BsPagination.prototype, "pageCount", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Number)
    ], BsPagination.prototype, "maxDisplayCount", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsPagination.prototype, "linkFormat", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsPagination.prototype, "firstPageLink", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsPagination.prototype, "lastPageLink", void 0);
    __decorate([
        aurelia_framework_1.computedFrom("pageCount", "maxDisplayCount"), 
        __metadata('design:type', Array)
    ], BsPagination.prototype, "items", null);
    return BsPagination;
}());
exports.BsPagination = BsPagination;

//# sourceMappingURL=bs-pagination.js.map
