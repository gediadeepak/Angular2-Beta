var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var tabs_1 = require('../tabs/tabs');
var tab_1 = require('../tabs/tab');
var About = (function () {
    function About() {
    }
    About = __decorate([
        core_1.Component({
            selector: 'about',
            directives: [router_1.ROUTER_DIRECTIVES, tabs_1.Tabs, tab_1.Tab],
            templateUrl: './components/about/about.html'
        })
    ], About);
    return About;
})();
exports.About = About;
//# sourceMappingURL=about.js.map