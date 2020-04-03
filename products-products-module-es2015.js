(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/products.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/products.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngFor=\"let product of (products | async)\">\n  <img src=\"{{ product.imgUrl }}\">\n  <br>\n  {{ product.name }}\n</div> -->\n<!-- <mat-card class=\"example-card\" *ngFor=\"let product of (products | async)\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\">\n      <img mat-card-image src=\"{{ product.imgUrl }}\" alt=\"{{ product.name }}\">\n    </div>\n    <mat-card-title>{{ product.name }}</mat-card-title>\n    <mat-card-subtitle>Product</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"{{ product.imgUrl }}\" alt=\"{{ product.name }}\">\n  <mat-card-content>\n    <p>\n      {{ product.name }} : $ {{ product.price }}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card> -->\n<div class=\"card\" *ngFor=\"let product of (products | async)\">\n\n  <img class=\"card-image\" src=\"{{ product.imgUrl }}\" alt=\"{{ product.name }}\">\n\n  <div class=\"card-text\">\n    <span class=\"date\">4 days ago</span>\n    <h2>{{ product.name }}</h2>\n    <p>{{ product.description }}</p>\n  </div>\n  <div class=\"card-stats\">\n    <div class=\"stat\">\n      <div class=\"value\"><sup></sup></div>\n      <div class=\"type\"></div>\n    </div>\n    <div class=\"stat border\">\n      <div class=\"value\">Add to cart</div>\n      <!-- <div class=\"type\">views</div> -->\n    </div>\n    <div class=\"stat\">\n      <div class=\"value\"></div>\n      <div class=\"type\"></div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/products/product-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/products/product-data.service.ts ***!
  \**************************************************/
/*! exports provided: ProductDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDataService", function() { return ProductDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductDataService = class ProductDataService {
    constructor($http) {
        this.$http = $http;
    }
    getAllProducts() {
        return this.$http.get('products.json');
    }
};
ProductDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductDataService);



/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products/products.component.ts");




const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }
];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductsRoutingModule);



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products/products.component.ts");
/* harmony import */ var _product_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-data.service */ "./src/app/products/product-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material-module */ "./src/app/material-module.ts");








let ProductsModule = class ProductsModule {
};
ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["DemoMaterialModule"]
        ],
        providers: [_product_data_service__WEBPACK_IMPORTED_MODULE_5__["ProductDataService"]]
    })
], ProductsModule);



/***/ }),

