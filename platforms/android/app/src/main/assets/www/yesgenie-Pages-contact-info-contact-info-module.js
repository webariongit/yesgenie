(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-contact-info-contact-info-module"],{

/***/ "./src/app/yesgenie/Pages/contact-info/contact-info.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/contact-info/contact-info.module.ts ***!
  \********************************************************************/
/*! exports provided: ContactInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoPageModule", function() { return ContactInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-info.page */ "./src/app/yesgenie/Pages/contact-info/contact-info.page.ts");







var routes = [
    {
        path: '',
        component: _contact_info_page__WEBPACK_IMPORTED_MODULE_6__["ContactInfoPage"]
    }
];
var ContactInfoPageModule = /** @class */ (function () {
    function ContactInfoPageModule() {
    }
    ContactInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_info_page__WEBPACK_IMPORTED_MODULE_6__["ContactInfoPage"]]
        })
    ], ContactInfoPageModule);
    return ContactInfoPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/contact-info/contact-info.page.html":
/*!********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/contact-info/contact-info.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"goToShippingAddress()\">\n        <ion-icon slot=\"icon-only\" src='assets/back.svg'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ecom-title\"> Contact Information </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content (pinch)=\"pinchEvent($event)\" class=\"content\">\n  <form>\n    <ion-item>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input value={{responseDatainfo?.username}} type=\"text\" name=\"shipping_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Address</ion-label>\n      <ion-input value={{responseDatainfo?.shipping_address_1}} type=\"text\" name=\"address\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Address</ion-label>\n      <ion-input value={{responseDatainfo?.shipping_address_2}} type=\"text\" name=\"address2\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Country</ion-label>\n      <ion-select value={{responseDatainfo?.shipping_country_id}} class=\"seloption ionselectborder\" (ionChange)=\"getallstate($event.detail.value)\">\n        <ion-select-option value=\"101\">India</ion-select-option>\n       </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">State</ion-label>\n      <ion-select value={{responseDatainfo?.shipping_state}} class=\"seloption ionselectborder\" (ionChange)=\"Citiesbystate($event.detail.value)\">\n        <ion-select-option *ngFor=\"let item of responseData\" value={{item.id}}>{{item.name}}</ion-select-option>\n       </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">City</ion-label>\n      <ion-select class=\"seloption ionselectborder\" value={{responseDatainfo?.shipping_city}}>\n        <ion-select-option *ngFor=\"let item of responseDataCity\" value={{item.id}}>{{item.name}}</ion-select-option>\n       </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Post code</ion-label>\n      <ion-input value={{responseDatainfo?.shipping_zip_code}} type=\"text\" name=\"shipping_postcode\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input value={{responseDatainfo?.shipping_email}} type=\"email\" name=\"shipping_email\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Phone</ion-label>\n      <ion-input value={{responseDatainfo?.shipping_phone_number}} type=\"number\" name=\"shipping_phone\" required></ion-input>\n    </ion-item>\n    \n  </form>\n</ion-content>\n<ion-footer>\n  <ion-button (click)=\"goToShippingMethod()\" expand=\"full\">\n    Save Changes\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/yesgenie/Pages/contact-info/contact-info.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/yesgenie/Pages/contact-info/contact-info.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --color:white; }\n  ion-header ion-toolbar ion-icon {\n    font-size: 16px; }\n  ion-content p {\n  font-size: 20px;\n  text-align: center;\n  padding-top: 16px; }\n  ion-content form {\n  padding-left: 16px;\n  padding-right: 16px; }\n  ion-content form ion-item {\n    --padding-start: 0; }\n  ion-content form ion-item ion-label {\n      color: gray; }\n  ion-content form ion-item ion-label p {\n        font-size: 16px !important;\n        padding-top: 0 !important; }\n  ion-content form ion-item ion-toggle {\n      padding-right: 0;\n      --background-checked:  var(--ion-color-primary) !important;\n      --handle-background-checked:  var(--ion-color-primary) !important; }\n  ion-content form ion-item:last-child {\n      margin-top: 10px !important; }\n  ion-content .para-label {\n  color: black !important; }\n  ion-footer ion-button {\n  margin: 0;\n  --color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL015IFN0dWZmL3llcy0yL3NyYy9hcHAveWVzZ2VuaWUvUGFnZXMvY29udGFjdC1pbmZvL2NvbnRhY3QtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxhQUFRLEVBQUE7RUFIaEI7SUFLWSxlQUFlLEVBQUE7RUFJM0I7RUFFUSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBO0VBSnpCO0VBT1Esa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBUjNCO0lBVVksa0JBQWdCLEVBQUE7RUFWNUI7TUFZZ0IsV0FBVyxFQUFBO0VBWjNCO1FBY29CLDBCQUEwQjtRQUMxQix5QkFBeUIsRUFBQTtFQWY3QztNQW1CZ0IsZ0JBQWdCO01BQ2hCLDBEQUFxQjtNQUNyQixpRUFBNEIsRUFBQTtFQXJCNUM7TUF3QmdCLDJCQUEyQixFQUFBO0VBeEIzQztFQTZCUSx1QkFBdUIsRUFBQTtFQUcvQjtFQUVRLFNBQVM7RUFFVCxjQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC95ZXNnZW5pZS9QYWdlcy9jb250YWN0LWluZm8vY29udGFjdC1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIC0tY29sb3I6d2hpdGU7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWNvbnRlbnR7XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIH1cbiAgICBmb3Jte1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi10b2dnbGV7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucGFyYS1sYWJlbHtcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuaW9uLWZvb3RlcntcbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/contact-info/contact-info.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/yesgenie/Pages/contact-info/contact-info.page.ts ***!
  \******************************************************************/
