webpackJsonp([1],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(67);
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
 * Generated class for the EditShoppingItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditShoppingItemPage = (function () {
    function EditShoppingItemPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.shoppingItem = {};
        // capture the shopping item id  as a nav parameter
        var shoppingItemId = this.navParams.get('shoppingItemId');
        console.log(shoppingItemId);
        // set the scope of firebaseobject equale to our selected item
        this.shoppingItemRef$ = this.database.object("shopping-list/" + shoppingItemId);
        // subscribe to the object and get the result in the this.shoppingItem
        // this.oppingItemSubscription to unsubscribe while leaving the page
        this.shoppingItemSubscription = this.shoppingItemRef$.subscribe(function (shoppingItem) { return _this.shoppingItem = shoppingItem; });
    }
    // update our firbase node with new data
    EditShoppingItemPage.prototype.editShoppingItem = function (shoppingItem) {
        this.shoppingItemRef$.update(shoppingItem);
        // send the user back to the shoppingList
        this.navCtrl.pop();
    };
    EditShoppingItemPage.prototype.ionViewWillLeave = function () {
        // unsubscribe from the observable while leaving the page
        this.shoppingItemSubscription.unsubscribe();
    };
    return EditShoppingItemPage;
}());
EditShoppingItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-shopping-item',template:/*ion-inline-start:"/home/darkshadow/Desktop/FirebaseCRUD/src/pages/edit-shopping-item/edit-shopping-item.html"*/'<!--\n  Generated template for the EditShoppingItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Edit {{shoppingItem.itemName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label floating>Item Name</ion-label>\n        <ion-input type="text" [(ngModel)]\n        ="shoppingItem.itemName"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Number</ion-label>\n        <ion-input type="number" [(ngModel)]\n        ="shoppingItem.itemNumber"></ion-input>\n      </ion-item>\n    \n      <button ion-button block \n      (click)="editShoppingItem(shoppingItem)">Update Item</button>\n</ion-content>\n'/*ion-inline-end:"/home/darkshadow/Desktop/FirebaseCRUD/src/pages/edit-shopping-item/edit-shopping-item.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], EditShoppingItemPage);

//# sourceMappingURL=edit-shopping-item.js.map

/***/ }),

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-shopping-item/edit-shopping-item.module": [
		399,
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
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_shopping_add_shopping__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_shopping_item_edit_shopping_item__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // importing AddShoppingPage
 // importing edit page

var ShoppingListPage = (function () {
    function ShoppingListPage(navCtrl, navParams, database, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.actionSheetCtrl = actionSheetCtrl;
        // pointing shoppinglistref$ to the firebase -> 'shopping list' node
        this.shoppingListRef$ = this.database.list('shopping-list');
    }
    ShoppingListPage.prototype.selectShoppingItem = function (shoppingItem) {
        var _this = this;
        // display an action sheet 1. edit 2. delete 3. cancel
        this.actionSheetCtrl.create({
            title: "" + shoppingItem.itemName,
            buttons: [
                {
                    text: 'Edit',
                    handler: function () {
                        // send the user to the edit shopping page and pass the current shopping item
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: shoppingItem.$key });
                    }
                },
                {
                    text: 'Delete',
                    role: 'distructive',
                    handler: function () {
                        // it will delete the current shopping item
                        _this.shoppingListRef$.remove(shoppingItem.$key);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("The user has selected the cancel button");
                    }
                }
            ]
        }).present();
    };
    ShoppingListPage.prototype.navigateToAddShoppingPage = function () {
        // Navigate to the user to the add shopping page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_shopping_add_shopping__["a" /* AddShoppingPage */]);
    };
    return ShoppingListPage;
}());
ShoppingListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shopping-list',template:/*ion-inline-start:"/home/darkshadow/Desktop/FirebaseCRUD/src/pages/shopping-list/shopping-list.html"*/'<!--\n  Generated template for the ShoppingListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Shopping List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only \n      (click)="navigateToAddShoppingPage()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list *ngFor="let item of shoppingListRef$ | async" (click)="selectShoppingItem(item)">\n    <h4><b style="color:darkcyan">Item Name:</b> {{item.itemName}}</h4>\n    <h5 style="color:gray"><b>Quantity:</b> {{item.itemNumber}}</h5>\n    <hr>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/darkshadow/Desktop/FirebaseCRUD/src/pages/shopping-list/shopping-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ShoppingListPage);

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddShoppingPage = (function () {
    function AddShoppingPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        // creating the new object
        this.shoppingItem = {};
        this.shoppingItemRef$ = this.database.list('shopping-list');
        // shopping list is a node inside firabase that stores the data in the form of json
    }
    AddShoppingPage.prototype.addShoppingItem = function (shoppingItem) {
        // logout the results
        //console.log(shoppingItem);
        /*
          creating a new anonymous object and convert itemnumber into number
          push this to our firebase database under the shopping-list node
        */
        this.shoppingItemRef$.push({
            itemName: this.shoppingItem.itemName,
            itemNumber: Number(this.shoppingItem.itemNumber)
        });
        // reset our shopping item
        this.shoppingItem = {};
        // navigate the user back to the shopping list page
        this.navCtrl.pop();
    };
    return AddShoppingPage;
}());
AddShoppingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-shopping',template:/*ion-inline-start:"/home/darkshadow/Desktop/FirebaseCRUD/src/pages/add-shopping/add-shopping.html"*/'<!--\n  Generated template for the AddShoppingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Add Shopping</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Item Name</ion-label>\n    <ion-input type="text" [(ngModel)]\n    ="shoppingItem.itemName"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Number</ion-label>\n    <ion-input type="number" [(ngModel)]\n    ="shoppingItem.itemNumber"></ion-input>\n  </ion-item>\n\n  <button ion-button block \n  (click)="addShoppingItem(shoppingItem)">Add Item</button>\n</ion-content>\n'/*ion-inline-end:"/home/darkshadow/Desktop/FirebaseCRUD/src/pages/add-shopping/add-shopping.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], AddShoppingPage);

//# sourceMappingURL=add-shopping.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(287);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_shopping_add_shopping__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_shopping_item_edit_shopping_item__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__firebase_credentials__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_shopping_add_shopping__["a" /* AddShoppingPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/edit-shopping-item/edit-shopping-item.module#EditShoppingItemPageModule', name: 'EditShoppingItemPage', segment: 'edit-shopping-item', priority: 'low', defaultHistory: [] }
                ]
            }),
            // intialise the angularfire with credential from the dashboard
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
            //Import the angular firebase module to use the database interaction
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_shopping_add_shopping__["a" /* AddShoppingPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shopping_list_shopping_list__ = __webpack_require__(268);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/darkshadow/Desktop/FirebaseCRUD/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/darkshadow/Desktop/FirebaseCRUD/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyDOHAwGV7AiuPZQ4YkpFk-SChrIQ593ztc",
    authDomain: "fir-crud-636dd.firebaseapp.com",
    databaseURL: "https://fir-crud-636dd.firebaseio.com",
    projectId: "fir-crud-636dd",
    storageBucket: "fir-crud-636dd.appspot.com",
    messagingSenderId: "993759092726"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ })

},[270]);
//# sourceMappingURL=main.js.map