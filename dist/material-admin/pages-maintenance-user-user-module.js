(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maintenance-user-user-module"],{

/***/ "./src/app/pages/maintenance/user/user.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/maintenance/user/user.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/maintenance/user/user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/maintenance/user/user.component.ts ***!
  \**********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/pages/maintenance/user/user.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/pages/maintenance/user/user.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/maintenance/user/user.module.ts ***!
  \*******************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/pages/maintenance/user/user.component.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.routing */ "./src/app/pages/maintenance/user/user.routing.ts");





var USER_ROUTE = [{ path: "", component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] }];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing__WEBPACK_IMPORTED_MODULE_4__["UserRouting"],
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/pages/maintenance/user/user.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/maintenance/user/user.routing.ts ***!
  \********************************************************/
/*! exports provided: UserRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRouting", function() { return UserRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.component */ "./src/app/pages/maintenance/user/user.component.ts");


var USER_ROUTE = [
    {
        path: "",
        component: _user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
        children: [
            {
                path: "",
                redirectTo: "list-user"
            },
            {
                path: "list-user",
                loadChildren: "./list-user/list-user.module#ListUserModule"
            },
            {
                path: "add-user",
                loadChildren: "./add-user/add-user.module#AddUserModule"
            },
            {
                path: "edit-user",
                loadChildren: "./edit-user/edit-user.module#EditUserModule"
            },
        ]
    }
];
var UserRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(USER_ROUTE);


/***/ })

}]);
//# sourceMappingURL=pages-maintenance-user-user-module.js.map