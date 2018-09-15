webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailUserPage = (function () {
    function DetailUserPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    DetailUserPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DetailUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailuser ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\detailuser\detailuser.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <!--\n\n<button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n-->\n\n        <ion-title>Woody\n\n            <span float-right>\n\n                <ion-icon class="icon" (click)="dismiss()"><img src="assets/imgs/ic_cross.png" width="100%;"></ion-icon>           \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="your-cart bg-thime">\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-9>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/1.png">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>+57 300 200 1010</h4>\n\n                        <p>\n\n                            <b>College: </b> South elementary\n\n                        </p>\n\n\n\n                        <p>\n\n                            <b>Level: </b> High school\n\n                        </p>\n\n\n\n                        <p>\n\n                            <b>Group: </b> 10A\n\n                        </p>\n\n                    </ion-col> \n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n\n\n        \n\n        \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\detailuser\detailuser.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], DetailUserPage);
    return DetailUserPage;
}());

//# sourceMappingURL=detailuser.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createaccount_createaccount__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerificationPage = (function () {
    function VerificationPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.phone = navParams.get('phone');
        this.phone = this.phone.replace("+", "");
        this.apiUrl = 'http://165.227.97.137:8282';
    }
    VerificationPage.prototype.createaccountPage = function () {
        var _this = this;
        this.restProvider.getUser(this.phone)
            .then(function (data) {
            _this.profile = data;
            if (!_this.profile.phone) {
                return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__createaccount_createaccount__["a" /* CreateaccountPage */], {
                    phone: _this.phone
                });
            }
            return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], {
                profile: _this.profile
            });
        });
        // this.navCtrl.push(CreateaccountPage,{
        //   phone : this.phone
        // });
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\verification\verification.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Verification Code</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="form" padding-left padding-right>\n\n        <p text-center>Please enter Verification code <br>sent on {{phone}}</p>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label>Verification code</ion-label>\n\n                <ion-input type="text" text-right value="______"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button full class="bg-thime btn-round btn-text" (click)="createaccountPage()">Verify</button>\n\n        <p text-center>\n\n            <span float-left class="text-sky">Resend</span>\n\n            <span float-right>1:32 min left</span>\n\n        </p>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\verification\verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartPage = (function () {
    function CartPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    CartPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\cart\cart.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <!--\n\n<button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n-->\n\n        <ion-title>Cart\n\n            <span float-right>\n\n                <ion-icon class="icon" (click)="dismiss()"><img src="assets/imgs/ic_cross.png" width="100%;"></ion-icon>           \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="your-cart bg-thime">\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/suit_PNG8132.png">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt\n\n                            <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                        </h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-light" padding-right>\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>Quantity\n\n                                <span class="text-light">1\n\n                                 <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/bag.jpg">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt\n\n                            <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                        </h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-light" padding-right>\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">1000\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">800\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>Quantity\n\n                                <span class="text-light">1\n\n                                    <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n\n\n\n\n        <ion-row class="checkout">\n\n            <ion-col col-6>\n\n                <h6 class="text-white">\n\n                    Total <span>\n\n                    <img src="assets/imgs/rupee-white.png" class="rupee-icon">\n\n                    1260.00</span>\n\n                </h6>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <button ion-button full class="bg-green btn-round btn-text btn-shadow">Proceed to Checkout</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = (function () {
    function SearchPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\search\search.html"*/'<ion-content class="bg-light">\n\n    <div class="d-flex searchbar-section">\n\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="Search Brand of product"></ion-searchbar>\n\n        <ion-list>\n\n            <ion-item *ngFor="let item of items">\n\n                {{ item }}\n\n            </ion-item>\n\n        </ion-list>\n\n        <ion-icon name="md-close" class="close-icon" (click)="dismiss()"></ion-icon>\n\n    </div>\n\n\n\n    <div class="recent-search">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                Recent Search\n\n                <span text-right class="right">Clear History</span>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <p>\n\n                    <ion-icon name="ios-time-outline"></ion-icon>Iphone7 in <strong class="text-sky">Mobile</strong>\n\n                </p>\n\n                <p>\n\n                    <ion-icon name="ios-time-outline"></ion-icon>Shirt in <strong class="text-sky">Me,s Wear</strong>\n\n                </p>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n\n\n    <div class="trending-search">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                Trending Search\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <p>\n\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Sleevless kurti\n\n                </p>\n\n                <p>\n\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Shoes\n\n                </p>\n\n                <p>\n\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Watches\n\n                </p>\n\n                <p>\n\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Tshirt\n\n                </p>\n\n                <p>\n\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Headphones\n\n                </p>\n\n                <p>\n\n                    <ion-icon name="ios-trending-up-outline"></ion-icon>Pendrive\n\n                </p>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShirtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__short_short__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShirtsPage = (function () {
    function ShirtsPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ShirtsPage.prototype.shortPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__short_short__["a" /* ShortPage */]);
        modal.present();
    };
    ShirtsPage.prototype.filterPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__filter_filter__["a" /* FilterPage */]);
        modal.present();
    };
    ShirtsPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ShirtsPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    ShirtsPage.prototype.itemdetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__itemdetail_itemdetail__["a" /* ItemdetailPage */]);
    };
    ShirtsPage.prototype.wishlistPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__["a" /* WishlistPage */]);
    };
    ShirtsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shirts ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\shirts\shirts.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <ion-title>Men\'s Shirts\n\n            <span float-right>\n\n            <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <div class="d-flex icon-box">\n\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="Search Shirts" (click)="searchPage()"></ion-searchbar>\n\n        <ion-icon class="icon" (click)="shortPage()"><img src="assets/imgs/ic_short.png" width="100%;"></ion-icon>\n\n        <ion-icon class="icon" (click)="filterPage()" style="margin-right: 7px;"><img src="assets/imgs/ic_filter.png" width="100%;"></ion-icon>\n\n    </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-light">\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card (click)="itemdetailPage()">\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-3.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-4.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div class="d-flex" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\shirts\shirts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ShirtsPage);
    return ShirtsPage;
}());

//# sourceMappingURL=shirts.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShortPage = (function () {
    function ShortPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    ShortPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ShortPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-short',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\short\short.html"*/'<ion-content (click)="dismiss()">\n\n    <div class="group">\n\n        <ion-list radio-group>\n\n            <ion-list-header class="d-flex">\n\n                SHORT BY\n\n                <ion-icon name="ios-arrow-down"></ion-icon>\n\n            </ion-list-header>\n\n            <ion-item>\n\n                <ion-label>Popularity</ion-label>\n\n                <ion-radio checked="true" value="popularity"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Price - High to Low</ion-label>\n\n                <ion-radio value="price_h_l"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Price - Low to High</ion-label>\n\n                <ion-radio value="price_l_h"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Newest First</ion-label>\n\n                <ion-radio value="newest"></ion-radio>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\short\short.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ShortPage);
    return ShortPage;
}());

