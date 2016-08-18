System.register(['aurelia-framework', 'aurelia-pal'], function(exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_pal_1;
    var BsDropDown;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            }],
        execute: function() {
            BsDropDown = (function () {
                function BsDropDown(dom) {
                    var _this = this;
                    this.dom = dom;
                    this.style = "default";
                    document.addEventListener("click", function () { _this.opened = false; });
                }
                BsDropDown.prototype.toggle = function () {
                    this.opened = !this.opened;
                };
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], BsDropDown.prototype, "label", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], BsDropDown.prototype, "style", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], BsDropDown.prototype, "opened", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], BsDropDown.prototype, "split", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Array)
                ], BsDropDown.prototype, "items", void 0);
                BsDropDown = __decorate([
                    aurelia_framework_1.inject(aurelia_pal_1.DOM),
                    aurelia_framework_1.containerless, 
                    __metadata('design:paramtypes', [Document])
                ], BsDropDown);
                return BsDropDown;
            }());
            exports_1("BsDropDown", BsDropDown);
        }
    }
});

//# sourceMappingURL=bs-drop-down.js.map
