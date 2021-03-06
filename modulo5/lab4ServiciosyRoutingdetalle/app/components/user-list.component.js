"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require('../services/user.service');
var router_1 = require("@angular/router");
var UserComponent = (function () {
    function UserComponent(router, UserService) {
        this.router = router;
        this.UserService = UserService;
        this.title = 'Users';
    }
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.UserService.getUsers().then(function (users) { return _this.users = users; });
    };
    UserComponent.prototype.onSelect = function (user) {
        this.selected = user;
    };
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.gotoDetail = function () {
        this.router.navigate(['user/detail/', this.selected.id]);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: 'app/templates/user-list.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user-list.component.js.map