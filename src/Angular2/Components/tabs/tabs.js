var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var core_2 = require('angular2/core');
var Tabs = (function () {
    function Tabs(locationObj) {
        this.locationObj = locationObj;
        this.tabs = [];
        this.location = locationObj;
    }
    Tabs.prototype.selectTab = function (tab) {
        _deactivateAllTabs(this.tabs);
        tab.active = true;
        function _deactivateAllTabs(tabs) {
            tabs.forEach(function (tab) { return tab.active = false; });
        }
    };
    Tabs.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    Tabs.prototype.getCurrentLocation = function () {
        return this.location.path();
    };
    Tabs = __decorate([
        core_1.Component({
            selector: 'tabs',
            templateUrl: './components/tabs/Tabs.html'
        }),
        __param(0, core_2.Inject(router_1.Location))
    ], Tabs);
    return Tabs;
})();
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map