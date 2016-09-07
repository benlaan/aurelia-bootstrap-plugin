var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var BsTextArea = (function () {
        function BsTextArea(bsElement) {
            var _this = this;
            this.bsElement = bsElement;
            this.windowResized = function (event) {
                var oldValue = _this.value;
                _this.value = "";
                setTimeout(function () {
                    _this.value = oldValue;
                });
            };
            this.placeholder = "";
            window.addEventListener('resize', this.windowResized, true);
        }
        BsTextArea.prototype.calculateContentHeight = function (lineHeight) {
            var origHeight = this.element.style.height;
            var height = this.element.offsetHeight;
            var scrollHeight = this.element.scrollHeight;
            var overflow = this.element.style.overflow;
            if (height >= scrollHeight) {
                this.element.style.height = (height + lineHeight) + 'px';
                this.element.style.overflow = 'hidden';
                if (scrollHeight < this.element.scrollHeight) {
                    while (this.element.offsetHeight >= this.element.scrollHeight)
                        this.element.style.height = (height -= lineHeight) + 'px';
                    while (this.element.offsetHeight < this.element.scrollHeight)
                        this.element.style.height = (height++) + 'px';
                    this.element.style.height = origHeight;
                    this.element.style.overflow = overflow;
                    return height;
                }
            }
            return scrollHeight;
        };
        Object.defineProperty(BsTextArea.prototype, "requiredRows", {
            get: function () {
                if (this.rows)
                    return this.rows;
                var lineHeight = parseInt(window.getComputedStyle(this.element).lineHeight, 10);
                var scrollHeight = this.calculateContentHeight(lineHeight);
                var rows = Math.ceil(scrollHeight / lineHeight);
                return Math.min(this.maxRows || 10000, Math.max(this.minRows || 1, rows));
            },
            enumerable: true,
            configurable: true
        });
        BsTextArea.prototype.keyup = function () {
            this.element.dispatchEvent(new CustomEvent("keyup", { bubbles: true }));
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', HTMLElement)
        ], BsTextArea.prototype, "element", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], BsTextArea.prototype, "rows", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], BsTextArea.prototype, "minRows", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], BsTextArea.prototype, "maxRows", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], BsTextArea.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], BsTextArea.prototype, "placeholder", void 0);
        __decorate([
            aurelia_framework_1.computedFrom("value", "element"), 
            __metadata('design:type', Number)
        ], BsTextArea.prototype, "requiredRows", null);
        BsTextArea = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [Element])
        ], BsTextArea);
        return BsTextArea;
    }());
    exports.BsTextArea = BsTextArea;
});

//# sourceMappingURL=bs-textarea.js.map
