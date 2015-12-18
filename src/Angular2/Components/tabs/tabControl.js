var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
//our root app component
var core_1 = require('angular2/core');
var tabs_1 = require('./tabs');
var tab_1 = require('./tab');
var TabControl = (function () {
    function TabControl() {
    }
    TabControl = __decorate([
        core_1.Component({
            selector: 'tab-control',
            templateUrl: './components/tabs/tabExample.html',
            directives: [tabs_1.Tabs, tab_1.Tab]
        })
    ], TabControl);
    return TabControl;
})();
exports.TabControl = TabControl;
//# sourceMappingURL=tabControl.js.map