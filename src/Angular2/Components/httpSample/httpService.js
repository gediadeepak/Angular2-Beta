var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var Service = (function () {
    function Service(http) {
        this.http = http;
    }
    Service.prototype.getAllAchievements = function () {
        var path = '/angular2-beta/Api/home/getHomeContent';
        return this.http.get(path);
    };
    Service.prototype.mapResult = function (data) {
        this.result = data.data;
        console.log(this.result);
    };
    Service.prototype.logError = function (err) {
        console.log(err);
    };
    Service = __decorate([
        __param(0, core_1.Inject(http_1.Http))
    ], Service);
    return Service;
})();
exports.Service = Service;
//# sourceMappingURL=httpService.js.map