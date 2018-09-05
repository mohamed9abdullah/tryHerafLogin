webpackJsonp([4],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTownPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddTownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTownPage = /** @class */ (function () {
    function AddTownPage(navCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.FullName = "";
        this.ImgURL = "";
        this.TownsList = [];
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref("towns/").on('value', function (response) {
            _this.TownsList = _this.DataToArray1(response);
        });
    }
    AddTownPage.prototype.onRegisterClick = function () {
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref("towns/").push({
            FullName: this.FullName,
            ImgURL: this.ImgURL
        });
        var alert = this.alertCtrl.create({
            title: "Successfully Operation",
            buttons: ["OK"],
            subTitle: this.FullName + "  is registered Successfully",
            message: ""
        });
        alert.present();
    };
    AddTownPage.prototype.DeleteItem = function (event, town) {
        debugger;
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref("towns/").child(town.key).remove();
    };
    AddTownPage.prototype.EditItem = function (event, town) {
        debugger;
        //firebase.database().ref("towns/").child(town.key).remove();
    };
    AddTownPage.prototype.DataToArray1 = function (AllData) {
        var returnArr = [];
        AllData.forEach(function (childData) {
            var item = childData.val();
            item.key = childData.key;
            returnArr.push(item);
        });
        return returnArr;
    };
    AddTownPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddTownPage');
    };
    AddTownPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-town',template:/*ion-inline-start:"D:\ionicProjects\tryfirebase\src\pages\add-town\add-town.html"*/'<!--\n  Generated template for the AddTownPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Town</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n        <ion-label>Name</ion-label>\n        <ion-input type="text"  [(ngModel)]="FullName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label><ion-icon ios="ios-camera" md="md-camera"></ion-icon> Image URL</ion-label>\n      \n      <ion-input type="text" [(ngModel)]="ImgURL" ></ion-input>\n    </ion-item>\n\n      <button ion-button full color="secondary" (click)="onRegisterClick()">Add</button>\n      \n  </ion-list>\n\n  \n  <ion-list>\n    <ion-item-sliding *ngFor="let town of TownsList">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{town?.ImgURL}}">\n        </ion-avatar>\n        <h2>{{town?.FullName}}</h2>\n      </ion-item>\n      <ion-item-options side="right">\n      \n\n        <button ion-button color="primary" (click)="EditItem($event,town)" >\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n        </button>\n\n        <button ion-button color="danger" (click)="DeleteItem($event,town)">\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n        </button>\n        \n      </ion-item-options>\n    \n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n\n<!--\n\n  \n\n  <ion-list>\n    <ion-item *ngFor="let town of TownsList">\n      <ion-thumbnail item-start>\n        <img src="{{town?.ImgURL}}">\n      </ion-thumbnail>\n      <h2>{{town.FullName}}</h2>\n      <p></p>\n      <button ion-button clear item-end >Delete</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let town of TownsList">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{town?.ImgURL}}">\n        </ion-avatar>\n        <h2>{{town.FullName}}</h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button >\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon ios="ios-remove-circle" md="md-remove-circle"></ion-icon>\n\n        </button>\n      </ion-item-options>\n     \n    </ion-item-sliding>\n  </ion-list>\n-->\n\n\n'/*ion-inline-end:"D:\ionicProjects\tryfirebase\src\pages\add-town\add-town.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddTownPage);
    return AddTownPage;
}());

