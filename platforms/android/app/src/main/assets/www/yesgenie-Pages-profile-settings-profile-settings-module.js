(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yesgenie-Pages-profile-settings-profile-settings-module"],{

/***/ "./src/app/yesgenie/Pages/profile-settings/profile-settings.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/profile-settings/profile-settings.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsPageModule", function() { return ProfileSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-settings.page */ "./src/app/yesgenie/Pages/profile-settings/profile-settings.page.ts");







var routes = [
    {
        path: '',
        component: _profile_settings_page__WEBPACK_IMPORTED_MODULE_6__["ProfileSettingsPage"]
    }
];
var ProfileSettingsPageModule = /** @class */ (function () {
    function ProfileSettingsPageModule() {
    }
    ProfileSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_settings_page__WEBPACK_IMPORTED_MODULE_6__["ProfileSettingsPage"]]
        })
    ], ProfileSettingsPageModule);
    return ProfileSettingsPageModule;
}());



/***/ }),

/***/ "./src/app/yesgenie/Pages/profile-settings/profile-settings.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/profile-settings/profile-settings.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>profile-settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/yesgenie/Pages/profile-settings/profile-settings.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/profile-settings/profile-settings.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3llc2dlbmllL1BhZ2VzL3Byb2ZpbGUtc2V0dGluZ3MvcHJvZmlsZS1zZXR0aW5ncy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/yesgenie/Pages/profile-settings/profile-settings.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/yesgenie/Pages/profile-settings/profile-settings.page.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsPage", function() { return ProfileSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileSettingsPage = /** @class */ (function () {
    function ProfileSettingsPage() {
    }
    ProfileSettingsPage.prototype.ngOnInit = function () {
    };
    ProfileSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-settings',
            template: __webpack_require__(/*! ./profile-settings.page.html */ "./src/app/yesgenie/Pages/profile-settings/profile-settings.page.html"),
            styles: [__webpack_require__(/*! ./profile-settings.page.scss */ "./src/app/yesgenie/Pages/profile-settings/profile-settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileSettingsPage);
    return ProfileSettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=yesgenie-Pages-profile-settings-profile-settings-module.js.map