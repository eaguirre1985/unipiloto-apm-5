// import { Component } from '@angular/core';
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
//  export class Product {
//  	id: number;
//  	name: string;
//  	description: string;
//  	type: string;
//  	price: number;
//  	quantity: number;
//  }
// @Component({
//   selector: 'my-app',
//   templateUrl: 'app/templates/product.html'
// })
// export class AppComponent {
// 	product: Product = {
// 		id: 1,
// 		name: "Galax7 7",
// 		description: "Granada de mano",
// 		type: "smartphone",
// 		price: 500000,
// 		quantity: 10
// 	}
// }
var core_1 = require('@angular/core');
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Mis productos";
        this.products = PRODUCTS;
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selected = product;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/product.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var PRODUCTS = [
    {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    }
];
//# sourceMappingURL=app.component.js.map