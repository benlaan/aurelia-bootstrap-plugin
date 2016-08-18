System.register(['aurelia-framework'], function(exports_1, context_1) {
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
    var aurelia_framework_1;
    var BsProgressBar;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            BsProgressBar = (function () {
                function BsProgressBar() {
                    this.min = 0;
                    this.max = 100;
                    this.progress = 0;
                    this.striped = false;
                    this.active = false;
                }
                Object.defineProperty(BsProgressBar.prototype, "width", {
                    get: function () {
                        return (this.progress - this.min) * 100 / (this.max - this.min);
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Number)
                ], BsProgressBar.prototype, "min", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Number)
                ], BsProgressBar.prototype, "max", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Number)
                ], BsProgressBar.prototype, "progress", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], BsProgressBar.prototype, "style", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], BsProgressBar.prototype, "striped", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], BsProgressBar.prototype, "active", void 0);
                return BsProgressBar;
            }());
            exports_1("BsProgressBar", BsProgressBar);
        }
    }
});

//# sourceMappingURL=bs-progress-bar.js.map
