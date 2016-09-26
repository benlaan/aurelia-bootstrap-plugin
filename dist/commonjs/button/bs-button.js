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
(function (ButtonSize) {
    ButtonSize[ButtonSize["ExtraSmall"] = 0] = "ExtraSmall";
    ButtonSize[ButtonSize["Small"] = 1] = "Small";
    ButtonSize[ButtonSize["Large"] = 2] = "Large";
})(exports.ButtonSize || (exports.ButtonSize = {}));
var ButtonSize = exports.ButtonSize;
var BsButton = (function () {
    function BsButton() {
        this.style = "default";
    }
    Object.defineProperty(BsButton.prototype, "sizeClass", {
        get: function () {
            switch (ButtonSize[this.size]) {
                case ButtonSize.ExtraSmall:
                    return "btn-xs";
                case ButtonSize.Small:
                    return "btn-sm";
                case ButtonSize.Large:
                    return "btn-lg";
                default:
                    return "";
            }
        },
        enumerable: true,
        configurable: true
    });
    BsButton.prototype.click = function () {
        this.press(new CustomEvent("press"));
    };
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsButton.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsButton.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsButton.prototype, "style", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsButton.prototype, "glyph", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], BsButton.prototype, "link", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Function)
    ], BsButton.prototype, "press", void 0);
    BsButton = __decorate([
        aurelia_framework_1.containerless,
        aurelia_framework_1.autoinject, 
        __metadata('design:paramtypes', [])
    ], BsButton);
    return BsButton;
}());
exports.BsButton = BsButton;

//# sourceMappingURL=bs-button.js.map
