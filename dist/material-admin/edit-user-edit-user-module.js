(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-user-edit-user-module"],{

/***/ "./src/app/pages/maintenance/user/edit-user/edit-user.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/maintenance/user/edit-user/edit-user.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"content__title\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <h3>Update User</h3>\n        </div>\n        <div class=\"col-sm-6 header-button\">\n            <button type=\"button\" class=\"btn btn-white btn-sm btn-shadow pull-right\" [routerLink]=\"['/user/maintenance/user']\">CANCEL</button>\n            <button type=\"button\" class=\"btn btn-ama-custom-purple btn-sm btn-shadow m-r-20 pull-right\" (click)=\"updateUser()\">SAVE</button>\n        </div>\n    </div>\n</header>\n\n\n<div class=\"card\">\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">Title test</h4>\n        <h6 class=\"card-subtitle\">Sub title test</h6>\n        body contents\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/maintenance/user/edit-user/edit-user.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/maintenance/user/edit-user/edit-user.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW50ZW5hbmNlL3VzZXIvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/maintenance/user/edit-user/edit-user.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/maintenance/user/edit-user/edit-user.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../base-component */ "./src/app/base-component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var EditUserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditUserComponent, _super);
    //============================================
    // Variable Declarations (use_snake_case)
    //============================================
    //============================================
    // Functions (useCamelCase)
    //============================================
    function EditUserComponent(injector, http, API) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.http = http;
        _this.API = API;
        return _this;
    }
    EditUserComponent.prototype.ngOnInit = function () {
    };
    /**
     * Author:          [Whole name of dev] ex: Catherine D. Aglipay
     * Description:     This function will save the changes made in user.
     * Date Created:    [Date created] ex: Apr 24, 2020
     */
    EditUserComponent.prototype.updateUser = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Success!",
            text: "Test success message",
            icon: "success",
            allowOutsideClick: false,
            confirmButtonColor: "#37368E",
            confirmButtonText: "Confirm"
        }).then(function (result) {
            if (result.value) {
                _this.router.navigate(['/user/maintenance/user']);
            }
        });
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/pages/maintenance/user/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/pages/maintenance/user/edit-user/edit-user.component.scss"), __webpack_require__(/*! ../../../../../styles-ama-custom.scss */ "./src/styles-ama-custom.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], EditUserComponent);
    return EditUserComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/pages/maintenance/user/edit-user/edit-user.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/maintenance/user/edit-user/edit-user.module.ts ***!
  \**********************************************************************/
/*! exports provided: EditUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserModule", function() { return EditUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-user.component */ "./src/app/pages/maintenance/user/edit-user/edit-user.component.ts");





var EDITUSER_ROUTE = [{ path: "", component: _edit_user_component__WEBPACK_IMPORTED_MODULE_4__["EditUserComponent"] }];
var EditUserModule = /** @class */ (function () {
    function EditUserModule() {
    }
    EditUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_edit_user_component__WEBPACK_IMPORTED_MODULE_4__["EditUserComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(EDITUSER_ROUTE),
            ]
        })
    ], EditUserModule);
    return EditUserModule;
}());



/***/ })

}]);
//# sourceMappingURL=edit-user-edit-user-module.js.map