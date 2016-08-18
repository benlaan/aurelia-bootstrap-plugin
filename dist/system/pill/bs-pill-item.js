System.register(['aurelia-framework', './bs-pill'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, bs_pill_1;
    var BsPillItem;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (bs_pill_1_1) {
                bs_pill_1 = bs_pill_1_1;
            }],
        execute: function() {
            BsPillItem = (function () {
                function BsPillItem(parentPill) {
                    this.parentPill = parentPill;
                }
                BsPillItem.prototype.attached = function () {
                    this.id = this.id || this.title.replace(' ', '');
                    this.parentPill.addPill(this);
                };
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], BsPillItem.prototype, "id", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], BsPillItem.prototype, "active", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], BsPillItem.prototype, "disabled", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], BsPillItem.prototype, "link", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], BsPillItem.prototype, "glyph", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], BsPillItem.prototype, "title", void 0);
                BsPillItem = __decorate([
                    aurelia_framework_1.inject(aurelia_framework_1.Parent.of(bs_pill_1.BsPill)),
                    aurelia_framework_1.containerless, 
                    __metadata('design:paramtypes', [bs_pill_1.BsPill])
                ], BsPillItem);
                return BsPillItem;
            }());
            exports_1("BsPillItem", BsPillItem);
        }
    }
});

//# sourceMappingURL=bs-pill-item.js.map