//# sourceMappingURL=add-town.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHerfaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddHerfaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddHerfaPage = /** @class */ (function () {
    function AddHerfaPage(navCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.FullName = "";
        this.ImgURL = "";
        this.HandCraftsList = [];
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref("handcrafts/").on('value', function (response) {
            _this.HandCraftsList = _this.DataToArray2(response);
        });
    }
    AddHerfaPage.prototype.onRegisterClick = function () {
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref("handcrafts/").push({
            FullName: this.FullName,
            ImgURL: this.ImgURL
        });
        var alert = this.alertCtrl.create({
            title: "Successfully Operation",
            buttons: ["OK"],
            subTitle: this.FullName + "  is registered Successfully",
            message: ""
        });
        alert.present();
    };
    AddHerfaPage.prototype.DeleteItem = function (event, herfa) {
        //debugger;
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref("handcrafts/").child(herfa.key).remove();
    };
    AddHerfaPage.prototype.EditItem = function (event, herfa) {
        // debugger;
        //firebase.database().ref("handcrafts/").child(town.key).remove();
    };
    AddHerfaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddHerfaPage');
    };
    AddHerfaPage.prototype.DataToArray2 = function (AllData) {
        var returnArr = [];
        AllData.forEach(function (childData) {
            var item = childData.val();
            item.key = childData.key;
            returnArr.push(item);
        });
        return returnArr;
    };
    AddHerfaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-herfa',template:/*ion-inline-start:"D:\ionicProjects\tryfirebase\src\pages\add-herfa\add-herfa.html"*/'<!--\n  Generated template for the AddHerfaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Herfa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n  <ion-content padding>\n    <ion-list>\n  \n      <ion-item>\n          <ion-label>Name</ion-label>\n          <ion-input type="text"  [(ngModel)]="FullName"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label><ion-icon ios="ios-camera" md="md-camera"></ion-icon> Image URL</ion-label>\n        \n        <ion-input type="text" [(ngModel)]="ImgURL" ></ion-input>\n      </ion-item>\n\n        <button ion-button full color="secondary" (click)="onRegisterClick()">Add</button>\n        \n    </ion-list>\n\n\n    \n  <ion-list>\n    <ion-item-sliding *ngFor="let herfa of HandCraftsList">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{herfa?.ImgURL}}">\n        </ion-avatar>\n        <h2>{{herfa?.FullName}}</h2>\n      </ion-item>\n      <ion-item-options side="right">\n      \n        <button ion-button color="primary" (click)="EditItem($event,herfa)" >\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n        </button>\n\n        \n        <button ion-button color="danger" (click)="DeleteItem($event,herfa)">\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n        </button>\n      </ion-item-options>\n    \n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionicProjects\tryfirebase\src\pages\add-herfa\add-herfa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddHerfaPage);
    return AddHerfaPage;
}());

//# sourceMappingURL=add-herfa.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWorkerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddWorkerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddWorkerPage = /** @class */ (function () {
    function AddWorkerPage(navCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.FullName = "";
        this.Password = "";
        this.ImgURL = "";
        this.Phone = "";
        this.HerfaName = "";
        this.TownName = "";
        this.DateOfBirth = "";
        this.TownsList = [];
        this.HandCraftsList = [];
        this.WorkersList = [];
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref("towns/").on('value', function (response) {
            _this.TownsList = _this.DataToArray3(response);
        });
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref("handcrafts/").on('value', function (response) {
            _this.HandCraftsList = _this.DataToArray3(response);
        });
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref("users/").on('value', function (response) {
            _this.WorkersList = _this.DataToArray3(response);
        });
    }
    AddWorkerPage.prototype.onRegisterClick = function () {
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref("users").push({
            FullName: this.FullName,
            Password: this.Password,
            ImgURL: this.ImgURL,
            Phone: this.Phone,
            DateOfBirth: this.DateOfBirth,
            HerfaName: this.HerfaName,
            TownName: this.TownName
        });
        var alert = this.alertCtrl.create({
            title: "Successfully Operation",
            buttons: ["OK"],
            subTitle: this.FullName + " is registered Successfull",
            message: ""
        });
        alert.present();
    };
    AddWorkerPage.prototype.DeleteItem = function (event, worker) {
        //debugger;
        __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref("users/").child(worker.key).remove();
    };
    AddWorkerPage.prototype.EditItem = function (event, worker) {
        // debugger;
        //firebase.database().ref("handcrafts/").child(town.key).remove();
    };
    AddWorkerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddWorkerPage');
    };
    AddWorkerPage.prototype.DataToArray3 = function (AllData) {
        var returnArr = [];
        AllData.forEach(function (childData) {
            var item = childData.val();
            item.key = childData.key;
            returnArr.push(item);
        });
        return returnArr;
    };
    AddWorkerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-worker',template:/*ion-inline-start:"D:\ionicProjects\tryfirebase\src\pages\add-worker\add-worker.html"*/'<!--\n  Generated template for the AddWorkerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Professional Worker</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n        <ion-label><ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n        <ion-input type="text"  [(ngModel)]="FullName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label><ion-icon ios="ios-call" md="md-call"></ion-icon></ion-label>\n      <ion-input type="number"  [(ngModel)]="Phone"></ion-input>\n     </ion-item>\n\n    <ion-item>\n      <ion-label floating> <ion-icon ios="ios-happy" md="md-happy"></ion-icon> Birth Of Date</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="DateOfBirth"></ion-datetime>\n    </ion-item>\n\n   \n    <ion-item>\n      <ion-label>Town</ion-label>\n      \n      <ion-select [(ngModel)]="TownName">\n        <ion-option *ngFor="let town of TownsList" [value]="town.FullName" >{{town.FullName}}</ion-option>\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Herfa</ion-label>\n      \n      <ion-select [(ngModel)]="HerfaName">\n        <ion-option *ngFor="let handcraft of HandCraftsList" [value]="handcraft.FullName" >{{handcraft.FullName}}</ion-option>\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-label><ion-icon ios="ios-camera" md="md-camera"></ion-icon> Image URL</ion-label>\n      \n      <ion-input type="text" [(ngModel)]="ImgURL" ></ion-input>\n    </ion-item>\n\n   \n\n      <button ion-button full color="secondary" (click)="onRegisterClick()">Add </button>\n      \n  </ion-list>\n   \n\n  <ion-list>\n    <ion-item-sliding *ngFor="let worker of WorkersList">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{worker?.ImgURL}}">\n        </ion-avatar>\n        <h2>{{worker?.FullName}}</h2>\n      </ion-item>\n      <ion-item-options side="right">\n      \n\n        <button ion-button color="primary" (click)="EditItem($event,worker)" >\n          <ion-icon ios="ios-create" md="md-create"></ion-icon>\n        </button>\n        \n        <button ion-button color="danger" (click)="DeleteItem($event,worker)">\n          <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n        </button>\n        \n      </ion-item-options>\n    \n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionicProjects\tryfirebase\src\pages\add-worker\add-worker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddWorkerPage);
    return AddWorkerPage;
}());

