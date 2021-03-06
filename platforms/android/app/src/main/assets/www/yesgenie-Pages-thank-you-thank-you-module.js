(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-thank-you-thank-you-module"],{

/***/ "./src/app/yesgenie/Pages/thank-you/thank-you.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/yesgenie/Pages/thank-you/thank-you.module.ts ***!
  \**************************************************************/
/*! exports provided: ThankYouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageModule", function() { return ThankYouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thank-you.page */ "./src/app/yesgenie/Pages/thank-you/thank-you.page.ts");








var routes = [
    {
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_7__["ThankYouPage"]
    }
];
var ThankYouPageModule = /** @class */ (function () {
    function ThankYouPageModule() {
    }
    ThankYouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_7__["ThankYouPage"]]
        })
    ], ThankYouPageModule);
    return ThankYouPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/thank-you/thank-you.page.html":
/*!**************************************************************!*\
  !*** ./src/app/yesgenie/Pages/thank-you/thank-you.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title class=\"ecom-title\"> {{'Thankyou'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"goToSearchPage()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" (click)=\"goToCartPage()\">\n        <ion-icon class=\"cart-badge\" name=\"cart\"></ion-icon>\n        <ion-badge>{{shared.cartquantity}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <ion-card>\n    <ion-card-content>\n      <ion-icon name=\"checkmark-circle\"></ion-icon>\n      <h3>{{'Thank You'| translate }}</h3>\n      <p>{{'Thank you for shopping with us.'| translate }}</p>\n      <ion-button class=\"order-btn\" expand=\"block\" (click)=\"goToOrderPage()\">{{'My Orders'| translate }}</ion-button>\n      <ion-button class=\"con-btn\" (click)=\"goToProductPage()\" expand=\"block\" fill=\"clear\">{{'Continue Shopping'| translate }}</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/thank-you/thank-you.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/yesgenie/Pages/thank-you/thank-you.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-title ion-img {\n    height: 25px; }\n  ion-header ion-toolbar ion-buttons ion-icon {\n    font-size: 22px; }\n  ion-header ion-toolbar ion-buttons ion-badge {\n    position: absolute;\n    right: 3px;\n    bottom: 14px; }\n  ion-content ion-card {\n  background-color: white;\n  text-align: center; }\n  ion-content ion-card ion-card-content ion-icon {\n    margin-top: 15px;\n    color: green;\n    font-size: 80px; }\n  ion-content ion-card ion-card-content h3 {\n    font-size: 20px !important;\n    margin-top: 15px !important;\n    font-family: 'roboto-regular' !important;\n    color: black; }\n  ion-content ion-card ion-card-content p {\n    font-size: 14px !important;\n    font-family: 'roboto-regular' !important;\n    color: black; }\n  ion-content ion-card ion-card-content ion-button {\n    margin-top: 15px; }\n  .order-btn {\n  --color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvdGhhbmsteW91L3RoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxhQUFRLEVBQUE7RUFIaEI7SUFLWSxlQUFlLEVBQUE7RUFMM0I7SUFTZ0IsWUFBWSxFQUFBO0VBVDVCO0lBY2dCLGVBQWUsRUFBQTtFQWQvQjtJQWlCZ0Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFLNUI7RUFFUSx1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7RUFIMUI7SUFNZ0IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlLEVBQUE7RUFSL0I7SUFXZ0IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix3Q0FBd0M7SUFDeEMsWUFBWSxFQUFBO0VBZDVCO0lBaUJnQiwwQkFBMEI7SUFDMUIsd0NBQXdDO0lBQ3hDLFlBQVksRUFBQTtFQW5CNUI7SUFzQmdCLGdCQUFnQixFQUFBO0VBT2hDO0VBQ0ksY0FBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAveWVzZ2VuaWUvUGFnZXMvdGhhbmsteW91L3RoYW5rLXlvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6YmxhY2s7XG4gICAgICAgIC0tY29sb3I6d2hpdGU7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi10aXRsZXtcbiAgICAgICAgICAgIGlvbi1pbWd7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJhZGdle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogM3B4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1jb250ZW50e1xuICAgIGlvbi1jYXJke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLXJlZ3VsYXInICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3JvYm90by1yZWd1bGFyJyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgICAgIC8vIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ub3JkZXItYnRue1xuICAgIC0tY29sb3I6IHdoaXRlO1xufVxuLmNvbi1idG57XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC8vIC0tY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/thank-you/thank-you.page.ts":
/*!************************************************************!*\
  !*** ./src/app/yesgenie/Pages/thank-you/thank-you.page.ts ***!
  \************************************************************/
/*! exports provided: ThankYouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPage", function() { return ThankYouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");
/* harmony import */ var _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/shared-data/shared-data.service */ "./src/app/yesgenie/providers/shared-data/shared-data.service.ts");





var ThankYouPage = /** @class */ (function () {
    function ThankYouPage(menuCtrl, config, shared, nav) {
        this.menuCtrl = menuCtrl;
        this.config = config;
        this.shared = shared;
        this.nav = nav;
    }
    ThankYouPage.prototype.goToProductPage = function () {
        this.nav.navigateForward("bs-products");
    };
    ThankYouPage.prototype.goToCartPage = function () {
        this.nav.navigateForward("bs-cart");
    };
    ThankYouPage.prototype.goToOrderPage = function () {
        this.nav.navigateForward("bs-my-orders");
    };
    ThankYouPage.prototype.goToSearchPage = function () {
        this.nav.navigateForward("bs-search");
    };
    ThankYouPage.prototype.ngOnInit = function () {
    };
    ThankYouPage.prototype.pinchEvent = function (e) {
        this.nav.navigateForward("ui-templates-details");
    };
    ThankYouPage.prototype.ionViewWillEnter = function () {
        // For Menu 1 and Menu 2 Controller
        this.menuCtrl.enable(false, 'Menu1');
        this.menuCtrl.enable(false, 'Menu3');
        this.menuCtrl.enable(true, 'Menu2');
    };
    ThankYouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thank-you',
            template: __webpack_require__(/*! ./thank-you.page.html */ "./src/app/yesgenie/Pages/thank-you/thank-you.page.html"),
            styles: [__webpack_require__(/*! ./thank-you.page.scss */ "./src/app/yesgenie/Pages/thank-you/thank-you.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ThankYouPage);
    return ThankYouPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-thank-you-thank-you-module.js.map