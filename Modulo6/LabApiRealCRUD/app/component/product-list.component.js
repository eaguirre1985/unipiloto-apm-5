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
var product_service_1 = require("../service/product.service");
var ProductComponent = (function () {
    function ProductComponent(productService) {
        this.productService = productService;
        this.title = "PRODUCTS";
        this.product = {
            id: 0,
            name: "",
            type: "",
            quantity: 0,
            price: 0,
            url: ""
        };
    }
    ProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
        }, function (error) {
            console.log(error);
        });
    };
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductComponent.prototype.onSelect = function (product) {
        this.selectedproduct = product;
    };
    ProductComponent.prototype.add = function (product) {
        var _this = this;
        product = product;
        if (!product.name) {
            return;
        }
        this.productService.create(product)
            .subscribe(function (product) {
            _this.products.push(product);
            _this.selectedproduct = null;
        });
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/product-list.html',
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product-list.component.js.map