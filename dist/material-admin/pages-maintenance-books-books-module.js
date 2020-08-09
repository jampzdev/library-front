(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maintenance-books-books-module"],{

/***/ "./src/app/pages/maintenance/books/books.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/maintenance/books/books.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"content__title\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <h3>Books</h3>\n    </div>\n    <div class=\"col-sm-6 header-button\">\n      <button type=\"button\" class=\"btn btn-ama-custom-purple btn-sm btn-shadow pull-right\"\n        (click)=\"AddBook.show();formDefaultSettings()\">NEW</button>\n      <div class=\"col-sm-12 header-button\">\n        <div class=\"header-search-bar m-r-20 pull-right\">\n          <input type=\"text\" class=\"form-control search-box\" [(ngModel)]=\"search_book\" (keydown.enter)=\"getBooks()\"\n            placeholder=\"Search...\">\n        </div>\n      \n      </div>\n    </div>\n  </div>\n</header>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-12 card-tiles\">\n  \n    <div class=\"table-responsive\">\n      <table class=\"table p-t-20 table-striped table-hover\">\n        <thead>\n          <th></th>\n          <th>\n            <h4>Book Info</h4>\n          </th>\n          <th>\n            <h4>Owner</h4>\n          </th>\n          <th>\n            <h4>Location</h4>\n          </th>\n          <th>\n            <h4>Status</h4>\n          </th>\n        </thead>\n        <tr *ngIf=\"books_list.length ==0\">\n          <td colspan=\"4\" align=\"center\">\n            No record(s) to show\n          </td>\n        </tr>\n        <tr *ngFor=\"let dataBooks of books_list\">\n          <td class=\"table-tiles-body\" style=\"width: 120px; text-align: center; vertical-align: middle\">\n            <a (click)=\"EditBook.show();editBook(dataBooks)\">\n              <i class=\"zmdi zmdi-edit zmdi-hc-fw\" style=\"font-size: 1.6rem; color: green\"></i>\n            </a>\n            <a (click)=\"ViewBook.show();viewBook(dataBooks);this.getComments()\">\n              <i class=\"zmdi zmdi-eye zmdi-hc-fw\" style=\"font-size: 1.6rem; color: #37368E\"></i>\n            </a>\n          </td>\n          <td class=\"table-tiles-body\">\n            <h5>{{ dataBooks.title }}</h5>\n            {{ dataBooks.author }}\n          </td>\n          <td>\n            {{dataBooks.owner}}\n          </td>\n          <td>\n            {{ dataBooks.location }}\n          </td>\n          <td class=\"table-tiles-body\">\n            <span *ngIf=\"dataBooks.status == 'Available'\" class=\"badge badge-success\">{{ dataBooks.status }}</span>\n            <span *ngIf=\"dataBooks.status != 'Available'\" class=\"badge badge-danger\">{{ dataBooks.status }}</span>\n          </td>\n        </tr>\n        <!-- <tr>\n            <td class=\"table-tiles-body\">\n              <i class=\"zmdi zmdi-calendar-check zmdi-hc-fw\"></i> {{ dataUser.created_at }} <br>\n              <i class=\"zmdi zmdi-calendar-check zmdi-hc-fw\"></i> {{ dataUser.created_at }}\n            </td>\n          </tr> -->\n      </table>\n    </div>\n  \n  </div>\n\n</div>\n\n<div bsModal #AddBook=\"bs-modal\" class=\"modal fade\" [config]=\"{ ignoreBackdropClick: true }\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-custom-width\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title pull-left\">ADD NEW BOOK</h5>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label><b>TITLE</b><span class=\"c-red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" maxlength=\"100\" />\n              </div>\n              <div class=\"form-group\">\n                <label><b>AUTHOR</b><span class=\"c-red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"author\" maxlength=\"100\" />\n              </div>\n              <div class=\"form-group\">\n                <label><b>OWNER</b><span class=\"c-red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"owner\" maxlength=\"100\" />\n              </div>\n              <div class=\"form-group\">\n                <label><b>LOCATION</b><span class=\"c-red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location\" maxlength=\"100\" />\n              </div>\n              <div class=\"form-group\">\n                <label><b>STATUS</b><span class=\"c-red\"></span></label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"status\" disabled/>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveBook()\">SAVE</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"AddBook.hide();\">CLOSE</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #EditBook=\"bs-modal\" class=\"modal fade\" [config]=\"{ ignoreBackdropClick: true }\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-custom-width\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title pull-left\">ADD NEW BOOK</h5>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label><b>TITLE</b><span class=\"c-red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" maxlength=\"100\" />\n              </div>\n              <div class=\"form-group\">\n                <label><b>AUTHOR</b><span class=\"c-red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"author\" maxlength=\"100\" />\n              </div>\n              <div class=\"form-group\">\n                <label><b>OWNER</b><span class=\"c-red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"owner\" maxlength=\"100\" />\n              </div>\n              <div class=\"form-group\">\n                <label><b>LOCATION</b><span class=\"c-red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"location\" maxlength=\"100\" />\n              </div>\n              <div class=\"form-group\">\n                <label><b>STATUS</b><span class=\"c-red\"></span></label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"status\" disabled />\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateBook()\">UPDATE</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"EditBook.hide();\">CLOSE</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #ViewBook=\"bs-modal\" class=\"modal fade\" [config]=\"{ ignoreBackdropClick: true }\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-custom-width\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h1 class=\"modal-title pull-left\">Book Details</h1>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label><b>TITLE</b></label>\n                <h5>{{ title }}</h5>\n              </div>\n              <div class=\"form-group\">\n                <label><b>AUTHOR</b></label>\n                <h5>{{ author }}</h5>\n              </div>\n              <div class=\"form-group\">\n                <label><b>OWNER</b></label>\n                <h5>{{ owner }}</h5>\n              </div>\n              <div class=\"form-group\">\n                <label><b>LOCATION</b></label>\n                <h5>{{ location }}</h5>\n              </div>\n              <div class=\"form-group\">\n                <label><b>STATUS</b></label>\n\n                <h5>\n                  <div *ngIf=\"status == 'Available'\">\n                    <i class=\"zmdi zmdi-check zmdi-hc-fw\" style=\"font-size: 1.6rem; color: green\"></i>\n                    {{ status }}\n                  </div>\n\n                  <div *ngIf=\"status != 'Available'\">\n                    <i class=\"zmdi zmdi-close zmdi-hc-fw\" style=\"font-size: 1.6rem; color: red\"></i>\n                    Borrowed by {{ user_name }} @ {{ checked_out_date }}\n                  </div>\n\n                </h5>\n\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <hr>\n              <h4>Comments</h4>\n              <table class=\"table\">\n                <tr *ngIf=\"book_comments.length == 0\">\n                  <td align=\"center\">\n                    <h5>No comments to show.</h5>\n                  </td>\n                </tr>\n                <tr *ngFor=\"let data of book_comments\">\n                  <td>\n                    <span class=\"comment-section\">\n                      \"{{data.comment}}\"\n                    </span>\n                    <br>\n                    <span class=\"pull-right\" align=\"center\">\n                      -{{data.user_name}}\n                      <br>\n                      {{ data.comment_date }}\n                    </span>\n                  </td>\n                </tr>\n              </table>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"ViewBook.hide();getBooks();\">CLOSE</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/maintenance/books/books.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/maintenance/books/books.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-section {\n  font-style: italic;\n  font-size: 20px; }\n\n.header-search-bar {\n  width: 300px !important; }\n\n.search-box {\n  border: 1px solid #bbb;\n  border-radius: 20px;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pbmFuZHJvL0Rlc2t0b3AvdG9fY2FuYWRhL2xpYnJhcnktZnJvbnQvc3JjL2FwcC9wYWdlcy9tYWludGVuYW5jZS9ib29rcy9ib29rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFjLEVBQUE7O0FBR2xCO0VBQ0ksdUJBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksc0JBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWludGVuYW5jZS9ib29rcy9ib29rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LXNlY3Rpb257XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZToyMHB4O1xufVxuXG4uaGVhZGVyLXNlYXJjaC1iYXJ7XG4gICAgd2lkdGg6MzAwcHggIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1ib3h7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYmJiO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzo1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/maintenance/books/books.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/maintenance/books/books.component.ts ***!
  \************************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base-component */ "./src/app/base-component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







var BooksComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BooksComponent, _super);
    function BooksComponent(injector, http, API) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.http = http;
        _this.API = API;
        _this.books_list = [];
        _this.key = "";
        _this.title = "";
        _this.author = "";
        _this.owner = "";
        _this.location = "";
        _this.status = "";
        _this.search_book = "";
        _this.user_name = "";
        _this.checked_out_date = "";
        _this.book_comments = "";
        return _this;
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BooksComponent.prototype.getBooks = function () {
        var _this = this;
        if (this.search_book != "") {
            this.API.post("/get-books", {
                search: this.search_book
            }).subscribe(function (data) {
                if (data.itemCount != 0) {
                    _this.books_list = data.devMessage;
                    console.log(_this.books_list);
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
    BooksComponent.prototype.formDefaultSettings = function () {
        this.title = "";
        this.author = "";
        this.owner = "";
        this.location = "";
        this.status = "Available";
    };
    BooksComponent.prototype.saveBook = function () {
        var _this = this;
        if (this.title == "" || this.author == "" || this.owner == "" || this.location == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Oops", "Required Field(s) Missing!", "warning");
        }
        else {
            this.API.post("/save-book", {
                "title": this.title,
                "author": this.author,
                "owner": this.owner,
                "location": this.location,
                "status": this.status,
            }).subscribe(function (data) {
                if (data.statusCode == 200) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Success", data.devMessage, "success");
                    _this.getBooks();
                    _this.AddBook.hide();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    BooksComponent.prototype.editBook = function (data) {
        this.key = data.id;
        this.title = data.title;
        this.author = data.author;
        this.owner = data.owner;
        this.location = data.location;
        this.status = data.status;
    };
    BooksComponent.prototype.updateBook = function () {
        var _this = this;
        if (this.title == "" || this.author == "" || this.owner == "" || this.location == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Oops", "Required Field(s) Missing!", "warning");
        }
        else {
            this.API.post("/update-book", {
                "id": this.key,
                "title": this.title,
                "author": this.author,
                "owner": this.owner,
                "location": this.location,
                "status": this.status,
            }).subscribe(function (data) {
                if (data.statusCode == 200) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Success", data.devMessage, "success");
                    _this.getBooks();
                    _this.EditBook.hide();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    BooksComponent.prototype.viewBook = function (data) {
        this.key = data.id;
        this.title = data.title;
        this.author = data.author;
        this.owner = data.owner;
        this.location = data.location;
        this.status = data.status;
        this.user_name = data.user_name;
        this.checked_out_date = data.checked_out_date;
    };
    BooksComponent.prototype.getComments = function () {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("AddBook"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], BooksComponent.prototype, "AddBook", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("EditBook"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], BooksComponent.prototype, "EditBook", void 0);
    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/pages/maintenance/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.scss */ "./src/app/pages/maintenance/books/books.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], BooksComponent);
    return BooksComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/pages/maintenance/books/books.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/maintenance/books/books.module.ts ***!
  \*********************************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books.component */ "./src/app/pages/maintenance/books/books.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var BOOKS_COMPONENT = [{ path: "", component: _books_component__WEBPACK_IMPORTED_MODULE_4__["BooksComponent"] }];
var BooksModule = /** @class */ (function () {
    function BooksModule() {
    }
    BooksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_books_component__WEBPACK_IMPORTED_MODULE_4__["BooksComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(BOOKS_COMPONENT),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ]
        })
    ], BooksModule);
    return BooksModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-maintenance-books-books-module.js.map