var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var register_1 = require('../location/register');
var DynamicLoading = (function () {
    function DynamicLoading() {
    }
    DynamicLoading = __decorate([
        core_1.Component({
            selector: 'lazy-loaded',
            templateUrl: './components/lazyloading/dynamicLoading.html',
            directives: [register_1.Register]
        })
    ], DynamicLoading);
    return DynamicLoading;
})();
exports.DynamicLoading = DynamicLoading;
//# sourceMappingURL=dynamicLoading.js.map