var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, computedFrom } from 'aurelia-framework';
export class BsPagination {
    constructor() {
        this._items = null;
        this.firstPageLink = "#";
        this.lastPageLink = "#";
    }
    calculateItems() {
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
    }
    getLinkFormat(index) {
        return this.linkFormat.replace(/\{\{(.*?)\}\}/, index.toString());
    }
    get items() {
        if (this._items != null && this.pageCount && this.maxDisplayCount)
            return this._items;
        this._items = this.calculateItems();
        return this._items;
    }
}
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsPagination.prototype, "pageCount", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsPagination.prototype, "maxDisplayCount", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsPagination.prototype, "linkFormat", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsPagination.prototype, "firstPageLink", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsPagination.prototype, "lastPageLink", void 0);
__decorate([
    computedFrom("pageCount", "maxDisplayCount"), 
    __metadata('design:type', Array)
], BsPagination.prototype, "items", null);

//# sourceMappingURL=bs-pagination.js.map