//# sourceMappingURL=add-worker.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.FullName = "";
        this.Password = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.onLoginClick = function () {
        if (this.FullName == "Ahmed" && this.Password == "123")
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        else {
            var alert_1 = this.alertCtrl.create({
                title: "Login Failed",
                buttons: ["OK"],
                subTitle: "This user doesn'y exist please try again",
                message: "Name:Mostafa,,,Password:123"
            });
            alert_1.present();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\ionicProjects\tryfirebase\src\pages\login\login.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    \n  <ion-list>\n\n    <ion-item>\n        <ion-label><ion-icon ios="ios-contact" md="md-contact"></ion-icon></ion-label>\n        <ion-input type="text"  [(ngModel)]="FullName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label><ion-icon ios="ios-lock" md="md-lock"></ion-icon></ion-label>\n      \n      <ion-input type="password" [(ngModel)]="Password"></ion-input>\n    </ion-item>\n\n  \n\n   \n     \n      <button ion-button full color="secondary" (click)="onLoginClick()">Login</button>\n      \n    </ion-list>\n\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"D:\ionicProjects\tryfirebase\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-herfa/add-herfa.module": [
		440,
		3
	],
	"../pages/add-town/add-town.module": [
		439,
		2
	],
	"../pages/add-worker/add-worker.module": [
		441,
		1
	],
	"../pages/login/login.module": [
		442,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_herfa_add_herfa__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_town_add_town__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_worker_add_worker__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__add_herfa_add_herfa__["a" /* AddHerfaPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__add_town_add_town__["a" /* AddTownPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__add_worker_add_worker__["a" /* AddWorkerPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionicProjects\tryfirebase\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Add Hand Crafts" tabIcon="build"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Add Towns" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Add Professionals" tabIcon="contacts"></ion-tab>\n\n\n\n</ion-tabs>\n'/*ion-inline-end:"D:\ionicProjects\tryfirebase\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_herfa_add_herfa__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_town_add_town__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_worker_add_worker__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_herfa_add_herfa__["a" /* AddHerfaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_town_add_town__["a" /* AddTownPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_worker_add_worker__["a" /* AddWorkerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-town/add-town.module#AddTownPageModule', name: 'AddTownPage', segment: 'add-town', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-herfa/add-herfa.module#AddHerfaPageModule', name: 'AddHerfaPage', segment: 'add-herfa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-worker/add-worker.module#AddWorkerPageModule', name: 'AddWorkerPage', segment: 'add-worker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_herfa_add_herfa__["a" /* AddHerfaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_town_add_town__["a" /* AddTownPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_worker_add_worker__["a" /* AddWorkerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        var config = {
            apiKey: "AIzaSyC7vBerVmOkgU07rPTyBLfe3k9WKg9eQEg",
            authDomain: "herafy-87392.firebaseapp.com",
            databaseURL: "https://herafy-87392.firebaseio.com",
            projectId: "herafy-87392",
            storageBucket: "herafy-87392.appspot.com",
            messagingSenderId: "729922009979"
        };
        __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](config);
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionicProjects\tryfirebase\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionicProjects\tryfirebase\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[282]);
//# sourceMappingURL=main.js.map