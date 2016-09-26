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
    var BsTab;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            BsTab = (function () {
                function BsTab() {
                    this._items = [];
                }
                BsTab.prototype.foreach = function (items, action) {
                    Array.prototype.forEach.call(items, action);
                };
                BsTab.prototype.activateTab = function (tab) {
                    this.foreach(this._items, function (t) { return t.active = (t.id == tab.id); });
                };
                BsTab.prototype.addTab = function (tab) {
                    this._items.push(tab);
                };
                BsTab = __decorate([
                    aurelia_framework_1.containerless, 
                    __metadata('design:paramtypes', [])
                ], BsTab);
                return BsTab;
            }());
            exports_1("BsTab", BsTab);
        }
    }
});

//# sourceMappingURL=bs-tab.js.map