//# sourceMappingURL=short.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = (function () {
    function FilterPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\filter\filter.html"*/'<ion-content>\n\n    <div class="group">\n\n        <div class="size-filter">\n\n            <div class="slid-container">\n\n                <span>2XS</span>\n\n                <span>XS</span>\n\n                <span class="active">S</span>\n\n                <span>M</span>\n\n                <span class="active">L</span>\n\n                <span>XL</span>\n\n                <span>XX</span>\n\n                <span>XXX</span>\n\n            </div>\n\n        </div>\n\n        <div class="type-filter">\n\n            <div class="slid-container">\n\n                <span>Brand</span>\n\n                <span class="active">Size</span>\n\n                <span>Color</span>\n\n                <span>Wear</span>\n\n                <span>Outfit</span>\n\n            </div>\n\n        </div>\n\n        <ion-row text-center class="    action">\n\n            <ion-col col-5>\n\n                <p>Reset</p>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n                <p>\n\n                    <ion-icon name="ios-close-outline" (click)="dismiss()"></ion-icon>\n\n                </p>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n                <p class="active">Apply</p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\filter\filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippiningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShippiningPage = (function () {
    function ShippiningPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ShippiningPage.prototype.paymentPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    };
    ShippiningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shippining ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\shippining\shippining.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Confirm order</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div class="address-section">\n\n        <ion-row text-center class="status">\n\n            <ion-col class="complate">\n\n                <ion-icon name="ios-checkmark-circle"></ion-icon><span>Sign in</span></ion-col>\n\n            <ion-col class="processing">\n\n                <ion-icon name="md-radio-button-off"></ion-icon><span>Shipping</span></ion-col>\n\n            <ion-col class="panding">\n\n                <ion-icon name="ion-record"></ion-icon><span>Payment</span></ion-col>\n\n        </ion-row>\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>\n\n                    YOUR DELIVERY ADDRESS<span class="text-sky">Change<ion-icon name="ios-arrow-forward" class="icon"></ion-icon></span></p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <div class="addres-detail">\n\n                    <h3>\n\n                        <ion-icon name="ios-pin-outline" class="icon-position"></ion-icon>Jhon Smith\n\n                    </h3>\n\n                    <p>DE234 Mapleridge Drive Plano,<br> Texas 743A US.</p>\n\n                    <p>+91 908765432</p>\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="your-items">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>YOUR ITEMS</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/suit_PNG8132.png">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-sky  mr-5">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-light">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>Quantity\n\n                                <span class="">1\n\n                                 <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                        <p class="card-bottom" padding-top>\n\n                            Delivery by Fri,Jun 9: 40\n\n                            <span class="text-sky small" text-right> Remove</span>\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="your-items">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>YOUR ITEMS</p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-row>\n\n                    <ion-col col-3>\n\n                        <div class="img-box">\n\n                            <img src="assets/imgs/suit_PNG8132.png">\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-9>\n\n                        <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                        <div class="rate">\n\n                            <div style="display: flex;" class="price-box">\n\n                                <div class="price text-sky  mr-5">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                                <div class="price text-light">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                            </div>\n\n                            <p text-right>Quantity\n\n                                <span class="">1\n\n                                    <ion-icon name="ios-arrow-down-outline"></ion-icon>\n\n                                </span>\n\n                            </p>\n\n                        </div>\n\n                        <p class="card-bottom" padding-top>\n\n                            Delivery by Fri,Jun 9: 40\n\n                            <span class="text-sky small" text-right> Remove</span>\n\n                        </p>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n    <div class="spacebar-bottom"></div>\n\n    <div class="receipt btn-fisx-bottom">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p>Item(s) price\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                    380\n\n                    </span>\n\n                </p>\n\n                <p>Delivery Payable\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                   40\n\n                    </span>\n\n                </p>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <p>Amount Payable\n\n                    <span text-right><img src="assets/imgs/rupee-black.png">\n\n                   420\n\n                    </span>\n\n                </p>\n\n                <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="paymentPage()">CONTINUE</button>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\shippining\shippining.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ShippiningPage);
    return ShippiningPage;
}());

//# sourceMappingURL=shippining.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__placed_placed__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentPage = (function () {
    function PaymentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PaymentPage.prototype.placedPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__placed_placed__["a" /* PlacedPage */]);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\payment\payment.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Pay now</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content radio-group class="bg-light">\n\n    <ion-row text-center class="status">\n\n        <ion-col class="complate">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>Sign in</span></ion-col>\n\n        <ion-col class="processing">\n\n            <ion-icon name="ios-checkmark-circle"></ion-icon><span>Shipping</span></ion-col>\n\n        <ion-col class="panding">\n\n            <ion-icon name="md-radio-button-off"></ion-icon><span>Payment</span></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-card>\n\n        <p class="heading">PAYMENT METHOD</p>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>Credit/Debit Card</ion-label>\n\n                <ion-radio checked="true" value="card"></ion-radio>\n\n            </ion-item>\n\n            <div class="form">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <ion-label>Card Type</ion-label>\n\n                        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                            <ion-option selected value="visa">Visa Express</ion-option>\n\n                            <ion-option value="debit">Debit Card</ion-option>\n\n                            <ion-option value="master">Master Card</ion-option>\n\n                            <ion-option value="credit">Credit Card </ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>Card Number</ion-label>\n\n                        <ion-input type="text" text-right value="1234-1234-1234-5678"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>Name on Card</ion-label>\n\n                        <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n                    </ion-item>\n\n                    <ion-row>\n\n                        <ion-col col-8 class="">\n\n                            <div class="d-flex mr-5">\n\n                                <ion-item>\n\n                                    <ion-label>Expiry Date</ion-label>\n\n                                    <ion-input type="text" text-right value="11/20"></ion-input>\n\n                                </ion-item>\n\n                                <ion-icon name="md-calendar" class="text-light calendar-icon"></ion-icon>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4>\n\n                            <ion-item>\n\n                                <ion-label>cvv</ion-label>\n\n                                <ion-input type="text" text-right value="244"></ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-item>\n\n                        <ion-label text-right>Save my card details</ion-label>\n\n                        <ion-toggle color="secondary" checked="true"></ion-toggle>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>Cash on Delivery</ion-label>\n\n                <ion-radio value="cod"></ion-radio>\n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label>Net Banking</ion-label>\n\n                <ion-radio value="net_banking"></ion-radio>\n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <div class="spacebar"></div>\n\n    <div class="btn-padding btn-fisx-bottom">\n\n        <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="placedPage()">PAY <img src="assets/imgs/rupee-white.png">420 \n\n        </button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\payment\payment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlacedPage = (function () {
    function PlacedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PlacedPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PlacedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-placed ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\placed\placed.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Order Placed !</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="img-box">\n\n        <img src="assets/imgs/order-placed.jpg">\n\n    </div>\n\n    <h3 class="text-sky" text-center>Your order placed !!</h3>\n\n    <h4 class="" text-center>Your order has been placed successfully.<br>please visit <strong>My Order</strong> page to ckeck<br>the progress and more details</h4>\n\n    <div class="btn-padding btn-fisx-bottom ">\n\n        <button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="homePage()">CONTINUE SHOPPING</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\placed\placed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], PlacedPage);
    return PlacedPage;
}());

