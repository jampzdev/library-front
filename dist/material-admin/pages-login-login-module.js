(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/directive/input-float/input-float.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/directive/input-float/input-float.directive.ts ***!
  \****************************************************************/
/*! exports provided: InputFloatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFloatDirective", function() { return InputFloatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputFloatDirective = /** @class */ (function () {
    function InputFloatDirective(el) {
        this.el = el;
    }
    InputFloatDirective.prototype.onBlur = function () {
        var status = true ? this.el.nativeElement.value : undefined;
        this.inputStatus = status;
    };
    InputFloatDirective.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.form-control--active'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InputFloatDirective.prototype, "inputStatus", void 0);
    InputFloatDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[InputFloat]',
            host: {
                '(blur)': 'onBlur()'
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], InputFloatDirective);
    return InputFloatDirective;
}());



/***/ }),

/***/ "./src/app/directive/input-float/input-float.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/directive/input-float/input-float.module.ts ***!
  \*************************************************************/
/*! exports provided: InputFloatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFloatModule", function() { return InputFloatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _input_float_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-float.directive */ "./src/app/directive/input-float/input-float.directive.ts");




var InputFloatModule = /** @class */ (function () {
    function InputFloatModule() {
    }
    InputFloatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_input_float_directive__WEBPACK_IMPORTED_MODULE_3__["InputFloatDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _input_float_directive__WEBPACK_IMPORTED_MODULE_3__["InputFloatDirective"]
            ]
        })
    ], InputFloatModule);
    return InputFloatModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n\n    <!-- Login -->\n    <div *ngIf=\"loginStats.login\" class=\"login__block active\">\n        <div class=\"login-custom-header\">\n            <!-- <img src=\"../../../assets/img/ama-logo.png\" alt=\"\" height=\"60%\" width=\"60%\"> -->\n        </div>\n\n        <div class=\"login__body\">\n            <div class=\"form-group form-group--float form-group--centered\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"uname\" InputFloat>\n                <label>USERNAME</label>\n                <i class=\"form-group__bar\"></i>\n            </div>\n\n            <div class=\"form-group form-group--float form-group--centered\">\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"pwd\" InputFloat>\n                <label>PASSWORD</label>\n                <i class=\"form-group__bar\"></i>\n            </div>\n        </div>\n\n        <div class=\"login-custom-footer\">\n            <button type=\"button\" class=\"btn btn-ama-custom-red btn-shadow m-b-10\" (click)=\"auth()\">LOGIN</button>\n            <button type=\"button\" class=\"btn btn-primary btn-shadow m-b-10\" (click)=\"toggleBlock('login', 'signUp')\">SIGN UP AS BORROWER</button>\n\n            <br>\n            <a (click)=\"toggleBlock('login', 'forgotPassword')\">Forgot Password?</a>\n        </div>\n    </div>\n\n    <!-- Register -->\n    <div *ngIf=\"loginStats.signUp\" class=\"login__block\">\n        <div class=\"login-custom-header\">\n            <!-- <img src=\"../../../assets/img/ama-logo.png\" alt=\"\" height=\"60%\" width=\"60%\"> -->\n        </div>\n\n        <div class=\"login__body\" style=\"text-align: left\">\n            <div class=\"form-group form-group--float\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"new_fname\" maxlength=\"100\" InputFloat>\n                <label>FIRST NAME<span class=\"c-red\">*</span></label>\n                <i class=\"form-group__bar\"></i>\n            </div>\n\n            <div class=\"form-group form-group--float\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"new_lname\" maxlength=\"100\" InputFloat>\n                <label>LAST NAME<span class=\"c-red\">*</span></label>\n                <i class=\"form-group__bar\"></i>\n            </div>\n\n            <div class=\"form-group form-group--float\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"new_uname\" maxlength=\"50\" InputFloat>\n                <label>USERNAME<span class=\"c-red\">*</span></label>\n                <i class=\"form-group__bar\"></i>\n            </div>\n\n            <div class=\"form-group form-group--float\">\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"new_pwd\" maxlength=\"50\" InputFloat>\n                <label>PASSWORD<span class=\"c-red\">*</span></label>\n                <i class=\"form-group__bar\"></i>\n            </div>\n\n            <div class=\"form-group form-group--float\">\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"new_confirm_pwd\" InputFloat>\n                <label>CONFIRM PASSWORD<span class=\"c-red\">*</span></label>\n                <i class=\"form-group__bar\"></i>\n            </div>\n        </div>\n\n        <div class=\"login-custom-footer\">\n            <p>By signing up, you agree to the <br>\n            <a (click)=\"termsAndConditionsModal.show()\" style=\"color: #0062d1\"><b>Terms and Conditions</b></a> \n            </p>\n            \n            <button type=\"button\" class=\"btn btn-ama-custom-purple btn-shadow m-b-10\" (click)=\"newAccount()\">SIGN UP</button>\n            <br>\n            <a (click)=\"toggleBlock('signUp', 'login')\">Already have an account?</a>\n        </div>\n    </div>\n\n    <!-- Forgot Password -->\n    <div *ngIf=\"loginStats.forgotPassword\" class=\"login__block\">\n        <div class=\"login-custom-header\">\n            <img src=\"../../../assets/img/ama-logo.png\" alt=\"\" height=\"60%\" width=\"60%\">\n        </div>\n\n        <div class=\"login__body\">\n            <p class=\"mt-4\">Instructions on how to recover your account will be sent to your email.</p>\n\n            <div class=\"form-group form-group--float form-group--centered\">\n                <input type=\"text\" class=\"form-control\" InputFloat>\n                <label>EMAIL ADDRESS</label>\n                <i class=\"form-group__bar\"></i>\n            </div>\n        </div>\n\n        <div class=\"login-custom-footer\">\n            <button type=\"button\" class=\"btn btn-ama-custom-red btn-shadow m-b-10\" [routerLink]=\"['/user/dashboard']\">CONFIRM EMAIL</button>\n            <br>\n            <a (click)=\"toggleBlock('forgotPassword', 'login')\">Go back to Login</a>\n        </div>\n    </div>\n</div>\n\n\n<!-- Terms and Conditions Modal-->\n<div class=\"modal fade\" bsModal #termsAndConditionsModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\" [config]=\"{ ignoreBackdropClick: true }\">\n    <div class=\"modal-dialog modal-lg modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Default modal</h4>\n            </div>\n            <div class=\"modal-body\">\n                <p>Curabitur blandit mollis lacus. Nulla sit amet est. Suspendisse nisl elit, rhoncus eget, elementum\n                    ac, condimentum eget, diam. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Cras\n                    sagittis..</p>\n                <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh\n                    ultricies vehicula ut id elit. Donec sed odio dui. Sed posuere consectetur est at lobortis. Maecenas\n                    sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor\n                    fringilla. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare\n                    vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.\n                    Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. Sed posuere\n                    consectetur est at lobortis. Maecenas faucibus mollis interdum.</p>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"modal-button\">\n                    <button type=\"button\" class=\"btn btn-light btn-sm btn-shadow pull-right\" (click)=\"termsAndConditionsModal.hide()\">CANCEL</button>\n                    <button type=\"button\" class=\"btn btn-ama-custom-purple btn-sm btn-shadow m-r-20 pull-right\">SAVE</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login__block {\n  border-radius: 5px; }\n\n.login-custom-header {\n  padding: 5px 0 5px; }\n\n.login-custom-footer {\n  padding: 1rem 2rem 0; }\n\n.login-custom-footer > button {\n    color: #FFFFFF;\n    width: 100%;\n    border-radius: .4rem;\n    font-weight: 500; }\n\n.login-fixed-button {\n  position: absolute;\n  left: 100px;\n  top: 100px;\n  width: 120px; }\n\n.login-fixed-button > button {\n    border-radius: .4rem;\n    font-weight: 500;\n    width: 100%; }\n\n.form-group--left,\n.form-group--left .form-control {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pbmFuZHJvL0Rlc2t0b3AvdG9fY2FuYWRhL2xpYnJhcnktZnJvbnQvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL21pbmFuZHJvL0Rlc2t0b3AvdG9fY2FuYWRhL2xpYnJhcnktZnJvbnQvc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLG9CQUFvQixFQUFBOztBQUR4QjtJQUtRLGNDc0JPO0lEckJQLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZ0JDb0VjLEVBQUE7O0FEaEV0QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFKaEI7SUFPUSxvQkFBb0I7SUFDcEIsZ0JDd0RjO0lEdkRkLFdBQVcsRUFBQTs7QUFJbkI7O0VBR0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9zY3NzLWltcG9ydHNcIjtcblxuLmxvZ2luX19ibG9jayB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubG9naW4tY3VzdG9tLWhlYWRlciB7XG4gICAgcGFkZGluZzogNXB4IDAgNXB4O1xufVxuXG4ubG9naW4tY3VzdG9tLWZvb3RlciB7XG4gICAgcGFkZGluZzogMXJlbSAycmVtIDA7XG5cbiAgICAmID4gYnV0dG9uIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGFtYS1jdXN0b20tcmVkO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcbiAgICB9XG59XG5cbi5sb2dpbi1maXhlZC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICB0b3A6IDEwMHB4O1xuICAgIHdpZHRoOiAxMjBweDtcblxuICAgICYgPiBidXR0b24ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5mb3JtLWdyb3VwLS1sZWZ0IHtcbiAgJixcbiAgLmZvcm0tY29udHJvbCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufSIsIi8vIE9wdGlvbnNcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWU7XG4kZW5hYmxlLXNoYWRvd3M6IGZhbHNlO1xuXG5cbi8vIENvbG9yc1xuJGdyYXktNTA6ICNmOWY5Zjk7XG4kZ3JheS0xMDA6ICNmNmY2ZjY7XG4kZ3JheS0yMDA6ICNlOWVjZWY7XG4kZ3JheS0zMDA6ICNkZWUyZTY7XG4kZ3JheS00MDA6ICNjZWQ0ZGE7XG4kZ3JheS01MDA6ICNhZGI1YmQ7XG4kZ3JheS02MDA6ICM4NjhlOTY7XG4kZ3JheS03MDA6ICM0OTUwNTc7XG4kZ3JheS04MDA6ICMzNDNhNDA7XG4kZ3JheS05MDA6ICMyMTI1Mjk7XG5cbiRyZWQ6ICNmZjZiNjg7XG4kcGluazogI2ZmODVhZjtcbiRwdXJwbGU6ICNkMDY2ZTI7XG4kZGVlcC1wdXJwbGU6ICM2NzNBQjc7XG4kaW5kaWdvOiAjM0Y1MUI1O1xuJGJsdWU6ICMyMTk2RjM7XG4kbGlnaHQtYmx1ZTogIzAzQTlGNDtcbiRjeWFuOiAjMDBCQ0Q0O1xuJHRlYWw6ICMzOWJiYjA7XG4kZ3JlZW46ICMzMmM3ODc7XG4kbGlnaHQtZ3JlZW46ICM4QkMzNEE7XG4kbGltZTogI0NEREMzOTtcbiR5ZWxsb3c6ICNGRkVCM0I7XG4kYW1iZXI6ICNmZmM3MjE7XG4kb3JhbmdlOiAjRkY5ODAwO1xuJGRlZXAtb3JhbmdlOiAjRkY1NzIyO1xuJGJyb3duOiAjNzk1NTQ4O1xuJGdyZXk6ICM5RTlFOUU7XG4kYmx1ZS1ncmV5OiAjNjA3RDhCO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHdoaXRlOiAjRkZGRkZGO1xuXG4kYW1hLWN1c3RvbS1yZWQ6ICNCRTFEMkM7XG4kYW1hLWN1c3RvbS1wdXJwbGU6ICMzNzM2OEU7XG5cbiRjb2xvcnM6IChcbiAgd2hpdGU6ICR3aGl0ZSxcbiAgYmxhY2s6ICRibGFjayxcbiAgcmVkOiAkcmVkLFxuICBwaW5rOiAkcGluayxcbiAgcHVycGxlOiAkcHVycGxlLFxuICBkZWVwLXB1cnBsZTogJGRlZXAtcHVycGxlLFxuICBpbmRpZ286ICRpbmRpZ28sXG4gIGJsdWU6ICRibHVlLFxuICBsaWdodC1ibHVlOiAkbGlnaHQtYmx1ZSxcbiAgY3lhbjogJGN5YW4sXG4gIHRlYWw6ICR0ZWFsLFxuICBncmVlbjogJGdyZWVuLFxuICBsaWdodC1ncmVlbjogJGxpZ2h0LWdyZWVuLFxuICBsaW1lOiAkbGltZSxcbiAgeWVsbG93OiAkeWVsbG93LFxuICBhbWJlcjogJGFtYmVyLFxuICBvcmFuZ2U6ICRvcmFuZ2UsXG4gIGRlZXAtb3JhbmdlOiAkZGVlcC1vcmFuZ2UsXG4gIGJyb3duOiAkYnJvd24sXG4gIGJsdWUtZ3JleTogJGJsdWUtZ3JleSxcbiAgYW1hLWN1c3RvbS1yZWQ6ICRhbWEtY3VzdG9tLXJlZCxcbiAgYW1hLWN1c3RvbS1wdXJwbGU6ICRhbWEtY3VzdG9tLXB1cnBsZVxuKTtcblxuLy8gVGhlbWUgQ29sb3JzXG4kdGhlbWUtY29sb3JzOiAoXG4gIHByaW1hcnk6ICRibHVlLFxuICBzZWNvbmRhcnk6ICRncmF5LTYwMCxcbiAgc3VjY2VzczogJGdyZWVuLFxuICBpbmZvOiAkbGlnaHQtYmx1ZSxcbiAgd2FybmluZzogJGFtYmVyLFxuICBkYW5nZXI6ICRyZWQsXG4gIGRhcms6ICRncmF5LTcwMFxuKTtcblxuJHlpcS10ZXh0LWRhcms6ICM1MjVhNjI7XG5cblxuLy8gVHlwb2dyYXBoeVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuJHRleHQtbXV0ZWQ6ICM5YzljOWM7XG4kdGV4dC1tdXRlZC1ob3ZlcjogZGFya2VuKCR0ZXh0LW11dGVkLCAxNSUpO1xuJGhlYWRpbmdzLWNvbG9yOiAjMzMzO1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDUwMDtcbiRmb250LWZhbWlseS1pY29uOiAnTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250JztcbiRmb250LXNpemUtcm9vdDogMTRweDtcblxuXG4vLyBMaW5rc1xuJGxpbmstY29sb3I6ICRibHVlO1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZTtcblxuXG4vLyBCb2R5XG4kYm9keS1iZzogI2YzZjNmMztcbiRib2R5LWNvbG9yOiAjNzQ3YTgwO1xuXG5cbi8vIEZvcm1cbiRpbnB1dC1iZzogdHJhbnNwYXJlbnQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50O1xuJGlucHV0LWJveC1zaGFkb3c6IHJnYmEoJGJsYWNrICwwKTtcbiRpbnB1dC1ib3JkZXItY29sb3I6IGxpZ2h0ZW4oJGdyYXktMjAwLCAxJSk7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuJGlucHV0LWJvcmRlci1yYWRpdXM6IDA7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogMDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAwO1xuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogMnJlbTtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xuJGlucHV0LXBhZGRpbmcteDogMDtcbiRpbnB1dC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1wYWRkaW5nLXg7XG4kaW5wdXQtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14O1xuXG5cbi8vIENoZWNib3ggYW5kIFJhZGlvXG4kY2hlY2tib3gtcmFkaW8tc2l6ZTogMThweDtcbiRjaGVja2JveC1yYWRpby1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiRjaGVja2JveC1yYWRpby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6ICR0ZWFsO1xuJGNoZWNrYm94LXJhZGlvLWJvcmRlci1jb2xvcjogIzZlNmU2ZTtcbiRjaGVja2JveC1yYWRpby1jaGVja2VkLWJvcmRlci1jb2xvcjogJGNoZWNrYm94LXJhZGlvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjtcblxuXG4vLyBMYXlvdXRcbiRjb250ZW50LXRpdGxlLWhlYWRpbmctY29sb3I6ICM2NzY3Njc7XG5cblxuLy8gSGVhZGVyXG4vLyAkaGVhZGVyLWhlaWdodDogNzJweDtcbiRoZWFkZXItaGVpZ2h0OiAwcHg7IC8vIEFkanVzdGVkIHRvIHJlbW92ZSB0aGUgaGVhZGVyIGZvciBhbWEtY3VzdG9tLWhlaWdodFxuJGhlYWRlci1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4kaGVhZGVyLXotaW5kZXg6IDIwO1xuXG5cbi8vIERyb3Bkb3duXG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAwO1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCA0cHggMThweCByZ2JhKCRibGFjaywgMC4xMSk7XG4kZHJvcGRvd24tbGluay1jb2xvcjogIzZkNmQ2ZDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogJGRyb3Bkb3duLWxpbmstY29sb3I7XG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICRncmF5LTEwMDtcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS01MDA7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGdyYXktNTA7XG4kZHJvcGRvd24tcGFkZGluZy15OiAwLjhyZW07XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuNXJlbTtcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC41cmVtO1xuJGRyb3Bkb3duLXNwYWNlcjogMDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAkZ3JheS0xMDA7XG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkZ3JheS01MDA7XG5cblxuLy8gQm9yZGVyIFJhZGl1c1xuJGJvcmRlci1yYWRpdXM6IDJweDtcbiRib3JkZXItcmFkaXVzLWxnOiAycHg7XG4kYm9yZGVyLXJhZGl1cy1zbTogMnB4O1xuXG5cbi8vIExpc3QgR3JvdXBcbiRsaXN0LWdyb3VwLWJnOiB0cmFuc3BhcmVudDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogMDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiBibGFjaztcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogJGJsdWU7XG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogMnJlbTtcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAxcmVtO1xuXG5cbi8vIFByb2dyZXNzIEJhclxuJHByb2dyZXNzLWJveC1zaGFkb3c6IG5vbmU7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAkYmx1ZTtcbiRwcm9ncmVzcy1iZzogJGdyYXktMjAwO1xuJHByb2dyZXNzLWhlaWdodDogNXB4O1xuXG5cbi8vIENhcmRcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuJGNhcmQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuJGNhcmQtc3BhY2VyLXg6IDIuMnJlbTtcbiRjYXJkLXNwYWNlci15OiAyLjFyZW07XG4kY2FyZC1jYXAtYmc6IHRyYW5zcGFyZW50O1xuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogMDtcbiRjYXJkLXNoYWRvdzogMCAxcHggMnB4IHJnYmEoJGJsYWNrLDAuMDc1KTtcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAyLjNyZW07XG4kY2FyZC1oZWFkZXItYmc6ICRncmF5LTUwO1xuXG4vLyBTaWRlYmFyc1xuJHNpZGViYXItd2lkdGg6IDMwMHB4O1xuJHNpZGViYXItei1pbmRleDogJGhlYWRlci16LWluZGV4IC0gMTtcbiRuYXZpZ2F0aW9uLWxpbmstY29sb3I6ICRib2R5LWNvbG9yO1xuJG5hdmlnYXRpb24tbGluay1hY3RpdmUtY29sb3I6ICR3aGl0ZTtcbiRuYXZpZ2F0aW9uLWxpbmstaG92ZXItYmc6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG5cblxuLy8gVGFiZWxzXG4kdGFibGUtYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRncmF5LTIwMCwgMyUpO1xuJHRhYmxlLWRhcmstYmc6ICMzMTNhNDQ7XG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICMzZTQ2NGU7XG4kdGFibGUtZGFyay1jb2xvcjogI2YzZjNmMztcbiR0YWJsZS1hY2NlbnQtYmc6ICR0YWJsZS1ib3JkZXItY29sb3I7XG4kdGFibGUtaG92ZXItYmc6ICR0YWJsZS1hY2NlbnQtYmc7XG4kdGFibGUtY2VsbC1wYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206IDAuNzVyZW0gMXJlbTtcbiR0YWJsZS1oZWFkLWJnOiBsaWdodGVuKCRncmF5LTIwMCwgMyUpO1xuXG5cbi8vIFBhZ2luYXRpb25cbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogMDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogMDtcbiRwYWdpbmF0aW9uLWJnOiAkYm9keS1iZztcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiBkYXJrZW4oJHBhZ2luYXRpb24tYmcsIDUlKTtcbiRwYWdpbmF0aW9uLWNvbG9yOiBsaWdodGVuKCRib2R5LWNvbG9yLCAxMCUpO1xuJHBhZ2luYXRpb24taG92ZXItY29sb3I6IGRhcmtlbigkcGFnaW5hdGlvbi1jb2xvciwgNSUpO1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICRwYWdpbmF0aW9uLWJnO1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICRwYWdpbmF0aW9uLWNvbG9yO1xuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAkbGlnaHQtYmx1ZTtcblxuXG4vLyBDb2RlXG4kcHJlLWNvbG9yOiAkd2hpdGU7XG4kcHJlLWJnOiAkZ3JheS04MDA7XG4kcHJlLWJvcmRlci1jb2xvcjogJHByZS1iZztcblxuXG4vLyBBbGVydFxuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiRhbGVydC1ib3JkZXItd2lkdGg6IDA7XG4kYWxlcnQtcGFkZGluZy14OiAxLjVyZW07XG4kYWxlcnQtcGFkZGluZy15OiAxLjFyZW07XG4kYWxlcnQtYmctbGV2ZWw6IDA7XG4kYWxlcnQtY29sb3ItbGV2ZWw6IC0xMi41O1xuXG5cbi8vIENsb3NlXG4kY2xvc2UtZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogbm9uZTtcblxuXG4vLyBCYWRnZXNcbiRiYWRnZS1wYWRkaW5nLXk6IDAuNXJlbTtcbiRiYWRnZS1wYWRkaW5nLXg6IDFyZW07XG4kYmFkZ2UtZm9udC1zaXplOiA5MCU7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6IDUwMDtcbiRiYWRnZS1waWxsLXBhZGRpbmcteDogJGJhZGdlLXBhZGRpbmcteDtcbiRiYWRnZS1waWxsLXBhZGRpbmcteTogJGJhZGdlLXBhZGRpbmcteTtcblxuXG4vLyBCcmVhZGNydW1ic1xuJGJyZWFkY3J1bWItZGl2aWRlcjogJ1xcZjMwZic7XG4kYnJlYWRjcnVtYi1iZzogdHJhbnNwYXJlbnQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6IDAuMjVyZW07XG5cblxuLy8gQ2Fyb3N1ZWxcbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogbm9uZTtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogbm9uZTtcbiRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6IDQwcHg7XG4kY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAwLjg7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogcmdiYSgkd2hpdGUsIDAuOSk7XG5cblxuLy8gTW9kYWxcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAwLjI7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAwIDVweCAyMHB4IHJnYmEoJGJsYWNrLC4wNyk7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzO1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAwO1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6IDA7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogMDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogMjVweCAzMHB4IDA7XG4kbW9kYWwtaW5uZXItcGFkZGluZzogMjVweCAzMHB4O1xuJG1vZGFsLWxnOiAxMDAwcHg7XG5cblxuLy8gUG9wb3ZlcnNcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAwIDJweCAzMHB4IHJnYmEoJGJsYWNrLCAwLjEpO1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6IDEuMjVyZW07XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogMS41cmVtO1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogJHBvcG92ZXItYm9keS1wYWRkaW5nLXg7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAkcG9wb3Zlci1ib2R5LXBhZGRpbmcteTtcbiRwb3BvdmVyLWhlYWRlci1iZzogJHdoaXRlO1xuXG5cbi8vIFRhYnNcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6IDFweDtcbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICRncmF5LTIwMDtcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAwO1xuJG5hdi1saW5rLXBhZGRpbmcteTogMXJlbTtcbiRuYXYtbGluay1wYWRkaW5nLXg6IDEuMnJlbTtcbiRuYXYtbGluay1wYWRkaW5nOiAxcmVtIDEuMnJlbTtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6IGluaGVyaXQ7XG5cblxuLy8gVG9vbHRpcHNcbiR0b29sdGlwLXBhZGRpbmcteTogMC43cmVtO1xuJHRvb2x0aXAtcGFkZGluZy14OiAgMS4xcmVtO1xuJHRvb2x0aXAtYmc6ICRncmF5LTcwMDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAkdG9vbHRpcC1iZztcbiR0b29sdGlwLW9wYWNpdHk6IDE7XG5cblxuLy8gQmFja2Ryb3BcbiRiYWNrZHJvcC16LWluZGV4OiAxMDA7XG5cblxuLy8gTGlzdHZpZXdcbiRsaXN0dmlldy1pdGVtLWFjdGl2ZS1iZzogJGdyYXktNTA7XG4kbGlzdHZpZXctaXRlbS1ob3Zlci1iZzogJGxpc3R2aWV3LWl0ZW0tYWN0aXZlLWJnO1xuJGxpc3R2aWV3LWl0ZW0tc3RyaXBlZC1iZzogI2Y5ZjlmOTtcbiRsaXN0dmlldy1pbnZlcnQtaXRlbS1hY3RpdmUtYmc6IHJnYmEoJHdoaXRlLCAwLjAyNSk7XG4kbGlzdHZpZXctaW52ZXJ0LWl0ZW0taG92ZXItYmc6IHJnYmEoJHdoaXRlLCAwLjAyNSk7XG4kbGlzdHZpZXctaW52ZXJ0LWl0ZW0tc3RyaXBlZC1iZzogcmdiYSgkd2hpdGUsIDAuMSk7XG4kbGlzdHZpZXctYm9yZGVyLWNvbG9yOiAkZ3JheS0xMDA7XG5cblxuLy8gSFJcbiRoci1ib3JkZXItY29sb3I6ICRncmF5LTIwMDtcblxuXG4vLyBJbnB1dCBHcm91cFxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAkd2hpdGU7XG5cblxuLy8gSnVtYm90cm9uXG4kanVtYm90cm9uLWJnOiAkd2hpdGU7XG5cblxuLy8gVHJlZSBWaWV3XG4kdHJlZXZpZXctaXRlbS1ib3JkZXItY29sb3I6ICNmMWY0Zjc7XG4kdHJlZXZpZXctaXRlbS1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS01MDtcbiR0cmVldmlldy1pdGVtLWFjdGl2ZS1iZzogJHRyZWV2aWV3LWl0ZW0tYWN0aXZlLWJvcmRlci1jb2xvcjtcbiR0cmVldmlldy1pdGVtLWhvdmVyLWJnOiBsaWdodGVuKCRncmF5LTUwLCAxJSk7XG5cblxuLy8gWUlRIENvbnRyYXN0XG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAyMDA7XG5cblxuLy8gQnV0dG9uc1xuJGJ0bi1mb2N1cy13aWR0aDogMDtcbiRidG4tYm9yZGVyLXdpZHRoOiAycHg7XG5cblxuLy8gQWNjb3JkaW9uXG4kYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogJGdyYXktMjAwO1xuJGFjY29yZGlvbi1wYWRkaW5nOiAwLjg1cmVtIDEuMzVyZW07XG5cblxuLy8gRGF0ZXBpY2tlclxuJGRhdGUtcGlja2VyLWhlYWQtY29sb3I6ICRncmVlbjtcblxuXG4vLyBTb3J0YWJsZVxuJHNvcnRhYmxlLWl0ZW0tYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XG4kc29ydGFibGUtaXRlbS1hY3RpdmUtYmc6ICRncmF5LTEwMDsiXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base-component */ "./src/app/base-component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent(injector, http, API) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.http = http;
        _this.API = API;
        _this.uname = "";
        _this.pwd = "";
        _this.new_fname = "";
        _this.new_lname = "";
        _this.new_uname = "";
        _this.new_pwd = "";
        _this.new_confirm_pwd = "";
        _this.loginStats = {
            login: true,
            signUp: false,
            forgotPassword: false
        };
        return _this;
    }
    LoginComponent.prototype.toggleBlock = function (currentBlock, nextBlock) {
        this.loginStats[currentBlock] = false;
        this.loginStats[nextBlock] = true;
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.auth = function () {
        var _this = this;
        if (this.uname == "" || this.pwd == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Oops", "Required Field(s) Missing!", "warning");
        }
        else {
            this.API.post("/auth", {
                "uname": this.uname,
                "pwd": this.pwd
            }).subscribe(function (data) {
                if (data.itemCount != 0) {
                    localStorage.setItem("user_logged_in", JSON.stringify(data.devMessage));
                    _this.router.navigateByUrl('/user/dashboard');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Oops", "Invalid Username", "warning");
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    LoginComponent.prototype.newAccount = function () {
        var _this = this;
        if (this.new_fname == "" || this.new_lname == "" || this.new_uname == "" || this.new_pwd == "" || this.new_confirm_pwd == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Oops", "Required Field(s) Missing!", "warning");
        }
        else if (this.new_pwd != this.new_confirm_pwd) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Oops", "Password did not match!", "warning");
        }
        else {
            this.API.post("/new-account", {
                "fname": this.new_fname,
                "lname": this.new_lname,
                "role": "BORROWER",
                "uname": this.new_uname,
                "pwd": this.new_pwd,
            }).subscribe(function (data) {
                if (data.statusCode == 200) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Success", data.devMessage, "success");
                    _this.new_fname = "";
                    _this.new_lname = "";
                    _this.new_uname = "";
                    _this.new_pwd = "";
                    _this.new_confirm_pwd = "";
                    _this.toggleBlock('signUp', 'login');
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss"), __webpack_require__(/*! ../../../styles-ama-custom.scss */ "./src/styles-ama-custom.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _directive_input_float_input_float_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directive/input-float/input-float.module */ "./src/app/directive/input-float/input-float.module.ts");









var LOGIN_ROUTE = [{ path: "", component: _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(LOGIN_ROUTE),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
                _directive_input_float_input_float_module__WEBPACK_IMPORTED_MODULE_8__["InputFloatModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map