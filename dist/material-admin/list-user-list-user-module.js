(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-user-list-user-module"],{

/***/ "./src/app/pages/maintenance/user/list-user/list-user.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/maintenance/user/list-user/list-user.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"content__title\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <h3>Users</h3>\n        </div>\n        <div class=\"col-sm-6 header-button\">\n            <button type=\"button\" class=\"btn btn-ama-custom-purple btn-sm btn-shadow pull-right\" [routerLink]=\"['/user/maintenance/user/add-user']\">NEW</button>\n            <div class=\"header-search-bar m-r-20 pull-right\">\n                <input type=\"text\" placeholder=\"Search\">\n            </div>\n        </div>\n    </div>\n</header>\n\n\n<div class=\"row\">\n    <div class=\"col-sm-4 card-tiles\" *ngFor=\"let dataUser of user_list\">\n        <div class=\"card-group\">\n            <div class=\"card\">\n                <div class=\"card-body card-tiles-body\">\n                    <!-- Actual data content, after all of the formatting incards -->\n                    <table class=\"table\">\n                        <tr>\n                            <td class=\"table-tiles-body\" style=\"width: 20%; text-align: center; vertical-align: middle\">\n                                <a [routerLink]=\"['/user/maintenance/user/edit-user']\">\n                                    <i class=\"zmdi zmdi-edit zmdi-hc-fw\" style=\"font-size: 1.6rem; color: #37368E\"></i>\n                                </a>\n                            </td>\n                            <td class=\"table-tiles-body\">\n                                <h4>{{ dataUser.full_name }}</h4>\n                                {{ dataUser.email }} <br>\n                                {{ dataUser.position }}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td class=\"table-tiles-body\" style=\"text-align: center;\">\n                                <i *ngIf=\"dataUser.is_active == true\" class=\"zmdi zmdi-male zmdi-hc-fw\" style=\"font-size: 1.6rem; color: green\"></i>\n                                <i *ngIf=\"dataUser.is_active == false\" class=\"zmdi zmdi-male zmdi-hc-fw\" style=\"font-size: 1.6rem; color: red\"></i>\n                            </td>\n                            <td class=\"table-tiles-body\">\n                                {{ dataUser.is_active == true ? 'Active' : 'Inactive' }}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td></td>\n                            <td class=\"table-tiles-body\">\n                                <i class=\"zmdi zmdi-calendar-check zmdi-hc-fw\"></i> {{ dataUser.created_at }} <br>\n                                <i class=\"zmdi zmdi-calendar-check zmdi-hc-fw\"></i> {{ dataUser.created_at }}\n                            </td>\n                        </tr>\n                    </table>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/maintenance/user/list-user/list-user.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/maintenance/user/list-user/list-user.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW50ZW5hbmNlL3VzZXIvbGlzdC11c2VyL2xpc3QtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/maintenance/user/list-user/list-user.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/maintenance/user/list-user/list-user.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../base-component */ "./src/app/base-component.ts");





var ListUserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ListUserComponent, _super);
    //============================================
    // Functions (useCamelCase)
    //============================================
    function ListUserComponent(injector, http, API) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.http = http;
        _this.API = API;
        //============================================
        // Variable Declarations (use_snake_case)
        //============================================
        _this.user_list = [
            { "full_name": "Juan Dela Cruz1", "email": "test@gmail.com", "position": "Admin", "is_active": true, "created_at": "Jan 01, 2020 01:01:01 pm", "created_by": "test_admin" },
            { "full_name": "Juan Dela Cruz2", "email": "test@gmail.com", "position": "Admin", "is_active": false, "created_at": "Jan 01, 2020 01:01:01 pm", "created_by": "test_admin" },
            { "full_name": "Juan Dela Cruz3", "email": "test@gmail.com", "position": "Admin", "is_active": false, "created_at": "Jan 01, 2020 01:01:01 pm", "created_by": "test_admin" },
            { "full_name": "Juan Dela Cruz4", "email": "test@gmail.com", "position": "Admin", "is_active": true, "created_at": "Jan 01, 2020 01:01:01 pm", "created_by": "test_admin" },
        ];
        return _this;
    }
    ListUserComponent.prototype.ngOnInit = function () {
        this.getUserList();
        var test_global_function = this.testGlobalFunction();
        console.log("global var test: ", this.CURRENT_DATE);
        console.log("global func test: ", test_global_function);
    };
    /**
     * Author:          [Whole name of dev] ex: Catherine D. Aglipay
     * Description:     This function will get the list of users.
     * Date Created:    [Date created] ex: Apr 24, 2020
     */
    ListUserComponent.prototype.getUserList = function () {
        console.log("test: ", this.user_list);
    };
    ListUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-user',
            template: __webpack_require__(/*! ./list-user.component.html */ "./src/app/pages/maintenance/user/list-user/list-user.component.html"),
            styles: [__webpack_require__(/*! ./list-user.component.scss */ "./src/app/pages/maintenance/user/list-user/list-user.component.scss"), __webpack_require__(/*! ../../../../../styles-ama-custom.scss */ "./src/styles-ama-custom.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ListUserComponent);
    return ListUserComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/pages/maintenance/user/list-user/list-user.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/maintenance/user/list-user/list-user.module.ts ***!
  \**********************************************************************/
/*! exports provided: ListUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserModule", function() { return ListUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-user.component */ "./src/app/pages/maintenance/user/list-user/list-user.component.ts");





var LISTUSER_ROUTE = [{ path: "", component: _list_user_component__WEBPACK_IMPORTED_MODULE_4__["ListUserComponent"] }];
var ListUserModule = /** @class */ (function () {
    function ListUserModule() {
    }
    ListUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_user_component__WEBPACK_IMPORTED_MODULE_4__["ListUserComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(LISTUSER_ROUTE),
            ]
        })
    ], ListUserModule);
    return ListUserModule;
}());



/***/ })

}]);
//# sourceMappingURL=list-user-list-user-module.js.map