//# sourceMappingURL=placed.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detailuser_detailuser__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__itemdetail_itemdetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_chat_chat__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, modalCtrl, restProvider, storage, chatService, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        this.storage = storage;
        this.chatService = chatService;
        this.events = events;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.toUser = {
            id: '210000198410281948',
            name: 'Hancock'
        };
        // Get mock user information
        this.chatService.getUserInfo()
            .then(function (res) {
            _this.user = res;
        });
        this.friend = navParams.get('friend');
        if (navParams.get('profile')) {
            this.profile = navParams.get('profile');
            storage.set('profile', JSON.stringify(this.profile));
            this.restProvider.getUsers(this.profile.phone)
                .then(function (data) {
                _this.users = data;
            });
        }
        else {
            storage.get('profile').then(function (val) {
                _this.profile = JSON.parse(val);
                _this.restProvider.getUsers(_this.profile.phone)
                    .then(function (data) {
                    _this.users = data;
                });
            });
        }
    }
    ChatPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    ChatPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.focus();
        }
        else {
            this.setTextareaScroll();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatPage.prototype.focus = function () {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    };
    ChatPage.prototype.setTextareaScroll = function () {
        var textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    };
    ChatPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.restProvider.getUsers(this.profile.phone)
            .then(function (data) {
            _this.users = data;
            refresher.complete();
        });
    };
    ChatPage.prototype.ionViewWillLeave = function () {
        // unsubscribe
        this.events.unsubscribe('chat:received');
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //get message list
        this.getMsg();
        // Subscribe to received  new message events
        this.events.subscribe('chat:received', function (msg) {
            _this.pushNewMsg(msg);
        });
    };
    ChatPage.prototype.getMsg = function () {
        var _this = this;
        // Get mock message list
        return this.chatService
            .getMsgList()
            .subscribe(function (res) {
            _this.msgList = res;
            _this.scrollToBottom();
        });
    };
    ChatPage.prototype.sendMsg = function () {
        var _this = this;
        if (!this.editorMsg.trim())
            return;
        // Mock message
        var id = Date.now().toString();
        var newMsg = {
            messageId: Date.now().toString(),
            userId: this.user.id,
            userName: this.user.name,
            userAvatar: this.user.avatar,
            toUserId: this.toUser.id,
            time: Date.now(),
            message: this.editorMsg,
            status: 'pending'
        };
        this.pushNewMsg(newMsg);
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.focus();
        }
        this.chatService.sendMsg(newMsg)
            .then(function () {
            var index = _this.getMsgIndexById(id);
            if (index !== -1) {
                _this.msgList[index].status = 'success';
            }
        });
    };
    ChatPage.prototype.pushNewMsg = function (msg) {
        var userId = this.user.id, toUserId = this.toUser.id;
        // Verify user relationships
        if (msg.userId === userId && msg.toUserId === toUserId) {
            this.msgList.push(msg);
        }
        else if (msg.toUserId === userId && msg.userId === toUserId) {
            this.msgList.push(msg);
        }
        this.scrollToBottom();
    };
    ChatPage.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    ChatPage.prototype.detailUser = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__detailuser_detailuser__["a" /* DetailUserPage */]);
        modal.present();
    };
    ChatPage.prototype.categoryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */]);
    };
    ChatPage.prototype.wishlistPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__["a" /* WishlistPage */]);
    };
    ChatPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ChatPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    ChatPage.prototype.itemdetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__itemdetail_itemdetail__["a" /* ItemdetailPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ChatPage.prototype, "messageInput", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\chat\chat.html"*/'<ion-header > \n\n  <ion-navbar >\n\n      <ion-item style="background-color: #43d2f5 !important;" >\n\n          <ion-avatar item-start (click)="detailUser()" *ngIf="profile">\n\n              <img src="assets/imgs/{{friend.id}}.png">\n\n          </ion-avatar>\n\n        <h2 *ngIf="profile">{{friend.name}}</h2>\n\n      </ion-item>\n\n   \n\n  </ion-navbar>\n\n</ion-header>\n\n      <ion-content>\n\n        <div class="message-wrap">\n\n      \n\n          <div *ngFor="let msg of msgList"\n\n               class="message"\n\n               [class.left]=" msg.userId === toUser.id "\n\n               [class.right]=" msg.userId === user.id ">\n\n            <img class="user-img" [src]="msg.userAvatar" alt="" >\n\n            <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n\n            <div class="msg-detail">\n\n              <div class="msg-info">\n\n                <p>\n\n                  {{msg.userName}}&nbsp;&nbsp;&nbsp;{{msg.time | relativeTime}}</p>\n\n              </div>\n\n              <div class="msg-content">\n\n                <span class="triangle"></span>\n\n                <p class="line-breaker ">{{msg.message}}</p>\n\n              </div>\n\n            </div>\n\n          </div>\n\n      \n\n        </div>\n\n      </ion-content>\n\n      \n\n      <ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n        <div class="input-wrap">\n\n          <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n\n            <ion-icon name="md-happy"></ion-icon>\n\n          </button>\n\n          <textarea #chat_input\n\n                    placeholder="Text Input"\n\n                    [(ngModel)]="editorMsg"\n\n                    (keyup.enter)="sendMsg()"\n\n                    (focusin)="onFocus()">\n\n          </textarea>\n\n          <button ion-button clear icon-only item-right (click)="sendMsg()">\n\n            <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n          </button>\n\n        </div>\n\n        <emoji-picker [(ngModel)]="editorMsg"></emoji-picker>'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\chat\chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_chat_chat__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* unused harmony export userAvatar */
/* unused harmony export toUserAvatar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(110);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var userAvatar = 'https://github.com/HsuanXyz/ionic3-chat/blob/master/src/assets/user.jpg?raw=true';
var toUserAvatar = 'https://github.com/HsuanXyz/ionic3-chat/blob/master/src/assets/to-user.jpg?raw=true';
var ChatService = (function () {
    function ChatService(http, events) {
        this.http = http;
        this.events = events;
    }
    ChatService.prototype.mockNewMsg = function (msg) {
        var _this = this;
        var mockMsg = {
            messageId: Date.now().toString(),
            userId: '210000198410281948',
            userName: 'Hancock',
            userAvatar: toUserAvatar,
            toUserId: '140000198202211138',
            time: Date.now(),
            message: msg.message,
            status: 'success'
        };
        setTimeout(function () {
            _this.events.publish('chat:received', mockMsg, Date.now());
        }, Math.random() * 1800);
    };
    ChatService.prototype.getMsgList = function () {
        var msgListUrl = 'https://raw.githubusercontent.com/HsuanXyz/ionic3-chat/master/src/assets/mock/msg-list.json';
        return this.http.get(msgListUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (response) { return response.array.map(function (msg) { return (__assign({}, msg, { userAvatar: msg.userAvatar === './assets/user.jpg' ? userAvatar : toUserAvatar })); }); }));
    };
    ChatService.prototype.sendMsg = function (msg) {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(msg); }, Math.random() * 1000); })
            .then(function () { return _this.mockNewMsg(msg); });
    };
    ChatService.prototype.getUserInfo = function () {
        var userInfo = {
            id: '140000198202211138',
            name: 'Luff',
            avatar: userAvatar
        };
        return new Promise(function (resolve) { return resolve(userInfo); });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonenumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verification_verification__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhonenumberPage = (function () {
    function PhonenumberPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PhonenumberPage.prototype.homePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PhonenumberPage.prototype.passwordPage = function () {
        if (this.phone.length <= 3) {
            return alert('Enter a valid number');
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__verification_verification__["a" /* VerificationPage */], {
            phone: this.phone
        });
    };
    PhonenumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phonenumber ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\phonenumber\phonenumber.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>MyWay\n\n            <!-- <span float-right (click)="homePage()">Skip</span> -->\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <!-- <p>Heart</p> -->\n\n    <div class="form" padding-left padding-right>\n\n        <p text-center>Please provide your Mobile number<br> to Login/Sign up on MyWay</p>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label>Phone Number</ion-label>\n\n                <ion-input type="text" [(ngModel)]=\'phone\' text-right value="+57"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button full class="bg-thime btn-round btn-text" (click)="passwordPage()">Continue</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\phonenumber\phonenumber.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], PhonenumberPage);
    return PhonenumberPage;
}());

//# sourceMappingURL=phonenumber.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateaccountPage = (function () {
    function CreateaccountPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.phone = navParams.get('phone');
    }
    CreateaccountPage.prototype.homePage = function () {
        var _this = this;
        this.restProvider.saveUser({
            phone: this.phone,
            name: this.name,
            email: this.email,
            college: this.college,
            level: this.level,
            group: this.group,
            profile: this.profile
        })
            .then(function (data) {
            _this.profile = data;
            return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {
                profile: _this.profile
            });
        });
    };
    CreateaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createaccount',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\createaccount\createaccount.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Create Account</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="form" padding-left padding-right>\n\n        <p text-center padding-bottom margin-bottom>Create your Account on MyWay</p>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label>Phone Number</ion-label>\n\n                <ion-input type="text" text-right [(ngModel)]=\'phone\' value="{{phone}}"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Full Name</ion-label>\n\n                <ion-input type="text" text-right [(ngModel)]=\'name\' value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Email Address</ion-label>\n\n                <ion-input type="text" text-right [(ngModel)]=\'email\' value=""></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>College</ion-label>\n\n                <ion-select [(ngModel)]="college">\n\n                    <ion-option >Colegio Nacional</ion-option>\n\n                    <ion-option >South elementary</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Level</ion-label>\n\n                <ion-select [(ngModel)]="level">\n\n                    <ion-option >Primary school</ion-option>\n\n                    <ion-option >High school</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Group</ion-label>\n\n                <ion-select [(ngModel)]="group">\n\n                    <ion-option >1A</ion-option>\n\n                    <ion-option >1B</ion-option>\n\n                    <ion-option >2A</ion-option>\n\n                    <ion-option >5A</ion-option>\n\n                    <ion-option >9A</ion-option>\n\n                    <ion-option >9B</ion-option>\n\n                    <ion-option >10B</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            \n\n            \n\n        </ion-list>\n\n        <button ion-button full class="bg-thime btn-round btn-text" (click)="homePage()">Continue</button>\n\n        <p text-center>\n\n            <small>\n\n                By Registering ! agree to \n\n                <span class="text-sky">\n\n                    Terms & conditon\n\n                </span>\n\n            </small>\n\n        </p>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\createaccount\createaccount.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], CreateaccountPage);
    return CreateaccountPage;
}());

