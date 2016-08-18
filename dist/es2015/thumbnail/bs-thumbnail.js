var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable } from 'aurelia-framework';
export class BsThumbnail {
}
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsThumbnail.prototype, "link", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsThumbnail.prototype, "imageSource", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsThumbnail.prototype, "imageAltText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsThumbnail.prototype, "xsWidth", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsThumbnail.prototype, "smWidth", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsThumbnail.prototype, "mdWidth", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsThumbnail.prototype, "lgWidth", void 0);

//# sourceMappingURL=bs-thumbnail.js.map