/*! exports provided: ContactInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoPage", function() { return ContactInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/yes-service.service */ "./src/app/yes-service.service.ts");
/* harmony import */ var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/config/config.service */ "./src/app/yesgenie/providers/config/config.service.ts");







var ContactInfoPage = /** @class */ (function () {
    function ContactInfoPage(loadingController, router, route, services, nav, menuCtrl, config, translate, toastCtrl) {
        this.loadingController = loadingController;
        this.router = router;
        this.route = route;
        this.services = services;
        this.nav = nav;
        this.menuCtrl = menuCtrl;
        this.config = config;
        this.toastCtrl = toastCtrl;
    }
    ContactInfoPage.prototype.ngOnInit = function () {
    };
    ContactInfoPage.prototype.ionViewWillEnter = function () {
        var userDetails = localStorage.getItem('userdata');
        this.userdata = JSON.parse(userDetails);
        this.token = this.userdata.token;
        console.log(this.token);
        this.Personalinfo();
    };
    ContactInfoPage.prototype.Personalinfo = function () {
        var _this = this;
        var userData = 'token=' + this.token;
        console.log(userData);
        this.services.Getpersonalinfo(userData).subscribe(function (result) {
            _this.responseDatainfo = result.response[0];
            console.log(_this.responseDatainfo);
            if (_this.responseDatainfo.Status === 0) {
                _this.presentToast(_this.responseDatainfo.Message);
            }
            else {
                //  console.log(this.responseData);
            }
        }, function (error) {
        });
    };
    ContactInfoPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactInfoPage.prototype.getallstate = function (state) {
        var _this = this;
        this.services.StateByCountry(state).subscribe(function (result) {
            _this.responseData = result.response;
            if (_this.responseData.Status === 0) {
            }
            else {
                console.log(_this.responseData);
            }
        }, function (error) {
        });
    };
    ContactInfoPage.prototype.Citiesbystate = function (cit) {
        var _this = this;
        this.services.Citiesbystate(cit).subscribe(function (result) {
            _this.responseDataCity = result.response;
            if (_this.responseDataCity.Status === 0) {
            }
            else {
                console.log(_this.responseDataCity);
            }
        }, function (error) {
        });
    };
    ContactInfoPage.prototype.goToShippingAddress = function () {
        this.nav.navigateForward("bs-settings");
    };
    ContactInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-info',
            template: __webpack_require__(/*! ./contact-info.page.html */ "./src/app/yesgenie/Pages/contact-info/contact-info.page.html"),
            styles: [__webpack_require__(/*! ./contact-info.page.scss */ "./src/app/yesgenie/Pages/contact-info/contact-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_yes_service_service__WEBPACK_IMPORTED_MODULE_5__["YesServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ContactInfoPage);
    return ContactInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-contact-info-contact-info-module.js.map