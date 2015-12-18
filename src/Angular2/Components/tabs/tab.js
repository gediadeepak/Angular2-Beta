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
var tabs_1 = require('./tabs');
var core_2 = require('angular2/core');
var Tab = (function () {
    function Tab(tabs) {
        this.tabs = tabs;
        this.active = this.active || false;
        tabs.addTab(this);
    }
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            inputs: ['title:tabTitle', 'active'],
            styles: ['.pane{padding: 1em; }'],
            templateUrl: './components/tabs/tab.html'
        }),
        __param(0, core_2.Inject(tabs_1.Tabs))
    ], Tab);
    return Tab;
})();
exports.Tab = Tab;
//# sourceMappingURL=tab.js.map