//# sourceMappingURL=createaccount.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_accountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var My_accountPage = (function () {
    function My_accountPage(navCtrl, modalCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.account = "profile";
        this.storage.get('profile').then(function (val) {
            _this.profile = JSON.parse(val);
            console.log(_this.profile);
        });
    }
    My_accountPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    My_accountPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    My_accountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my_account ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\my_account\my_account.html"*/'<ion-header class="bg-thime" *ngIf="profile">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>My Acount\n\n            <span float-right> \n\n                <!-- <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n                <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>               -->\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <ion-list padding-left>\n\n        <ion-item padding-left padding-right>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/{{profile.id}}.png">\n\n            </ion-avatar>\n\n            <h2 class="">{{profile.name}}\n\n                <small class=""> Edit profile</small>\n\n            </h2>\n\n            <p class="text-dark">+{{profile.phone}}\n\n            </p>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-toolbar no-border-top class="tab-bar">\n\n        <ion-segment [(ngModel)]="account">\n\n            <ion-segment-button value="profile">\n\n                Profile\n\n            </ion-segment-button>\n\n            <ion-segment-button value="card">\n\n                My Cards\n\n            </ion-segment-button>\n\n            <ion-segment-button value="address">\n\n                My Address\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content *ngIf="profile" style="margin-top: 190px;">\n\n    <div [ngSwitch]="account">\n\n        <div *ngSwitchCase="\'profile\'" class="profile-section">\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label floating>Name</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="profile.name" ></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>Email</ion-label>\n\n                    <ion-input type="email" [(ngModel)]="profile.email"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>Phone Number</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="profile.phone"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>College</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="profile.college"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>Level</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="profile.level"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>Group</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="profile.group"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-label floating>Gender</ion-label>\n\n                    <ion-input type="text" value="Mail"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label floating>BIRTHDATE</ion-label>\n\n                    <ion-input type="text" value="23 Dec, 1990"></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n\n\n        <div *ngSwitchCase="\'card\'" class="card-section bg-light">\n\n            <ion-card>\n\n                <ion-card-content>\n\n                    <div class="card-row">XXXX XXXX XXXX 5887<img src="assets/imgs/visa.png"></div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-card-content>\n\n                    <div class="card-row">XXXX XXXX XXXX 5887<img src="assets/imgs/master-card.png"></div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <div class="form" padding-left padding-right>\n\n                    <p padding-bottom margin-bottom>\n\n                        <ion-icon name="ios-add-circle-outline"></ion-icon>ADD NEW CARD <span>Save</span></p>\n\n                    <ion-list>\n\n                        <ion-item>\n\n                            <ion-label>Card Type</ion-label>\n\n                            <ion-input type="text" text-right value="Visa Express"></ion-input>\n\n                        </ion-item>\n\n                        <ion-item>\n\n                            <ion-label>Card Number</ion-label>\n\n                            <ion-input type="text" text-right value="1234-1234-1234-1234"></ion-input>\n\n                        </ion-item>\n\n                        <ion-item>\n\n                            <ion-label>Name on Card</ion-label>\n\n                            <ion-input type="text" text-right value="Jhon Smith"></ion-input>\n\n                        </ion-item>\n\n                        <div class="date-cvc-row">\n\n                            <div class="date">\n\n                                <ion-item>\n\n                                    <ion-label>Expiry Date</ion-label>\n\n                                    <ion-input type="text" text-right value="10/23"></ion-input>\n\n                                </ion-item>\n\n                            </div>\n\n                            <div class="cvc">\n\n                                <ion-item>\n\n                                    <ion-label>CVV</ion-label>\n\n                                    <ion-input type="text" text-right value="234"></ion-input>\n\n                                </ion-item>\n\n                            </div>\n\n                        </div>\n\n                        <ion-item class="border-none">\n\n                            <ion-label text-right> Save my card details</ion-label>\n\n                            <ion-toggle checked="false"></ion-toggle>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n            </ion-card>\n\n        </div>\n\n\n\n        <div *ngSwitchCase="\'address\'" class="address-section bg-light">\n\n            <ion-card>\n\n                <ion-card-content>\n\n                    <div class="addres-detail">\n\n                        <h3>\n\n                            <ion-icon name="ios-pin-outline" class="icon-position"></ion-icon>Jhon Smith <span>Change<ion-icon name="ios-arrow-forward"></ion-icon></span></h3>\n\n                        <p>DE234 Mapleridge Drive Plano,<br> Texas 743A US.</p>\n\n                        <p>+91 908765432</p>\n\n\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <div class="form" padding-left padding-right>\n\n                    <p padding-bottom margin-bottom>\n\n                        <ion-icon name="ios-add-circle-outline"></ion-icon>ADD NEW CARD <span>Save</span></p>\n\n                    <ion-list>\n\n                        <ion-item>\n\n                            <ion-label>Pincode</ion-label>\n\n                            <ion-input type="text" text-right value="110092"></ion-input>\n\n                        </ion-item>\n\n                        <ion-item>\n\n                            <ion-label>Address</ion-label>\n\n                            <ion-input type="text" text-right value="DE234 Mapleridge Drive Plano"></ion-input>\n\n                        </ion-item>\n\n                        <ion-item>\n\n                            <ion-label>Phone Number</ion-label>\n\n                            <ion-input type="text" text-right value="+91 908 765 4321"></ion-input>\n\n                        </ion-item>\n\n                        <div class="date-cvc-row">\n\n                            <div class="city">\n\n                                <ion-item>\n\n                                    <ion-label>City</ion-label>\n\n                                    <ion-input type="text" text-right value="Delhi"></ion-input>\n\n                                </ion-item>\n\n                            </div>\n\n                            <div class="State">\n\n                                <ion-item>\n\n                                    <ion-label>State</ion-label>\n\n                                    <ion-input type="text" text-right value="Delhi"></ion-input>\n\n                                </ion-item>\n\n                            </div>\n\n                        </div>\n\n                        <ion-item class="border-none">\n\n                            <ion-label text-right>Make this my default address</ion-label>\n\n                            <ion-toggle checked="true"></ion-toggle>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n            </ion-card>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\my_account\my_account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], My_accountPage);
    return My_accountPage;
}());