/***/ "./src/app/products/products/products.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/products/products/products.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  display: grid;\n  grid-template-columns: 300px;\n  grid-template-rows: 210px 210px 80px;\n  grid-template-areas: \"image\" \"text\" \"stats\";\n  border-radius: 18px;\n  background: white;\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);\n  font-family: \"Montserrat\";\n  text-align: center;\n  width: 300px;\n  display: inline-block;\n}\n\nimg {\n  grid-area: image;\n}\n\n.card-text {\n  grid-area: text;\n}\n\n.card-stats {\n  grid-area: stats;\n}\n\n.card-image {\n  grid-area: image;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.card-text {\n  grid-area: text;\n  margin: 25px;\n}\n\n.card-text .date {\n  color: #ff076e;\n  font-size: 13px;\n}\n\n.card-text p {\n  color: grey;\n  font-size: 15px;\n  font-weight: 300;\n}\n\n.card-text h2 {\n  margin-top: 0px;\n  font-size: 28px;\n}\n\n.card-stats {\n  grid-area: stats;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #ff076e;\n}\n\n.card-stats .stat {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  color: white;\n  padding: 10px;\n}\n\n.card:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);\n}\n\n.card {\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n  cursor: pointer;\n  margin: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMvRzpcXEFuZ3VsYXIgUHJvamVjdHNcXE9ubGluZSBTaG9wcGluZ1xcZXNob3BwZXIvc3JjXFxhcHBcXHByb2R1Y3RzXFxwcm9kdWN0c1xccHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7QUNmRjs7QURrQkE7RUFDRSxnQkFBQTtBQ2ZGOztBRGlCQTtFQUNFLGVBQUE7QUNkRjs7QURnQkE7RUFDRSxnQkFBQTtBQ2JGOztBRGdCQTtFQUNFLGdCQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNkRjs7QURpQkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ2RGOztBRGdCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDYkY7O0FEZUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWkY7O0FEY0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ1hGOztBRGNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ1hGOztBRGNBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1hGOztBRGNBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO0FDWEY7O0FEYUE7RUFDRSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmV4YW1wbGUtY2FyZCB7XHJcbi8vICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4vLyAgIG1heC13aWR0aDogNDAwcHg7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyAgIC8vIHdpZHRoOiAxMCU7XHJcbi8vICAgLy8gaGVpZ2h0OiA1JTtcclxuLy8gICBib3JkZXItcmFkaXVzOiAyNWVtO1xyXG4vLyAgIG1hcmdpbjogLjVlbTtcclxuLy8gICAvLyBwYWRkaW5nOiAuMjVlbTtcclxuLy8gfVxyXG5cclxuLmNhcmQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIxMHB4IDIxMHB4IDgwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWFnZVwiIFwidGV4dFwiIFwic3RhdHNcIjtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsMCwwLDAuOSk7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW1nIHtcclxuICBncmlkLWFyZWE6IGltYWdlO1xyXG59XHJcbi5jYXJkLXRleHQge1xyXG4gIGdyaWQtYXJlYTogdGV4dDtcclxufVxyXG4uY2FyZC1zdGF0cyB7XHJcbiAgZ3JpZC1hcmVhOiBzdGF0cztcclxufVxyXG5cclxuLmNhcmQtaW1hZ2Uge1xyXG4gIGdyaWQtYXJlYTogaW1hZ2U7XHJcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiaW1nMS5qcGdcIik7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xyXG4gIG1hcmdpbjogMjVweDtcclxufVxyXG4uY2FyZC10ZXh0IC5kYXRlIHtcclxuICBjb2xvcjogcmdiKDI1NSwgNywgMTEwKTtcclxuICBmb250LXNpemU6MTNweDtcclxufVxyXG4uY2FyZC10ZXh0IHAge1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGZvbnQtc2l6ZToxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLmNhcmQtdGV4dCBoMiB7XHJcbiAgbWFyZ2luLXRvcDowcHg7XHJcbiAgZm9udC1zaXplOjI4cHg7XHJcbn1cclxuXHJcbi5jYXJkLXN0YXRzIHtcclxuICBncmlkLWFyZWE6IHN0YXRzO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDcsIDExMCk7XHJcbn1cclxuXHJcbi5jYXJkLXN0YXRzIC5zdGF0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgwLDAsMCwwLjYpO1xyXG59XHJcbi5jYXJkIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG4iLCIuY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjEwcHggMjEwcHggODBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWFnZVwiIFwidGV4dFwiIFwic3RhdHNcIjtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW1nIHtcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIGdyaWQtYXJlYTogdGV4dDtcbn1cblxuLmNhcmQtc3RhdHMge1xuICBncmlkLWFyZWE6IHN0YXRzO1xufVxuXG4uY2FyZC1pbWFnZSB7XG4gIGdyaWQtYXJlYTogaW1hZ2U7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xuICBtYXJnaW46IDI1cHg7XG59XG5cbi5jYXJkLXRleHQgLmRhdGUge1xuICBjb2xvcjogI2ZmMDc2ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2FyZC10ZXh0IHAge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY2FyZC10ZXh0IGgyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5jYXJkLXN0YXRzIHtcbiAgZ3JpZC1hcmVhOiBzdGF0cztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmYwNzZlO1xufVxuXG4uY2FyZC1zdGF0cyAuc3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmNhcmQge1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/products/products/products.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/products/products/products.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-data.service */ "./src/app/products/product-data.service.ts");



let ProductsComponent = class ProductsComponent {
    constructor(productDataService) {
        this.productDataService = productDataService;
    }
    ngOnInit() {
        this.products = this.productDataService.getAllProducts();
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _product_data_service__WEBPACK_IMPORTED_MODULE_2__["ProductDataService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products/products.component.scss")).default]
    })
], ProductsComponent);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map