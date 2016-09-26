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
export class BsMediaObject {
    constructor() {
        this.imageWidth = 160;
        this.imageHeight = 90;
    }
    get style() {
        return `
            min-height: ${this.imageHeight}px;
            max-height: ${this.imageHeight}px;
            min-width: ${this.imageWidth}px;
            max-width: ${this.imageWidth}px;
        `;
    }
}
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsMediaObject.prototype, "direction", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsMediaObject.prototype, "imageSource", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsMediaObject.prototype, "imageWidth", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Number)
], BsMediaObject.prototype, "imageHeight", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsMediaObject.prototype, "imageAltText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsMediaObject.prototype, "heading", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], BsMediaObject.prototype, "link", void 0);
__decorate([
    computedFrom("imageWidth", "imageHeight"), 
    __metadata('design:type', String)
], BsMediaObject.prototype, "style", null);

//# sourceMappingURL=bs-media-object.js.map
