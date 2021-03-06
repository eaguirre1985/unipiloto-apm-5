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
var product_service_1 = require('../services/product.service');
var router_1 = require("@angular/router");
var ProductComponent = (function () {
    function ProductComponent(router, ProductService) {
        this.router = router;
        this.ProductService = ProductService;
        this.title = 'Products';
    }
    ProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.ProductService.getProducts().then(function (products) { return _this.products = products; });
    };
    ProductComponent.prototype.onSelect = function (product) {
        this.selected = product;
    };
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductComponent.prototype.gotoDetail = function () {
        this.router.navigate(['product/detail/', this.selected.id]);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'products',
            templateUrl: 'app/templates/product-list.html',
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product-list.component.js.map