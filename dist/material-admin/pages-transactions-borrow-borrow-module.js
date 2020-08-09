(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transactions-borrow-borrow-module"],{

/***/ "./src/app/pages/transactions/borrow/borrow.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/transactions/borrow/borrow.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"content__title\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <h3>List of Books</h3>\n    </div>\n    <div class=\"col-sm-12 header-button\">\n      <div class=\"header-search-bar m-r-20 pull-right\">\n        <input type=\"text\" class=\"form-control search-box\" [(ngModel)]=\"search_book\" (keydown.enter)=\"getBooks()\"  placeholder=\"Search...\">\n      </div>\n\n    </div>\n  </div>\n</header>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-12 card-tiles\" >\n\n    <div class=\"table-responsive\">\n      <table class=\"table p-t-20 table-striped table-hover\">\n        <thead>\n          <th></th>\n          <th><h4>Book Info</h4></th>\n          <th><h4>Owner</h4></th>\n          <th><h4>Location</h4></th>\n          <th><h4>Status</h4></th>\n        </thead>\n        <tr *ngIf=\"books_list.length ==0\">\n          <td colspan=\"4\" align=\"center\">\n            No record(s) to show\n          </td>\n        </tr>\n        <tr *ngFor=\"let dataBooks of books_list\">\n          <td class=\"table-tiles-body\" style=\"width: 90px; text-align: center; vertical-align: middle\">\n            <a (click)=\"ViewBook.show();viewBook(dataBooks);this.getComments()\">\n              <i class=\"zmdi zmdi-eye zmdi-hc-fw\" style=\"font-size: 1.6rem; color: #37368E\"></i>\n            </a>\n          </td>\n          <td class=\"table-tiles-body\">\n            <h5>{{ dataBooks.title }}</h5>\n            {{ dataBooks.author }} \n          </td>\n          <td>\n            {{dataBooks.owner}}\n          </td>\n          <td>\n            {{ dataBooks.location }}\n          </td>\n          <td class=\"table-tiles-body\">\n            <span *ngIf=\"dataBooks.status == 'Available'\" class=\"badge badge-success\">{{ dataBooks.status }}</span>\n            <span *ngIf=\"dataBooks.status != 'Available'\" class=\"badge badge-danger\">{{ dataBooks.status }}</span>\n          </td>\n        </tr>\n        <!-- <tr>\n          <td class=\"table-tiles-body\">\n            <i class=\"zmdi zmdi-calendar-check zmdi-hc-fw\"></i> {{ dataUser.created_at }} <br>\n            <i class=\"zmdi zmdi-calendar-check zmdi-hc-fw\"></i> {{ dataUser.created_at }}\n          </td>\n        </tr> -->\n      </table>\n    </div>\n\n  </div>\n</div>\n\n\n<div bsModal #ViewBook=\"bs-modal\" class=\"modal fade\" [config]=\"{ ignoreBackdropClick: true }\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-custom-width\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title pull-left\">Book Details</h1>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label><b>TITLE</b></label>\n                <h5>{{ title }}</h5>\n              </div>\n              <div class=\"form-group\">\n                <label><b>AUTHOR</b></label>\n                <h5>{{ author }}</h5>\n              </div>\n              <div class=\"form-group\">\n                <label><b>OWNER</b></label>\n                <h5>{{ owner }}</h5>\n              </div>\n              <div class=\"form-group\">\n                <label><b>LOCATION</b></label>\n                <h5>{{ location }}</h5>\n              </div>\n              <div class=\"form-group\">\n                <label><b>STATUS</b></label>\n                \n                <h5>\n                  <div *ngIf=\"status == 'Available'\">\n                    <i class=\"zmdi zmdi-check zmdi-hc-fw\" style=\"font-size: 1.6rem; color: green\"></i>\n                    {{ status }}\n                  </div>\n\n                  <div *ngIf=\"status != 'Available'\">\n                    <i class=\"zmdi zmdi-close zmdi-hc-fw\" style=\"font-size: 1.6rem; color: red\"></i>\n                    Borrowed by {{ user_name }} @ {{ checked_out_date }}\n                  </div>\n\n                </h5>\n\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <hr>\n              <h4>Comments</h4>\n              <table class=\"table\">\n                <tr *ngIf=\"book_comments.length == 0\">\n                  <td align=\"center\"><h5>No comments to show.</h5></td>\n                </tr>\n                <tr *ngFor=\"let data of book_comments\">\n                  <td>\n                    <span class=\"comment-section\">\n                      \"{{data.comment}}\"\n                    </span>\n                    <br>\n                    <span class=\"pull-right\" align=\"center\">\n                      -{{data.user_name}}\n                      <br>\n                      {{ data.comment_date }}\n                    </span>\n                  </td>\n                </tr>\n              </table>\n\n            </div>\n            <div class=\"col-sm-12\">\n              <h5>Add a Comment</h5>\n              <textarea class=\"form-control\" style=\"border:1px solid #aaa\" [(ngModel)]=\"ta_comment\" placeholder=\"Your comment here...\"></textarea>\n            </div>\n            <div class=\"col-sm-12 p-t-5\">\n              <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"submitComment()\">Submit</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger bgm-green\" (click)=\"borrowBook()\">BORROW</button>\n\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"ViewBook.hide();getBooks();\">CLOSE</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/transactions/borrow/borrow.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/transactions/borrow/borrow.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-section {\n  font-style: italic;\n  font-size: 20px; }\n\n.header-search-bar {\n  width: 300px !important; }\n\n.search-box {\n  border: 1px solid #bbb;\n  border-radius: 20px;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pbmFuZHJvL0Rlc2t0b3AvdG9fY2FuYWRhL2xpYnJhcnktZnJvbnQvc3JjL2FwcC9wYWdlcy90cmFuc2FjdGlvbnMvYm9ycm93L2JvcnJvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFjLEVBQUE7O0FBR2xCO0VBQ0ksdUJBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksc0JBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFuc2FjdGlvbnMvYm9ycm93L2JvcnJvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LXNlY3Rpb257XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZToyMHB4O1xufVxuXG4uaGVhZGVyLXNlYXJjaC1iYXJ7XG4gICAgd2lkdGg6MzAwcHggIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1ib3h7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYmJiO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzo1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/transactions/borrow/borrow.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/transactions/borrow/borrow.component.ts ***!
  \***************************************************************/
/*! exports provided: BorrowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowComponent", function() { return BorrowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base-component */ "./src/app/base-component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var BorrowComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BorrowComponent, _super);
    function BorrowComponent(injector, http, API) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.http = http;
        _this.API = API;
        _this.books_list = [];
        _this.book_comments = [];
        _this.key = "";
        _this.title = "";
        _this.author = "";
        _this.owner = "";
        _this.location = "";
        _this.status = "";
        _this.ta_comment = "";
        _this.user_name = "";
        _this.checked_out_date = "";
        _this.search_book = "";
        _this.temp = localStorage.getItem("user_logged_in");
        _this.user_logged_in = JSON.parse(_this.temp);
        return _this;
    }
    BorrowComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BorrowComponent.prototype.getBooks = function () {
        var _this = this;
        if (this.search_book != "") {
            this.API.post("/get-books", {
                search: this.search_book
            }).subscribe(function (data) {
                if (data.itemCount != 0) {
                    _this.books_list = data.devMessage;
                    console.log(_this.books_list);
                }
                else {
                    _this.books_list = [];
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.API.post("/get-books", {
                search: ""
            }).subscribe(function (data) {
                if (data.itemCount != 0) {
                    _this.books_list = data.devMessage;
                    console.log(_this.books_list);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    BorrowComponent.prototype.viewBook = function (data) {
        this.key = data.id;
        this.title = data.title;
        this.author = data.author;
        this.owner = data.owner;
        this.location = data.location;
        this.status = data.status;
        this.user_name = data.user_name;
        this.checked_out_date = data.checked_out_date;
    };
    BorrowComponent.prototype.submitComment = function () {
        var _this = this;
        var userid = this.user_logged_in[0].id;
        var bookid = this.key;
        var comment_date = moment__WEBPACK_IMPORTED_MODULE_6__().format("YYYY-MM-DD HH:mm A");
        var comment = this.ta_comment;
        if (comment == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Oops", "Please write a comment", "warning");
        }
        else {
            this.API.post("/save-comment", {
                "userid": userid,
                "bookid": bookid,
                "comment_date": comment_date,
                "comment": comment
            }).subscribe(function (data) {
                if (data.statusCode == 200) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Success", data.devMessage, "success");
                    _this.ta_comment = "";
                    _this.getComments();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    BorrowComponent.prototype.getComments = function () {
        var _this = this;
        var bookid = this.key;
        this.API.post("/get-comments", {
            "bookid": bookid
        }).subscribe(function (data) {
            if (data.itemCount != 0) {
                _this.book_comments = data.devMessage;
            }
        }, function (error) {
            console.log(error);
        });
    };
    BorrowComponent.prototype.borrowBook = function () {
        var _this = this;
        var bookid = this.key;
        var checked_out_by_id = this.user_logged_in[0].id;
        var checked_out_date = moment__WEBPACK_IMPORTED_MODULE_6__().format("YYYY-MM-DD");
        if (this.status != "Available") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Oops", "The book is not available", "warning");
        }
        else {
            this.API.post("/borrow-book", {
                "status": "Checked Out",
                "checked_out_by_id": checked_out_by_id,
                "checked_out_date": checked_out_date,
                "bookid": bookid,
            }).subscribe(function (data) {
                if (data.statusCode == 200) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Success", data.devMessage, "success");
                    _this.ViewBook.hide();
                    _this.getBooks();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ViewBook"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], BorrowComponent.prototype, "ViewBook", void 0);
    BorrowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-borrow',
            template: __webpack_require__(/*! ./borrow.component.html */ "./src/app/pages/transactions/borrow/borrow.component.html"),
            styles: [__webpack_require__(/*! ./borrow.component.scss */ "./src/app/pages/transactions/borrow/borrow.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], BorrowComponent);
    return BorrowComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/pages/transactions/borrow/borrow.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/transactions/borrow/borrow.module.ts ***!
  \************************************************************/
/*! exports provided: BorrowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowModule", function() { return BorrowModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _borrow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./borrow.component */ "./src/app/pages/transactions/borrow/borrow.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var BORROW_COMPONENT = [{ path: "", component: _borrow_component__WEBPACK_IMPORTED_MODULE_4__["BorrowComponent"] }];
var BorrowModule = /** @class */ (function () {
    function BorrowModule() {
    }
    BorrowModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_borrow_component__WEBPACK_IMPORTED_MODULE_4__["BorrowComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(BORROW_COMPONENT),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ]
        })
    ], BorrowModule);
    return BorrowModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-transactions-borrow-borrow-module.js.map