//# sourceMappingURL=my_account.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Myorder_1Page = (function () {
    function Myorder_1Page(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Myorder_1Page.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    Myorder_1Page.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    Myorder_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myorder_1 ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\myorder_1\myorder_1.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>My Order\n\n            <span float-right> \n\n               <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="border-bottom-none border" style="position: relative;">\n\n        <ion-card-header>\n\n            <p class="left-side">\n\n                <span class="text-light">Ordered ID</span> 2513254112\n\n                <br>\n\n                <span class="text-light">Placed on</span> 17-march-17\n\n            </p>\n\n            <p class="right-side text-sky">\n\n                Cancel Order\n\n            </p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <small><span class="text-light">Quantity:</span> 1</small>\n\n                    <p>\n\n                        <img src="assets/imgs/rupee-black.png"> 380\n\n                        <small class="text-light">via COD</small>\n\n                    </p>\n\n                    <small><span class="text-light">Tracking Status on</span> 15-March\'17</small>\n\n                    <button ion-button full class="bg-green btn-round  btn-text">Reached Hub,US  <ion-icon name="ios-arrow-down-outline"></ion-icon></button>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div class="order-info border-top-none border">\n\n        <div class="order-container">\n\n            <div class="status active">\n\n                <p padding-left padding-right>Order<br>Placed</p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status active">\n\n                <p>\n\n                    Dispatched<br>from Bangalore\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status active">\n\n                <p>\n\n                    Reached Hub <br>New Delhi\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p>12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status">\n\n                <p>\n\n                    Out for<br>Delivery\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n            <div class="status">\n\n                <p>\n\n                    Item<br>Delivery\n\n                </p>\n\n                <ion-icon name="md-radio-button-on"></ion-icon>\n\n                <p style="color: #555">12:05pm<br>12 May 17</p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <p class="left-side">\n\n                <span class="text-light">Ordered ID</span> 2513254112\n\n                <br>\n\n                <span class="text-light">Placed on</span> 17-march-17\n\n            </p>\n\n            <p class="right-side text-sky">\n\n                Return Product\n\n            </p>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-7>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <small><span class="text-light">Quantity:</span> 1</small>\n\n                    <p>\n\n                        <img src="assets/imgs/rupee-black.png"> 880\n\n                        <small class="text-light">via Credit Card</small>\n\n                    </p>\n\n                    <small><span class="text-light">Delivered on </span> 05-May\'17</small>\n\n                    <button ion-button full class="bg-thime btn-round  btn-text">Rate Now<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\myorder_1\myorder_1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], Myorder_1Page);
    return Myorder_1Page;
}());

//# sourceMappingURL=myorder_1.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myorder_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Myorder_2Page = (function () {
    function Myorder_2Page(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Myorder_2Page.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    Myorder_2Page.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    Myorder_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myorder_2 ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\myorder_2\myorder_2.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>My Order\n\n            <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>             \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>Ordered on 12-March-017</p>\n\n                        <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">Cancel order</small>\n\n                        <small class="text-white bg-green green-shadow">Track Order</small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>Delivered on 12-March-017</p>\n\n                        <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">Return item</small>\n\n                        <small class="text-white bg-thime sky-shadow">Rate now</small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/wach.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Multicolor Dil Men\'s Watch</h4>\n\n                    <div class="rate">\n\n                        <p class=text-light>Delivered on 12-March-017</p>\n\n                        <div style="display: flex;">\n\n                            <div class="price text-light mr-5">\n\n                                <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                            </div>\n\n                            <div class="price text-sky">\n\n                                <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div class="card-btn" float-right padding-top>\n\n                        <small class="text-sky ">Share product</small>\n\n                        <small class="text-white bg-gray gray-shadow">Rated 4\n\n                         <ion-icon name="md-star"></ion-icon>\n\n                        </small>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\myorder_2\myorder_2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], Myorder_2Page);
    return Myorder_2Page;
}());

//# sourceMappingURL=myorder_2.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelpPage = (function () {
    function HelpPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    HelpPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    HelpPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    HelpPage.prototype.wishlistPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__["a" /* WishlistPage */]);
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\help\help.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Help Center\n\n            <span float-right>\n\n                  <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <ion-searchbar (ionInput)="getItems($event)" (click)="searchPage()"></ion-searchbar>\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of items">\n\n            {{ item }}\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <h6 padding-left>Top FAQ</h6>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Order tracking and Delivery\n\n            <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Refund\n\n            <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Cancellation of orders\n\n            <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Seller Support\n\n            <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Payments\n\n            <ion-icon name="ios-arrow-forward-outline" float-right></ion-icon>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewPage = (function () {
    function ReviewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-review ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\review\review.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Add Review</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-header style="padding-bottom: 0;">\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n\n\n        <ion-card-content>\n\n            <div class="form">\n\n                <ion-list>\n\n                    <ion-item class="write-reveiw">\n\n                        <ion-textarea type="text" placeholder="Write your Review"></ion-textarea>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-input type="text" placeholder="Heading four your review"></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n            <button ion-button full class="bg-green btn-round btn-text">SUBMIT NOW</button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <h5>Previous orders</h5>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/wach.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Multicolor Dil Men\'s Watch</h4>\n\n                    <div class="rateing">\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                        <ion-icon name="md-star" class="text-light"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-header>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\review\review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
var EmojiProvider = (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (6));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 6, (i + 1) * 6));
        }
        return items;
    };
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_password_password__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_verification_verification__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_createaccount_createaccount__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_category__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shirts_shirts__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_itemdetail_itemdetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_shippining_shippining__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_placed_placed__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_account_my_account__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_myorder_1_myorder_1__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_myorder_2_myorder_2__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_help_help__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_detailuser_detailuser__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_chat_chat__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_review_review__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_short_short__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_filter_filter__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_rest_rest__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_common_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_emoji_emoji__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_chat_chat__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_emoji_picker_emoji_picker__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_relative_time_relative_time__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shirts_shirts__["a" /* ShirtsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_itemdetail_itemdetail__["a" /* ItemdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_shippining_shippining__["a" /* ShippiningPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_placed_placed__["a" /* PlacedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_account_my_account__["a" /* My_accountPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_short_short__["a" /* ShortPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_detailuser_detailuser__["a" /* DetailUserPage */],
                __WEBPACK_IMPORTED_MODULE_34__components_emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pipes_relative_time_relative_time__["a" /* RelativeTimePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_31__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shirts_shirts__["a" /* ShirtsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_itemdetail_itemdetail__["a" /* ItemdetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_shippining_shippining__["a" /* ShippiningPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_placed_placed__["a" /* PlacedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_account_my_account__["a" /* My_accountPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_detailuser_detailuser__["a" /* DetailUserPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_short_short__["a" /* ShortPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_34__components_emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_emoji_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_chat_chat__["a" /* ChatService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_category_category__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wishlist_wishlist__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myorder_1_myorder_1__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_myorder_2_myorder_2__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_review_review__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.storage.get('profile').then(function (val) {
                _this.profile = JSON.parse(val);
                console.log(_this.profile);
            });
        });
    };
    MyApp.prototype.loadProfile = function () {
    };
    MyApp.prototype.myorder_1Page = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_myorder_1_myorder_1__["a" /* Myorder_1Page */]);
    };
    MyApp.prototype.myorder_2Page = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_myorder_2_myorder_2__["a" /* Myorder_2Page */]);
    };
    MyApp.prototype.my_accountPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_my_account_my_account__["a" /* My_accountPage */]);
    };
    MyApp.prototype.categoryPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_category_category__["a" /* CategoryPage */]);
    };
    MyApp.prototype.homePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.reviewPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_review_review__["a" /* ReviewPage */]);
    };
    MyApp.prototype.wishlistPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    MyApp.prototype.cartPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.helpPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */]);
    };
    MyApp.prototype.phonenumberPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_phonenumber_phonenumber__["a" /* PhonenumberPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header *ngIf="profile">\n\n        <ion-toolbar>\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/{{profile.id}}.png">\n\n                    </ion-avatar>\n\n                    <h2>{{profile.name}}\n\n                        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n                    </h2>\n\n                    <p>+{{profile.phone}}</p>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-toolbar>\n\n        <!-- <div class="menu-tabs" padding text-center>\n\n            <ion-row>\n\n                <ion-col col-4 menuClose (click)="myorder_1Page()">\n\n                    <img src="assets/imgs/my_order.png">\n\n                    <p>My Scores</p>\n\n                </ion-col>\n\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/my-card.png">\n\n                    <p>My Card</p>\n\n                </ion-col>\n\n                <ion-col col-4 menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/my_location.png">\n\n                    <p>My Addresses</p>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div> -->\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <div class="menu-title">\n\n            <ion-list>\n\n                <button ion-item menuClose (click)="homePage()">\n\n                    <img src="assets/imgs/ic_home.png ">\n\n                        Home\n\n                </button>\n\n                <!-- <button ion-item menuClose>\n\n                    <img src="assets/imgs/ic_categories.png ">\n\n                        Categories\n\n                </button> -->\n\n                \n\n                <button ion-item menuClose (click)="myorder_2Page()">\n\n                    <img src="assets/imgs/ic_more.png ">\n\n                        My Scores\n\n                </button>\n\n                <button ion-item menuClose (click)="wishlistPage()">\n\n                    <img src="assets/imgs/ic_my_wishlist.png ">\n\n                        Leaderboard\n\n                </button>\n\n                <button ion-item menuClose (click)="my_accountPage()">\n\n                    <img src="assets/imgs/ic_my_account.png ">\n\n                        My Profile\n\n                </button>\n\n                <!-- <button ion-item menuClose (click)="helpPage()">\n\n                    <img src="assets/imgs/ic_help.png ">\n\n                        Help Center\n\n                </button> -->\n\n                <button ion-item menuClose (click)="phonenumberPage()">\n\n                    <img src="assets/imgs/ic_logout.png ">\n\n                        Logout\n\n                </button>\n\n                <!-- <button ion-item menuClose (click)="reviewPage()">\n\n                    <img src="assets/imgs/ic_more.png ">\n\n                        Add Reviews\n\n                </button> -->\n\n            </ion-list>\n\n        </div>\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage " #content swipeBackEnabled="false "></ion-nav>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordPage = (function () {
    function PasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.phone = navParams.get('phone');
    }
    PasswordPage.prototype.verificationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verification_verification__["a" /* VerificationPage */]);
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\password\password.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Password\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="form" padding-left padding-right>\n\n        <p text-center>Enter your 6 digit password your created while sign up</p>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label>Password</ion-label>\n\n                <ion-input type="text" text-right value="______"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button full class="bg-thime btn-round btn-text" (click)="verificationPage()">Continue</button>\n\n        <p text-center class="text-sky">Forgot Password</p>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\password\password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_emoji_emoji__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = (function () {
    function EmojiPickerComponent(emojiProvider, restProvider) {
        var _this = this;
        this.restProvider = restProvider;
        this.restProvider.getEmojis()
            .then(function (data) {
            var result = Object.keys(data).map(function (key) {
                return [Number(key), data[key]];
            });
            var groupNum = Math.ceil(result.length / (6));
            var items = [];
            for (var i = 0; i < groupNum; i++) {
                items.push(result.slice(i * 6, (i + 1) * 6));
            }
            _this.emojiArr = items;
            console.log(_this.emojiArr);
        });
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    EmojiPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'emoji-picker',
            providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\components\emoji-picker\emoji-picker.html"*/'<!-- Generated template for the EmojiPickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides >\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item"\n              (click)="setValue(item)"\n              *ngFor="let item of items">\n              <img src="http://165.227.97.137:8282/img/emoticons/{{item[1].image}}">\n              \n        </span>\n\n        \n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\components\emoji-picker\emoji-picker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_emoji_emoji__["a" /* EmojiProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RelativeTimePipe = (function () {
    function RelativeTimePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativeTimePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default()(new Date(value), { addSuffix: true });
    };
    RelativeTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'relativeTime',
        })
    ], RelativeTimePipe);
    return RelativeTimePipe;
}());

//# sourceMappingURL=relative-time.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detailuser_detailuser__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__itemdetail_itemdetail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_rest_rest__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = (function () {
    function HomePage(navCtrl, navParams, modalCtrl, restProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        this.storage = storage;
        if (navParams.get('profile')) {
            this.profile = navParams.get('profile');
            storage.set('profile', JSON.stringify(this.profile));
            this.restProvider.getUsers(this.profile.phone)
                .then(function (data) {
                _this.users = data;
            });
        }
        else {
            storage.get('profile').then(function (val) {
                _this.profile = JSON.parse(val);
                _this.restProvider.getUsers(_this.profile.phone)
                    .then(function (data) {
                    _this.users = data;
                });
            });
        }
    }
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.restProvider.getUsers(this.profile.phone)
            .then(function (data) {
            _this.users = data;
            refresher.complete();
        });
    };
    HomePage.prototype.goChat = function (person) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */], {
            friend: person
        });
    };
    HomePage.prototype.detailUser = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__detailuser_detailuser__["a" /* DetailUserPage */]);
        modal.present();
    };
    HomePage.prototype.categoryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */]);
    };
    HomePage.prototype.wishlistPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__["a" /* WishlistPage */]);
    };
    HomePage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    HomePage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    HomePage.prototype.itemdetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__itemdetail_itemdetail__["a" /* ItemdetailPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\home\home.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle style="display: block !important;">\n\n            <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n        </button>\n\n        <ion-title>MyWay\n\n            <span float-right>\n\n                <!-- <ion-icon class="icon" (click)="wishlistPage()"><img src="assets/imgs/ic_my_wishlist.png" width="100%;"></ion-icon> -->\n\n                <!-- <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon> -->\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <!-- <ion-searchbar (ionInput)="getItems($event)" placeholder="Search Brand or Product..." (click)="searchPage()"></ion-searchbar> -->\n\n    <!-- <ion-list>\n\n        <ion-item *ngFor="let item of items">\n\n        </ion-item>\n\n    </ion-list> -->\n\n    <!-- <div class="tab-row">\n\n        <ion-row>\n\n            <ion-col (click)="categoryPage()">\n\n                <div class="img-box" text-center>\n\n                    <img src="assets/imgs/electronics.png">\n\n                    <small class="text-white">Electronics</small>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col (click)="categoryPage()">\n\n                <div class="img-box" text-center>\n\n                    <img src="assets/imgs/fashion.png">\n\n                    <small class="text-white">Fashion</small>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col (click)="categoryPage()">\n\n                <div class="img-box" text-center>\n\n                    <img src="assets/imgs/home.png">\n\n                    <small class="text-white">Home</small>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col (click)="categoryPage()">\n\n                <div class="img-box" text-center>\n\n                    <img src="assets/imgs/mobaile.png">\n\n                    <small class="text-white">Mobaile</small>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col (click)="categoryPage()">\n\n                <div class="img-box" text-center>\n\n                    <img src="assets/imgs/more.png">\n\n                    <small class="text-white">More</small>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div> -->\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)"> \n\n        <ion-refresher-content></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <ion-list>\n\n        <ion-card *ngFor="let person of users">\n\n            <ion-item>\n\n                <ion-avatar item-start (click)="detailUser()">\n\n                    <img src="assets/imgs/{{person.id}}.png">\n\n                </ion-avatar>\n\n                <h2 (click)="goChat(person)">{{person.name}}</h2>\n\n                <p (click)="goChat(person)">Hey there! I am using MyWay</p>\n\n            </ion-item>\n\n        </ion-card>\n\n    </ion-list>\n\n        \n\n\n\n    \n\n  \n\n   \n\n</ion-content>\n\n\n\n<!-- <ion-content class="bg-light"> -->\n\n    <!-- <ion-slides pager>\n\n        <ion-slide *ngFor="let slide of slides">\n\n            <img [src]="slide.image" class="slide-image" />\n\n            <div class="banner-text">\n\n                <p [innerHTML]="slide.description"></p>\n\n                <small [innerHTML]="slide.smalltext"></small>\n\n                <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n            </div>\n\n        </ion-slide>\n\n    </ion-slides> -->\n\n\n\n    <!-- <p>Featured Products\n\n        <small class="bg-thime btn-round text-white" float-right>View all</small>\n\n    </p> -->\n\n    <!-- <ion-row>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box" (click)="itemdetailPage()">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div style="display: flex;" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box" (click)="itemdetailPage()">\n\n                        <img src="assets/imgs/shirt-2.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div style="display: flex;" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box" (click)="itemdetailPage()">\n\n                        <img src="assets/imgs/shirt-3.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div style="display: flex;" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-card>\n\n                <ion-card-header>\n\n                    <div class="img-box" (click)="itemdetailPage()">\n\n                        <img src="assets/imgs/shirt-4.jpg">\n\n                    </div>\n\n                    <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                </ion-card-header>\n\n                <ion-card-content (click)="itemdetailPage()">\n\n                    <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                    <div class="rateing">\n\n                        <div class="card-btn">\n\n                            <p class="" float-left>\n\n                                <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                <span class="text-light bold"> (125)</span>\n\n                            </p>\n\n                            <div style="display: flex;" float-right>\n\n                                <div class="price text-light mr-5">\n\n                                    <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                </div>\n\n                                <div class="price text-sky">\n\n                                    <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row> -->\n\n<!-- </ion-content> -->\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistPage = (function () {
    function WishlistPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    WishlistPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wishlist ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\wishlist\wishlist.html"*/'<ion-header class="bg-thime">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Wishlist (3)\n\n            <span float-right>                  \n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/suit_PNG8132.png">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Unique For Men Black Formal Slim Fit Shirt\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>Man\'s shirt </p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 Review)</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/bag.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skybags Leo 26 ltrs Red Casual Backpack\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>bags & Backpack</p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 Review)</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <div class="img-box">\n\n                        <img src="assets/imgs/wach.jpg">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-9>\n\n                    <h4>Skmei Analog-Digital Mul- ticolor Dil Men\'s Watch\n\n                        <span class="icon text-light"><img src="assets/imgs/delete.png"></span>\n\n                    </h4>\n\n                    <div class="rateing">\n\n                        <p class=text-light>Wrist watch</p>\n\n                        <div class="card-btn" padding-top>\n\n                            <div class="rateing">\n\n                                <div float-left>\n\n                                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                                    <span class="text-light small-text">(125 Review)</span>\n\n                                </div>\n\n                                <div style="display: flex;" float-right>\n\n                                    <div class="price text-light mr-5">\n\n                                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                    </div>\n\n                                    <div class="price text-sky">\n\n                                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\wishlist\wishlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'http://165.227.97.137:8282';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getUser = function (phone) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/profile?phone=' + phone).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getUsers = function (phone) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/profile-list?phone=' + phone).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.saveUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/profile', JSON.stringify(data), { headers: { 'Content-Type': 'application/json; charset=utf-8' } })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getEmojis = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/emojis-list').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shirts_shirts__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryPage = (function () {
    function CategoryPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    CategoryPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    CategoryPage.prototype.shirtsPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__shirts_shirts__["a" /* ShirtsPage */]);
        modal.present();
    };
    CategoryPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\category\category.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png" style="width: 100%"></ion-icon>\n\n    </button>\n\n        <ion-title>Fashion\n\n            <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>     \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="man-fashion">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <img src="assets/imgs/man-fashion.png">\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <h6 class="text-white">MEN\'S FASHION</h6>\n\n                <p class="text-white" (click)="shirtsPage()">Shirts\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Tshirts\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Jens\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Trousers\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n    <div class="girl-fashion">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <img src="assets/imgs/girl-fashion.png">\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <h6 class="text-white">WOMEN\'S FASHION</h6>\n\n                <p class="text-white">Western Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Sarees\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Kurtis\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Lingerie\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n    <div class="kids-fashion">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <img src="assets/imgs/kid-fashion.png">\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <h6 class="text-white">KIDS\'S FASHION</h6>\n\n                <p class="text-white">Boy\'s Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Girl\'s Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Baby Wear\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n                <p class="text-white">Baby Girl\n\n                    <ion-icon name="ios-arrow-forward-outline" text-right class="icon"></ion-icon>\n\n                </p>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\category\category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shippining_shippining__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemdetailPage = (function () {
    function ItemdetailPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ItemdetailPage.prototype.searchPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ItemdetailPage.prototype.shippiningPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__shippining_shippining__["a" /* ShippiningPage */]);
    };
    ItemdetailPage.prototype.cartPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    ItemdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-itemdetail ',template:/*ion-inline-start:"C:\camel\mobimall-ui-ionic-src\src\pages\itemdetail\itemdetail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon class="menu-icon"><img src="assets/imgs/ic_menu.png"></ion-icon>\n\n    </button>\n\n        <ion-title>Men\'s Shirts\n\n            <span float-right> \n\n              <ion-icon class="icon" (click)="searchPage()"><img src="assets/imgs/ic_search.png" width="100%;"></ion-icon>\n\n              <ion-icon class="icon" (click)="cartPage()"><img src="assets/imgs/ic_my_cart.png" width="100%;"></ion-icon>            \n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!--<select size & color>-->\n\n<ion-content class="bg-light">\n\n    <div class="img-section shadow-bottom" text-center>\n\n        <img src="assets/imgs/item-img.png">\n\n        <div class="tab-btn-box">\n\n            <div class="tab-btn">\n\n                <img src="assets/imgs/item-img.png">\n\n            </div>\n\n            <div class="tab-btn">\n\n                <img src="assets/imgs/item-img.png">\n\n            </div>\n\n            <div class="tab-btn">\n\n                <img src="assets/imgs/item-img.png">\n\n            </div>\n\n        </div>\n\n        <div class="d-flex" style="align-items: start;">\n\n            <span>Unique For Men Black Formal Slim Fit Shirt by Mark Tayler</span>\n\n            <span class="icon"> <ion-icon name="share-alt"></ion-icon><ion-icon name="md-heart"></ion-icon></span>\n\n        </div>\n\n        <div class="card-btn">\n\n            <div class="d-flex" style="padding: 1rem">\n\n                <div style="margin-right:  auto;">\n\n                    <small class="text-white bg-green" float-left>4.2 <ion-icon name="md-star"></ion-icon></small>\n\n                    <span class="text-sky small-text ">Read all 125 Review</span>\n\n                </div>\n\n                <div style="display: flex;">\n\n                    <div class="price text-light" style="margin-right: 1rem;">\n\n                        <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                    </div>\n\n                    <div class="price text-sky">\n\n                        <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="select-section shadow-bottom">\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <div class="size">\n\n                    <ion-item>\n\n                        <ion-label>Size</ion-label>\n\n                        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                            <ion-option value="enable">Small</ion-option>\n\n                            <ion-option selected value="mute">Medium</ion-option>\n\n                            <ion-option value="mute_week"> large</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <div class="color">\n\n                    <ion-item>\n\n                        <ion-label>Color</ion-label>\n\n                        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                            <ion-option selected value="enable">Black</ion-option>\n\n                            <ion-option value="mute">White</ion-option>\n\n                            <ion-option value="mute_week">Red</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n    <!--<select size & color end>-->\n\n\n\n    <!--    <Key features>-->\n\n    <div class="features bg-white shadow-bottom" padding>\n\n        <h6 class="heading">Key features</h6>\n\n        <p><span class="circle"></span>Unique For Men</p>\n\n        <p><span class="circle"></span>Febri: Cotton Blend</p>\n\n        <p><span class="circle"></span>Color: Black</p>\n\n        <p><span class="circle"></span>Fit: Slim Fit</p>\n\n        <p><span class="circle"></span>Sleeves: Full\n\n            <span text-right class="text-sky">View more\n\n              <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </span>\n\n        </p>\n\n    </div>\n\n    <!--  <Key features end>-->\n\n\n\n    <!--    <check Delivery>-->\n\n    <div class="pincod bg-white shadow-bottom" padding>\n\n        <h6 class="heading">Check Delivery</h6>\n\n        <ion-row>\n\n            <ion-col col-8>\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <ion-input type="text" placeholder="Username"></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <button ion-button full class="bg-sky btn-round btn-text">Submit</button>\n\n            </ion-col>\n\n        </ion-row>\n\n        <p>\n\n            <span>Cash on Delivery</span>\n\n            <span text-center>Free Sheeping</span>\n\n            <span text-right>Delivery in 3-6 Days</span>\n\n        </p>\n\n    </div>\n\n    <!--    <check Delivery end>-->\n\n\n\n    <!--    <reating & review>-->\n\n    <div class="reating-review bg-white" padding>\n\n        <div class="reating">\n\n            <div class="rated">\n\n                <ion-badge class="badges bg-green text-white">\n\n                    4.2\n\n                    <ion-icon name="md-star"></ion-icon>\n\n                </ion-badge>\n\n                <p class="text-light">\n\n                    <span text-center>\n\n                        Rated by<br>125 poeple\n\n                    </span>\n\n                </p>\n\n            </div>\n\n\n\n            <div class="reating-box">\n\n                <div class="rating">\n\n                    <div class="text-1">5\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                    </div>\n\n                    <div class="progres-bar rate-5"><span style="width: 90%"></span></div>\n\n                    <div class="text-2">88\n\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="rating">\n\n                    <div class="text-1">4\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                    </div>\n\n                    <div class="progres-bar rate-4"><span style="width: 70%"></span></div>\n\n                    <div class="text-2">88\n\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="rating">\n\n                    <div class="text-1">3\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                    </div>\n\n                    <div class="progres-bar rate-3"><span style="width: 50%"></span></div>\n\n                    <div class="text-2">88\n\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="rating">\n\n                    <div class="text-1">2\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                    </div>\n\n                    <div class="progres-bar rate-2"><span style="width: 35%"></span></div>\n\n                    <div class="text-2">88\n\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n                    </div>\n\n                </div>\n\n                <div class="rating">\n\n                    <div class="text-1">1\n\n                        <ion-icon name="md-star"></ion-icon>\n\n                    </div>\n\n                    <div class="progres-bar rate-1"><span style="width: 20%"></span></div>\n\n                    <div class="text-2">88\n\n                        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="btn review">Write your review now</div>\n\n\n\n        <div class="lick">\n\n            <p padding-top>\n\n                <span class="left-side">\n\n                    <ion-badge class="badges bg-green text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>  \n\n                    <span class="bold">Great product</span>\n\n                </span>\n\n                <span class="right-side">\n\n                   <span class="text-light">16 May, 2017</span>\n\n                </span>\n\n            </p>\n\n\n\n            <h5>\n\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry\n\n            </h5>\n\n            <p class="border-bottom  name-like" padding-bottom>\n\n                <span class="left-side">\n\n                   Davis Williamson.\n\n                </span>\n\n                <span class="right-side icon-box">                    \n\n                    <ion-icon name="md-thumbs-up" text-right class="icon-lick"></ion-icon><small>2</small>\n\n                    <ion-icon name="md-thumbs-down" text-right class="icon-lick"></ion-icon><small>2</small>             \n\n                </span>\n\n            </p>\n\n\n\n\n\n            <p padding-top>\n\n                <span class="left-side">\n\n                    <ion-badge class="badges bg-yellow text-white">4<ion-icon name="md-star"></ion-icon></ion-badge>  \n\n                    <span class="bold">Not satisfid with quality</span>\n\n                </span>\n\n                <span class="right-side">\n\n                   <span class="text-light">10 apr, 2017</span>\n\n                </span>\n\n            </p>\n\n            <h5>\n\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry\n\n            </h5>\n\n            <p class="border-bottom name-like" padding-bottom>\n\n                <span class="left-side">\n\n                  Rahul Oberoy.\n\n                </span>\n\n                <span class="right-side icon-box">                    \n\n                    <ion-icon name="md-thumbs-up" text-right class="icon-lick"></ion-icon><small>2</small>\n\n                    <ion-icon name="md-thumbs-down" text-right class="icon-lick"></ion-icon><small>2</small>             \n\n                </span>\n\n            </p>\n\n            <h4 class="text-sky" text-right>\n\n                Read all reviews\n\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </h4>\n\n        </div>\n\n    </div>\n\n    <!--    <reating & review end>-->\n\n\n\n    <!--    <similar Products>-->\n\n    <div class="products" padding-top>\n\n        <h6 class="heading">Similar Products\n\n            <span text-right class="text-sky">View more\n\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n            </span>\n\n        </h6>\n\n        <div class="products-scroll">\n\n            <div class="products-container" style="width:479px;">\n\n                <div class="products-item">\n\n                    <ion-card>\n\n                        <ion-card-header>\n\n                            <div class="img-box">\n\n                                <img src="assets/imgs/shirt-3.jpg">\n\n                            </div>\n\n                            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                        </ion-card-header>\n\n                        <ion-card-content>\n\n                            <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                            <div class="rateing">\n\n                                <div class="card-bottom">\n\n                                    <p class="" float-left>\n\n                                        <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                        <span class="text-light bold"> (125)</span>\n\n                                    </p>\n\n                                    <div class="d-flex" float-right>\n\n                                        <div class="price text-light mr-5">\n\n                                            <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                        </div>\n\n                                        <div class="price text-sky">\n\n                                            <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </ion-card-content>\n\n                    </ion-card>\n\n                </div>\n\n\n\n                <div class="products-item">\n\n                    <ion-card>\n\n                        <ion-card-header>\n\n                            <div class="img-box">\n\n                                <img src="assets/imgs/shirt-4.jpg">\n\n                            </div>\n\n                            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                        </ion-card-header>\n\n                        <ion-card-content>\n\n                            <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                            <div class="rateing">\n\n                                <div class="card-bottom">\n\n                                    <p class="" float-left>\n\n                                        <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                        <span class="text-light bold"> (125)</span>\n\n                                    </p>\n\n                                    <div class="d-flex" float-right>\n\n                                        <div class="price text-light mr-5">\n\n                                            <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                        </div>\n\n                                        <div class="price text-sky">\n\n                                            <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </ion-card-content>\n\n                    </ion-card>\n\n                </div>\n\n\n\n                <div class="products-item">\n\n                    <ion-card>\n\n                        <ion-card-header>\n\n                            <div class="img-box">\n\n                                <img src="assets/imgs/shirt-2.jpg">\n\n                            </div>\n\n                            <ion-icon name="md-heart" class="text-light icon"></ion-icon>\n\n                        </ion-card-header>\n\n                        <ion-card-content>\n\n                            <h5>Unique For Men Black Formal Slim Fit Shirt</h5>\n\n                            <div class="rateing">\n\n                                <div class="card-bottom">\n\n                                    <p class="">\n\n                                        <span class="text-white bg-green small-text">4.2 <ion-icon name="md-star"></ion-icon></span>\n\n                                        <span class="text-light bold"> (125)</span>\n\n                                    </p>\n\n\n\n                                    <div class="d-flex">\n\n                                        <div class="price text-light mr-5">\n\n                                            <img src="assets/imgs/rupee-light.png" class="rupee-icon">500\n\n                                        </div>\n\n                                        <div class="price text-sky">\n\n                                            <img src="assets/imgs/rupee-sky.png" class="rupee-icon">300\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </ion-card-content>\n\n                    </ion-card>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <!--    <similar Products end>-->\n\n    <div style="height: 65px;"></div>\n\n    <div class="receipt btn-fisx-bottom">\n\n        <ion-row>\n\n            <ion-col><button ion-button full class="btn-round green-shadow btn-text" style="background: #fff;color: #4dd711;">ADD TO CART</button> </ion-col>\n\n            <ion-col><button ion-button full class="bg-green btn-round green-shadow btn-text" (click)="shippiningPage()"> BUY NOW</button></ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n    <!--    <reating & review end>-->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\camel\mobimall-ui-ionic-src\src\pages\itemdetail\itemdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ItemdetailPage);
    return ItemdetailPage;
}());

//# sourceMappingURL=itemdetail.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map