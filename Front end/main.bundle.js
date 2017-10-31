webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_nav_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/nav-dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_sidebar_directive__ = __webpack_require__("../../../../../src/app/shared/sidebar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_aside_directive__ = __webpack_require__("../../../../../src/app/shared/aside.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_breadcrumb_component__ = __webpack_require__("../../../../../src/app/shared/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_full_layout_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_components_app_header_app_header_component__ = __webpack_require__("../../../../../src/app/components/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_components_app_sidebar_app_sidebar_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar/app-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_views_botcreate_step1_createbot_component__ = __webpack_require__("../../../../../src/app/views/botcreate/step1/createbot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_views_botcreate_step2_createbot2_component__ = __webpack_require__("../../../../../src/app/views/botcreate/step2/createbot2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_views_botcreate_step3_createbot3_component__ = __webpack_require__("../../../../../src/app/views/botcreate/step3/createbot3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_views_botcreate_step4_createbot4_component__ = __webpack_require__("../../../../../src/app/views/botcreate/step4/createbot4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_views_botcreate_step5_createbot5_component__ = __webpack_require__("../../../../../src/app/views/botcreate/step5/createbot5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_views_botdelete_botdelete__ = __webpack_require__("../../../../../src/app/views/botdelete/botdelete.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_views_botmodify_botmodify__ = __webpack_require__("../../../../../src/app/views/botmodify/botmodify.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_services_botcreate_service__ = __webpack_require__("../../../../../src/app/services/botcreate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_services_botdata_service__ = __webpack_require__("../../../../../src/app/services/botdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_views_botmonitor_monitorbot_component__ = __webpack_require__("../../../../../src/app/views/botmonitor/monitorbot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Routing Module

// Layouts















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_24__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layouts_full_layout_component__["a" /* FullLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_nav_dropdown_directive__["a" /* NAV_DROPDOWN_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_11__shared_breadcrumb_component__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_sidebar_directive__["a" /* SIDEBAR_TOGGLE_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_10__shared_aside_directive__["a" /* AsideToggleDirective */],
                __WEBPACK_IMPORTED_MODULE_14_app_components_app_header_app_header_component__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15_app_components_app_sidebar_app_sidebar_component__["a" /* AppSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_16_app_views_botcreate_step1_createbot_component__["a" /* AppCreateBotComponent */],
                __WEBPACK_IMPORTED_MODULE_17_app_views_botcreate_step2_createbot2_component__["a" /* AppCreateBotComponent2 */],
                __WEBPACK_IMPORTED_MODULE_18_app_views_botcreate_step3_createbot3_component__["a" /* AppCreateBotComponent3 */],
                __WEBPACK_IMPORTED_MODULE_19_app_views_botcreate_step4_createbot4_component__["a" /* AppCreateBotComponent4 */],
                __WEBPACK_IMPORTED_MODULE_20_app_views_botcreate_step5_createbot5_component__["a" /* AppCreateBotComponent5 */],
                __WEBPACK_IMPORTED_MODULE_26_app_views_botmonitor_monitorbot_component__["a" /* AppMonitorBotComponent */],
                __WEBPACK_IMPORTED_MODULE_21_app_views_botdelete_botdelete__["a" /* BotDeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_22_app_views_botmodify_botmodify__["a" /* BotModifyComponent */],
                __WEBPACK_IMPORTED_MODULE_27_ng2_file_upload__["FileSelectDirective"]
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["HashLocationStrategy"],
                }, __WEBPACK_IMPORTED_MODULE_23_app_services_botcreate_service__["a" /* BotCreateService */], __WEBPACK_IMPORTED_MODULE_25_app_services_botdata_service__["a" /* BotDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_views_botcreate_step1_createbot_component__ = __webpack_require__("../../../../../src/app/views/botcreate/step1/createbot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_views_botcreate_step2_createbot2_component__ = __webpack_require__("../../../../../src/app/views/botcreate/step2/createbot2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_views_botcreate_step3_createbot3_component__ = __webpack_require__("../../../../../src/app/views/botcreate/step3/createbot3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_views_botcreate_step4_createbot4_component__ = __webpack_require__("../../../../../src/app/views/botcreate/step4/createbot4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_views_botcreate_step5_createbot5_component__ = __webpack_require__("../../../../../src/app/views/botcreate/step5/createbot5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_views_botmonitor_monitorbot_component__ = __webpack_require__("../../../../../src/app/views/botmonitor/monitorbot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_views_botdelete_botdelete__ = __webpack_require__("../../../../../src/app/views/botdelete/botdelete.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_views_botmodify_botmodify__ = __webpack_require__("../../../../../src/app/views/botmodify/botmodify.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Layouts









var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__["a" /* FullLayoutComponent */],
        data: {
            title: ''
        },
        children: [{ path: 'botcreate', component: __WEBPACK_IMPORTED_MODULE_3_app_views_botcreate_step1_createbot_component__["a" /* AppCreateBotComponent */] }, { path: 'botcreate2', component: __WEBPACK_IMPORTED_MODULE_4_app_views_botcreate_step2_createbot2_component__["a" /* AppCreateBotComponent2 */] },
            { path: 'botcreate3', component: __WEBPACK_IMPORTED_MODULE_5_app_views_botcreate_step3_createbot3_component__["a" /* AppCreateBotComponent3 */] }, { path: 'botcreate4', component: __WEBPACK_IMPORTED_MODULE_6_app_views_botcreate_step4_createbot4_component__["a" /* AppCreateBotComponent4 */] }, { path: 'botcreate5', component: __WEBPACK_IMPORTED_MODULE_7_app_views_botcreate_step5_createbot5_component__["a" /* AppCreateBotComponent5 */] }, { path: 'botmonitor', component: __WEBPACK_IMPORTED_MODULE_8_app_views_botmonitor_monitorbot_component__["a" /* AppMonitorBotComponent */] },
            { path: 'deletebot', component: __WEBPACK_IMPORTED_MODULE_9_app_views_botdelete_botdelete__["a" /* BotDeleteComponent */] }, { path: 'modifybot', component: __WEBPACK_IMPORTED_MODULE_10_app_views_botmodify_botmodify__["a" /* BotModifyComponent */] }]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\r\n  <a class=\"navbar-brand\" href=\"#\"></a>\r\n  <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appSidebarToggler>&#9776;</button>\r\n  <ul class=\"nav navbar-nav d-md-down-none\">\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span></a>\r\n    </li>\r\n    <li class=\"nav-item dropdown\" dropdown (onToggle)=\"toggled($event)\">\r\n      <a href class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\">\r\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n        <span class=\"d-md-down-none\">admin</span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n         <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n   </ul>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent.prototype.ngOnInit = function () { };
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/app-header/app-header.component.html")
        })
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());

//# sourceMappingURL=app-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/app-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myClass{\r\n    color:red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/app-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <nav class=\"sidebar-nav\">\n    <ul class=\"nav\">\n      <li class=\"divider\"></li>\n      <li class=\"nav-title\">\n       Manage Bots\n      </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link myclass\" routerLinkActive=\"active\" [routerLink]=\"['/botcreate']\"><i class=\"fa fa-plus fa-fw\" style=\"color:DarkOrange\"></i>Add</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/modifybot']\"><i class=\"fa fa-pencil fa-fw\" style=\"color:DarkOrange\"></i>Modify</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/deletebot']\"><i class=\"fa fa-trash-o fa-fw\" style=\"color:DarkOrange\"></i>Delete</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/botmonitor']\"><i class=\"fa fa-tachometer fa-fw\" style=\"color:DarkOrange\"></i>Monitor</a>\n          </li>\n\n\n      <li class=\"divider\"></li>\n      <li class=\"nav-title\">\n      Manage Users\n      </li>\n     <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/buttons']\"><i class=\"fa fa-plus fa-fw\" style=\"color:chartreuse\"></i>Add</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/social-buttons']\"><i class=\"fa fa-pencil fa-fw\" style=\"color:chartreuse\"></i>Modify</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/cards']\"><i class=\"fa fa-trash-o fa-fw\" style=\"color:chartreuse\"></i>Delete</a>\n          </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/app-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidebarComponent = (function () {
    function AppSidebarComponent() {
    }
    AppSidebarComponent.prototype.ngOnInit = function () { };
    AppSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar/app-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app-sidebar/app-sidebar.component.css")]
        })
    ], AppSidebarComponent);
    return AppSidebarComponent;
}());

//# sourceMappingURL=app-sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"app-body\">\n  <app-sidebar></app-sidebar>\n\n  <!-- Main content -->\n  <main class=\"main\">\n\n    <!-- Breadcrumb -->\n    <ol class=\"breadcrumb\">\n      <app-breadcrumbs></app-breadcrumbs>\n    </ol>\n\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div><!-- /.conainer-fluid -->\n  </main>\n</div>\n\n<footer class=\"app-footer\">\n  <a href=\"http://serendio.com\">Serendio</a> &copy; 2017 creativeLabs.\n  <span class=\"float-right\">Powered by <a href=\"http://serendio.com\">Serendio</a></span>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    FullLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/layouts/full-layout.component.html")
        })
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());

//# sourceMappingURL=full-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/bot.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotModel; });
var BotModel = (function () {
    function BotModel() {
    }
    return BotModel;
}());

//# sourceMappingURL=bot.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/botcreate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotCreateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_botdata_service__ = __webpack_require__("../../../../../src/app/services/botdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BotCreateService = (function () {
    function BotCreateService(botDataService, http) {
        this.botDataService = botDataService;
        this.http = http;
        this.bot = null;
        this.serverURL = 'http://localhost:3000';
    }
    BotCreateService.prototype.setModel = function (newModel) {
        if (this.bot === null) {
            this.bot = newModel;
        }
        else {
            var asyncBot = this.bot;
            Object.keys(newModel).forEach(function (key) {
                asyncBot[key] = newModel[key];
            });
        }
    };
    BotCreateService.prototype.getModel = function () {
        return this.bot;
    };
    BotCreateService.prototype.clearModel = function () {
        this.bot = null;
    };
    BotCreateService.prototype.save = function () {
        this.botDataService.addBot(this.bot);
    };
    BotCreateService.prototype.getServer = function () {
        return this.serverURL;
    };
    BotCreateService.prototype.saveToDB = function (url, param) {
        // console.log(JSON.stringify(param));
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(url, JSON.stringify(param), { headers: header });
    };
    BotCreateService.prototype.getFromDB = function (url) {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpParams */]();
        params = params.append('var1', 'val1');
        params = params.append('var2', 'val2');
        return this.http.get(url, { params: params });
    };
    BotCreateService.prototype.updateBotStatus = function (url, param) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(url, JSON.stringify(param), { headers: header });
    };
    BotCreateService.prototype.getQnAKey = function (url, args) {
        /*let params = new HttpParams();
        params = params.append('SubKey', args.SubKey);
        params = params.append('Path', args.Path);*/
        return this.http.get(url, { params: args });
    };
    BotCreateService.prototype.deleteBot = function (url, param) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(url, JSON.stringify(param), { headers: header });
    };
    BotCreateService.prototype.getMicrosoftAccount = function (url) {
        return this.http.get(url);
    };
    BotCreateService.prototype.updateMicrosoftStatus = function (url, param) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(url, JSON.stringify(param), { headers: header });
    };
    BotCreateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_botdata_service__["a" /* BotDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_botdata_service__["a" /* BotDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], BotCreateService);
    return BotCreateService;
    var _a, _b;
}());

//# sourceMappingURL=botcreate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/botdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotDataService; });
var BotDataService = (function () {
    function BotDataService() {
        this.bots = [];
    }
    BotDataService.prototype.addBot = function (bot) {
        /*console.log(JSON.parse(JSON.stringify(bot)));*/
        this.bots.push(JSON.parse(JSON.stringify(bot)));
    };
    BotDataService.prototype.getBots = function () {
        return this.bots.slice();
    };
    return BotDataService;
}());

//# sourceMappingURL=botdata.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/aside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAsideMenuToggler]',
        }),
        __metadata("design:paramtypes", [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());

//# sourceMappingURL=aside.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    }
    BreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumbs',
            template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.title&&last\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
    var _a, _b;
}());

//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/nav-dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NavDropdownDirective */
/* unused harmony export NavDropdownToggleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAV_DROPDOWN_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], NavDropdownDirective);
    return NavDropdownDirective;
    var _a;
}());

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdownToggle]'
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
//# sourceMappingURL=nav-dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sidebar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SidebarToggleDirective */
/* unused harmony export SidebarMinimizeDirective */
/* unused harmony export MobileSidebarToggleDirective */
/* unused harmony export SidebarOffCanvasCloseDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var SidebarMinimizeDirective = (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());

var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appMobileSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarClose]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];
//# sourceMappingURL=sidebar.directive.js.map

/***/ }),

/***/ "../../../../../src/app/views/botcreate/step1/createbot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Please select a bot type</strong>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row\">\n             <div class=\"col-md-3\">\n                <a  class=\"btn btn-primary\" routerLinkActive=\"active\" [routerLink]=\"['/botcreate2']\" style=\"height:150px; width:200px;font-size:20px;padding-top:50px;\">Shopping Bot</a>\n             </div>\n             <div class=\"col-md-3\">\n                <a  class=\"btn btn-success\" routerLinkActive=\"active\" [routerLink]=\"['/botcreate2']\" style=\"height:150px; width:200px;font-size:20px;padding-top:50px\">Service Bot</a>\n             </div>\n          </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/botcreate/step1/createbot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCreateBotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppCreateBotComponent = (function () {
    function AppCreateBotComponent() {
    }
    AppCreateBotComponent.prototype.ngOnInit = function () { };
    AppCreateBotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/botcreate/step1/createbot.component.html")
        })
    ], AppCreateBotComponent);
    return AppCreateBotComponent;
}());

//# sourceMappingURL=createbot.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/botcreate/step2/createbot2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchable-container{margin:20px 0 0 0}\r\n.searchable-container label.btn-default.active{background-color:#007ba7;color:#FFF}\r\n.searchable-container label.btn-default{width:90%;border:1px solid #efefef;margin:5px; box-shadow:5px 8px 8px 0 #ccc;}\r\n.searchable-container label .bizcontent{width:100%;}\r\n.searchable-container .btn-group{width:90%}\r\n.searchable-container .btn span.glyphicon{\r\n    opacity: 0;\r\n}\r\n.searchable-container .btn.active span.glyphicon {\r\n    opacity: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/botcreate/step2/createbot2.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"card\">\n         <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n            <div class=\"card-header\">\n              <strong>Enter bot details</strong>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:100px;\">Name</p></span>\n                  <input type=\"text\" name=\"name\" class=\"form-control\" required=\"true\" [(ngModel)]=\"name\" placeholder=\"Enter name of the bot\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:100px;\">Description</p></span>\n                  <input type=\"text\" id=\"username3\" name=\"description\" class=\"form-control\" required=\"true\" [(ngModel)]=\"description\" placeholder=\"Enter short description about the bot.\">\n                </div>\n              </div>\n              <!--<div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:100px;\">Microsoft Id</p></span>\n                    <input type=\"text\" id=\"username3\" name=\"microsoftId\" class=\"form-control\" required=\"true\" [(ngModel)]=\"microsoftId\" readonly>\n                    <span class=\"input-group-addon\"><i class=\"fa fa-id-card-o\"></i></span>\n                  </div>\n              </div>\n              <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:100px;\">Microsoft Key</p></span>\n                    <input type=\"email\" id=\"email3\" name=\"microsoftKey\" class=\"form-control\" required=\"true\" [(ngModel)]=\"microsoftKey\" readonly>\n                    <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n                  </div>\n              </div>-->\n              </div>\n            <div class=\"card-footer\">\n              <a  class=\"btn btn-primary\" routerLinkActive=\"active\" [routerLink]=\"['/botcreate']\" style=\"padding-right: 25px;\"><i class=\"fa fa-arrow-left\" style=\"padding-right: 5px\"></i> Back</a>\n              <button  class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-arrow-right\" style=\"padding-right: 5px\"></i> Next</button>\n              <a  class=\"btn btn-danger\" routerLinkActive=\"active\" [routerLink]=\"['/']\" style=\"padding-right: 25px\"><i class=\"fa fa-times\" style=\"padding-right: 5px\"></i>Cancel</a>\n            </div>\n         </form>\n\n      </div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/views/botcreate/step2/createbot2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCreateBotComponent2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_botcreate_service__ = __webpack_require__("../../../../../src/app/services/botcreate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_model_bot_model__ = __webpack_require__("../../../../../src/app/model/bot.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppCreateBotComponent2 = (function () {
    function AppCreateBotComponent2(botCreatorService, router) {
        this.botCreatorService = botCreatorService;
        this.router = router;
        this.botModel = new __WEBPACK_IMPORTED_MODULE_2_app_model_bot_model__["a" /* BotModel */]();
        this.serverURL = this.botCreatorService.getServer();
    }
    AppCreateBotComponent2.prototype.ngOnInit = function () {
        var _this = this;
        if (this.botCreatorService.getModel() != null) {
            this.botModel = this.botCreatorService.getModel();
            this.name = this.botModel.name;
            this.description = this.botModel.description;
            this.microsoftId = this.botModel.microsoftId;
            this.microsoftKey = this.botModel.microsoftKey;
            this.micro_id = this.botModel.micro_id;
            this.port_no = this.botModel.port_no;
        }
        if (!this.microsoftId) {
            this.botCreatorService.getMicrosoftAccount(this.serverURL + '/getmicrosoftaccount')
                .subscribe(function (response) {
                _this.microsotAccount = response.json();
                if (_this.microsotAccount.length > 0) {
                    _this.microsoftKey = _this.microsotAccount[0].microsoft_key;
                    _this.microsoftId = _this.microsotAccount[0].microsoft_secret;
                    _this.micro_id = _this.microsotAccount[0].ID;
                    _this.port_no = _this.microsotAccount[0].port;
                }
                else {
                    console.log('Please add few more accounts to database!!');
                }
            }, function (error) { return console.log('error occurred while fetching microsoft account!'); });
        }
    };
    AppCreateBotComponent2.prototype.onSubmit = function () {
        if (this.createBotForm2.valid) {
            this.botModel.name = this.createBotForm2.value['name'];
            this.botModel.description = this.createBotForm2.value['description'];
            this.botModel.microsoftId = this.createBotForm2.value['microsoftId'];
            this.botModel.microsoftKey = this.createBotForm2.value['microsoftKey'];
            this.botModel.micro_id = this.micro_id;
            this.botModel.port_no = this.port_no;
            this.botCreatorService.setModel(this.botModel);
            this.router.navigate(['/botcreate3']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
    ], AppCreateBotComponent2.prototype, "createBotForm2", void 0);
    AppCreateBotComponent2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/botcreate/step2/createbot2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/botcreate/step2/createbot2.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_botcreate_service__["a" /* BotCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_botcreate_service__["a" /* BotCreateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], AppCreateBotComponent2);
    return AppCreateBotComponent2;
    var _a, _b, _c;
}());

//# sourceMappingURL=createbot2.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/botcreate/step3/createbot3.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"card\">\n         <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n        <div class=\"card-header\">\n          <strong>Enter Ecommerce Application Credentials</strong>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Ecommerce</p></span>\n                <select class=\"form-control\" required=\"true\"  name=\"ecommerce\" [(ngModel)]=\"ecommerce\">\n                  <option *ngFor=\"let ecommerce of ecommerceTypes\" value=\"{{ecommerce}}\">\n                    {{ecommerce}}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Ecommerce Server</p></span>\n                <input type=\"text\" name=\"ecommerceServer\" class=\"form-control\" required=\"true\" [(ngModel)]=\"ecommerceServer\" placeholder=\"(e.x) http://wordpress.serendio.com\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-external-link\"></i></span>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Ecommerce Key</p></span>\n                <input type=\"email\" id=\"email3\" name=\"ecommerceKey\" class=\"form-control\" required=\"true\" [(ngModel)]=\"ecommerceKey\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Ecommerce Secret</p></span>\n                <input type=\"email\" id=\"email3\" name=\"ecommerceSecret\" class=\"form-control\" required=\"true\" [(ngModel)]=\"ecommerceSecret\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-asterisk\"></i></span>\n              </div>\n            </div>\n          </div>\n        <div class=\"card-footer\">\n          <a  class=\"btn btn-primary\" routerLinkActive=\"active\" [routerLink]=\"['/botcreate2']\" style=\"padding-right: 25px;\"><i class=\"fa fa-arrow-left\" style=\"padding-right: 5px\"></i> Back</a>\n          <button  class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-arrow-right\" style=\"padding-right: 5px\"></i> Next</button>\n          <a  class=\"btn btn-danger\" routerLinkActive=\"active\" [routerLink]=\"['/']\" style=\"padding-right: 25px\"><i class=\"fa fa-times\" style=\"padding-right: 5px\"></i>Cancel</a>\n        </div>\n          </form>\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/views/botcreate/step3/createbot3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCreateBotComponent3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_model_bot_model__ = __webpack_require__("../../../../../src/app/model/bot.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_botcreate_service__ = __webpack_require__("../../../../../src/app/services/botcreate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppCreateBotComponent3 = (function () {
    function AppCreateBotComponent3(botCreatorService, router) {
        this.botCreatorService = botCreatorService;
        this.router = router;
        this.ecommerceTypes = ['Woocommerce', 'Shopify'];
        this.bot = new __WEBPACK_IMPORTED_MODULE_2_app_model_bot_model__["a" /* BotModel */]();
    }
    AppCreateBotComponent3.prototype.ngOnInit = function () {
        if (this.botCreatorService.getModel() != null) {
            this.bot = this.botCreatorService.getModel();
            this.ecommerce = this.bot.ecommerce;
            this.ecommerceServer = this.bot.ecommerceServer;
            this.ecommerceKey = this.bot.ecommerceKey;
            this.ecommerceSecret = this.bot.ecommerceSecret;
        }
    };
    AppCreateBotComponent3.prototype.onSubmit = function () {
        if (this.comp3Form.valid) {
            this.bot.ecommerce = this.comp3Form.value['ecommerce'];
            this.bot.ecommerceServer = this.comp3Form.value['ecommerceServer'];
            this.bot.ecommerceKey = this.comp3Form.value['ecommerceKey'];
            this.bot.ecommerceSecret = this.comp3Form.value['ecommerceSecret'];
            this.botCreatorService.setModel(this.bot);
            this.router.navigate(['/botcreate4']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
    ], AppCreateBotComponent3.prototype, "comp3Form", void 0);
    AppCreateBotComponent3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/botcreate/step3/createbot3.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_botcreate_service__["a" /* BotCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_botcreate_service__["a" /* BotCreateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], AppCreateBotComponent3);
    return AppCreateBotComponent3;
    var _a, _b, _c;
}());

//# sourceMappingURL=createbot3.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/botcreate/step4/createbot4.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"card\">\n         <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n            <div class=\"card-header\">\n              <strong>FAQ - Questions & Answers</strong>\n            </div>\n           <div class=\"card-body\">\n             <div class=\"form-group\">\n               <div class=\"input-group\">\n                 <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\".csv\" />\n                 <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                   Upload\n                 </button>\n               </div>\n             </div>\n\n             <div class=\"card-footer\">\n               <a  class=\"btn btn-primary\" routerLinkActive=\"active\" [routerLink]=\"['/botcreate3']\" style=\"padding-right: 25px;\"><i class=\"fa fa-arrow-left\" style=\"padding-right: 5px\"></i> Back</a>\n               <button  class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-arrow-right\" style=\"padding-right: 5px\"></i> Next</button>\n               <a  class=\"btn btn-danger\" routerLinkActive=\"active\" [routerLink]=\"['/']\" style=\"padding-right: 25px\"><i class=\"fa fa-times\" style=\"padding-right: 5px\"></i>Cancel</a>\n             </div>\n           </div>\n          </form>\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/views/botcreate/step4/createbot4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCreateBotComponent4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_model_bot_model__ = __webpack_require__("../../../../../src/app/model/bot.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_botcreate_service__ = __webpack_require__("../../../../../src/app/services/botcreate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppCreateBotComponent4 = (function () {
    function AppCreateBotComponent4(http, router, botCreatorService) {
        this.http = http;
        this.router = router;
        this.botCreatorService = botCreatorService;
        this.isFileUploaded = false;
        this.subKey = 'a30c64537df54f419281096988c916ba';
        this.Parameters = { subKey: '',
            Path: '',
            name: ''
        };
        this.serverURL = '';
        this.clickCount = 0;
        this.bot = new __WEBPACK_IMPORTED_MODULE_2_app_model_bot_model__["a" /* BotModel */]();
        this.serverURL = this.botCreatorService.getServer();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this.serverURL });
        /* console.log('constructor called..');
         http.get('friends.json')
           .map(res => res.json())
           .subscribe((data) => {  console.log(data)},
             err => console.log(err),
             () => console.log('done')
           );*/
    }
    AppCreateBotComponent4.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload: uploaded:", item, status, response);
            // console.log(JSON.parse(response).path);
            _this.Path = JSON.parse(response).path;
            if (status === 422) {
                _this.isFileUploaded = false;
                alert('Please choose valid file');
            }
            else if (status === 200) {
                _this.isFileUploaded = true;
                alert('File uploaded successfully..');
            }
        };
        if (this.botCreatorService.getModel() != null) {
            this.bot = this.botCreatorService.getModel();
            this.name = this.bot.name;
        }
    };
    AppCreateBotComponent4.prototype.onSubmit = function () {
        var _this = this;
        if (this.subKey && this.isFileUploaded && this.clickCount === 0) {
            this.clickCount = this.clickCount + 1;
            this.Parameters.subKey = this.subKey;
            this.Parameters.Path = this.Path;
            this.Parameters.name = this.name;
            if (!this.name) {
                alert('Please provide all details and then try again');
                this.clickCount = this.clickCount - 1;
            }
            this.botCreatorService.getQnAKey(this.serverURL + '/getqnakey', this.Parameters)
                .subscribe(function (response) {
                console.log(response.json());
                _this.bot.kbId = response.json().kbId;
                _this.bot.subKey = _this.subKey;
                _this.botCreatorService.setModel(_this.bot);
                _this.botCreatorService.saveToDB(_this.serverURL + '/insert', _this.bot)
                    .subscribe(function (response) {
                    console.log('Insert success!!');
                    _this.botCreatorService.clearModel();
                    _this.botCreatorService.updateMicrosoftStatus(_this.serverURL + '/updatemicrosoft', _this.bot)
                        .subscribe(function (response) { return console.log('success'); }, function (error2) { return console.log('error occurred'); });
                }, function (error) { return console.log(error); }, function () { return _this.router.navigate(['/botmonitor']); });
            }, function (error) {
                console.log(error);
                alert('Please provide valid sub key and choose valid csv file');
            });
        }
        else if (this.subKey && this.isFileUploaded && this.clickCount > 0) {
            console.log('hold on! click once!!');
        }
        else {
            alert('upload file then click next');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
    ], AppCreateBotComponent4.prototype, "comp4Form", void 0);
    AppCreateBotComponent4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/botcreate/step4/createbot4.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_botcreate_service__["a" /* BotCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_botcreate_service__["a" /* BotCreateService */]) === "function" && _d || Object])
    ], AppCreateBotComponent4);
    return AppCreateBotComponent4;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=createbot4.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/botcreate/step5/createbot5.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"card\">\n         <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n            <div class=\"card-header\">\n              <strong>Configuration Page</strong>\n            </div>\n           <div class=\"card-body\">\n             <div class=\"card-footer\">\n               <a  class=\"btn btn-primary\" routerLinkActive=\"active\" [routerLink]=\"['/botcreate4']\" style=\"padding-right: 25px;\"><i class=\"fa fa-arrow-left\" style=\"padding-right: 5px\"></i> Back</a>\n               <button  class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-arrow-right\" style=\"padding-right: 5px\"></i> Next</button>\n               <a  class=\"btn btn-danger\" routerLinkActive=\"active\" [routerLink]=\"['/']\" style=\"padding-right: 25px\"><i class=\"fa fa-times\" style=\"padding-right: 5px\"></i>Cancel</a>\n             </div>\n           </div>\n          </form>\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/views/botcreate/step5/createbot5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCreateBotComponent5; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppCreateBotComponent5 = (function () {
    function AppCreateBotComponent5(http) {
        this.http = http;
    }
    AppCreateBotComponent5 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/botcreate/step5/createbot5.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AppCreateBotComponent5);
    return AppCreateBotComponent5;
    var _a;
}());

//# sourceMappingURL=createbot5.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/botdelete/botdelete.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"card\">\n         <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n            <div class=\"card-header\">\n              <strong>Delete bots</strong>\n            </div>\n           <div class=\"card-body\">\n               <table class=\"table table-striped\">\n                 <thead>\n                   <tr>\n                     <th>Name</th>\n                     <th>Description</th>\n                     <th>Status</th>\n                     <th>Action</th>\n                   </tr>\n                 </thead>\n                 <tbody>\n                   <tr *ngFor=\"let bot of chatbots; let i = index\">\n                     <td>{{bot.name}}</td>\n                     <td>{{bot.description}}</td>\n                     <td><div *ngIf=\"bot.status==1; else BotStatus\">\n                       Running\n                     </div>\n                       <ng-template #BotStatus>Stopped</ng-template></td>\n                     <td>\n                        <a (click)=\"deleteBot(bot,i)\">\n                          <span class=\"fa fa-remove icon\"></span>\n                        </a>\n                     </td>\n                   </tr>\n                 </tbody>\n               </table>\n           </div>\n          </form>\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/views/botdelete/botdelete.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_botcreate_service__ = __webpack_require__("../../../../../src/app/services/botcreate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BotDeleteComponent = (function () {
    function BotDeleteComponent(http, botCreateService) {
        this.http = http;
        this.botCreateService = botCreateService;
        this.serverURL = '';
        this.chatbots = [];
        this.serverURL = this.botCreateService.getServer();
    }
    BotDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.botCreateService.getFromDB(this.serverURL + '/getfromdb')
            .subscribe(function (response) {
            _this.chatbots = response.json();
        }, function (error) { return console.log(error); });
    };
    BotDeleteComponent.prototype.deleteBot = function (bot, index) {
        var _this = this;
        // console.log(bot);
        if (bot.status === 1) {
            alert('Stop the bot and then delete!!');
        }
        else {
            console.log('deleting..');
            this.botCreateService.deleteBot(this.serverURL + '/delete', bot)
                .subscribe(function (response) {
                console.log('delete sucess');
                _this.chatbots.splice(index, 1);
                _this.botCreateService.updateMicrosoftStatus(_this.serverURL + '/updatemicrosoft', bot)
                    .subscribe(function (response) { return console.log('success'); }, function (error2) { return console.log('error'); });
            }, function (error) { return console.log('error'); });
        }
    };
    BotDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/botdelete/botdelete.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_botcreate_service__["a" /* BotCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_botcreate_service__["a" /* BotCreateService */]) === "function" && _b || Object])
    ], BotDeleteComponent);
    return BotDeleteComponent;
    var _a, _b;
}());

//# sourceMappingURL=botdelete.js.map

/***/ }),

/***/ "../../../../../src/app/views/botmodify/botmodify.html":
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"card\">\n         <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n            <div class=\"card-header\">\n              <strong>Modify details</strong>\n            </div>\n           <div class=\"card-body\">\n\n             <div class=\"form-group\">\n               <div class=\"input-group\">\n                 <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Select bot</p></span>\n                 <select class=\"form-control col-md-4\" required=\"true\"  name=\"ecommerce\" [(ngModel)]=\"chatbot\" (change)=\"botChange(chatbot)\">\n                   <option *ngFor=\"let bot of chatbots; let i = index\" [ngValue]=\"bot\">\n                     {{bot.name}}\n                   </option>\n                 </select>\n               </div>\n             </div>\n             <br>\n\n             <tabset>\n\n               <tab heading=\"Gateway Credentials\">\n                   <form #f=\"ngForm\">\n                     <div class=\"card-body\">\n                       <div class=\"form-group\">\n                         <div class=\"input-group\">\n                           <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:100px;\">Name</p></span>\n                           <input type=\"text\" id=\"username3\" name=\"name\" class=\"form-control\" required=\"true\" [(ngModel)]=\"selectedChatbot.name\">\n                         </div>\n                       </div>\n                       <div class=\"form-group\">\n                         <div class=\"input-group\">\n                           <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:100px;\">Description</p></span>\n                           <input type=\"text\" id=\"username3\" name=\"description\" class=\"form-control\" required=\"true\" [(ngModel)]=\"selectedChatbot.description\">\n                         </div>\n                       </div>\n                       <div class=\"form-group\">\n                         <div class=\"input-group\">\n                           <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:100px;\">Microsoft Id</p></span>\n                           <input type=\"text\" id=\"username3\" name=\"microsoftId\" class=\"form-control\" required=\"true\" [(ngModel)]=\"selectedChatbot.microsoftId\">\n                           <span class=\"input-group-addon\"><i class=\"fa fa-id-card-o\"></i></span>\n                         </div>\n                       </div>\n                       <div class=\"form-group\">\n                         <div class=\"input-group\">\n                           <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:100px;\">Microsoft Key</p></span>\n                           <input type=\"email\" id=\"email3\" name=\"microsoftKey\" class=\"form-control\" required=\"true\" [(ngModel)]=\"selectedChatbot.microsoftKey\">\n                           <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n                         </div>\n                       </div>\n                     </div>\n                   </form>\n               </tab>\n\n               <tab heading=\"Ecommerce Credentials\">\n                 <form #f=\"ngForm\">\n                   <div class=\"form-group\">\n                     <div class=\"input-group\">\n                       <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Ecommerce</p></span>\n                       <select class=\"form-control\" required=\"true\"  name=\"ecommerce\" [(ngModel)]=\"selectedChatbot.ecommerce\">\n                         <option *ngFor=\"let ecommerce of ecommerceTypes\" value=\"{{ecommerce}}\">\n                           {{ecommerce}}\n                         </option>\n                       </select>\n                     </div>\n                   </div>\n                   <div class=\"form-group\">\n                     <div class=\"input-group\">\n                       <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Ecommerce Server</p></span>\n                       <input type=\"text\" id=\"ecommerceServer\" name=\"ecommerceServer\" class=\"form-control\" required=\"true\" [(ngModel)]=\"selectedChatbot.ecommerceServer\">\n                       <span class=\"input-group-addon\"><i class=\"fa fa-external-link\"></i></span>\n                     </div>\n                   </div>\n                   <div class=\"form-group\">\n                     <div class=\"input-group\">\n                       <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Ecommerce Key</p></span>\n                       <input type=\"email\" id=\"email3\" name=\"ecommerceKey\" class=\"form-control\" required=\"true\" [(ngModel)]=\"selectedChatbot.ecommerceKey\">\n                       <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n                     </div>\n                   </div>\n                   <div class=\"form-group\">\n                     <div class=\"input-group\">\n                       <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Ecommerce Secret</p></span>\n                       <input type=\"email\" id=\"email3\" name=\"ecommerceSecret\" class=\"form-control\" required=\"true\" [(ngModel)]=\"selectedChatbot.ecommerceSecret\">\n                       <span class=\"input-group-addon\"><i class=\"fa fa-asterisk\"></i></span>\n                     </div>\n                   </div>\n                 </form>\n               </tab>\n\n               <tab heading=\"FAQ Questions\">\n                 <form (ngSubmit)=\"onFAQSubmit()\">\n                   <span>Please choose FAQ q&a file if you would like to update.</span><br><br>\n                   <div class=\"form-group\">\n                     <div class=\"input-group\">\n                       <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\".csv\" />\n                       <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                         Upload\n                       </button>\n                       <p style=\"margin:0px;padding:0px;width:150px;\"></p>\n                       <button  class=\"btn btn-success\" type=\"submit\" [disabled]=\"!isFileUploaded\"><i class=\"fa fa-paper-plane\" style=\"padding-right: 5px\"></i> Generate new key</button>\n                     </div>\n                   </div>\n                 </form>\n                 <!--<div class=\"form-group\">\n                   <div class=\"input-group\">\n                     <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" accept=\".csv\" />\n                     <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                       Upload\n                     </button>\n                   </div>\n                 </div>\n-->              </tab>\n\n                 <tab heading=\"General config\">\n                   <form #f=\"ngForm\">\n                     <div class=\"form-group\">\n                       <div class=\"input-group\">\n                         <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Currency</p></span>\n                         <input type=\"text\" id=\"ecommerceServer\" name=\"ecommerceServer\" class=\"form-control\" required=\"true\" [(ngModel)]=\"ecommerceServer\">\n                         <span class=\"input-group-addon\"><i class=\"fa fa-external-link\"></i></span>\n                       </div>\n                     </div>\n                     <div class=\"form-group\">\n                       <div class=\"input-group\">\n                         <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Pre Filters</p></span>\n                         <input type=\"email\" id=\"email3\" name=\"ecommerceKey\" class=\"form-control\" required=\"true\" [(ngModel)]=\"ecommerceKey\">\n                         <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n                       </div>\n                     </div>\n                     <div class=\"form-group\">\n                       <div class=\"input-group\">\n                         <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Post Filters</p></span>\n                         <input type=\"email\" id=\"email3\" name=\"ecommerceSecret\" class=\"form-control\" required=\"true\" [(ngModel)]=\"ecommerceSecret\">\n                         <span class=\"input-group-addon\"><i class=\"fa fa-asterisk\"></i></span>\n                       </div>\n                     </div>\n\n                     <div class=\"form-group\">\n                       <div class=\"input-group\">\n                         <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Beginning picture URL</p></span>\n                         <input type=\"email\" id=\"email3\" name=\"ecommerceSecret\" class=\"form-control\" required=\"true\" [(ngModel)]=\"ecommerceSecret\">\n                         <span class=\"input-group-addon\"><i class=\"fa fa-asterisk\"></i></span>\n                       </div>\n                     </div>\n\n                     <div class=\"form-group\">\n                       <div class=\"input-group\">\n                         <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Confidence Score</p></span>\n                         <input type=\"email\" id=\"email3\" name=\"ecommerceSecret\" class=\"form-control\" required=\"true\" [(ngModel)]=\"ecommerceSecret\">\n                         <span class=\"input-group-addon\"><i class=\"fa fa-asterisk\"></i></span>\n                       </div>\n                     </div>\n\n                   </form>\n                 </tab>\n\n                 <tab heading=\"Dialog config\">\n                   <div class=\"form-group\">\n                     <div class=\"input-group\">\n                       <span class=\"input-group-addon\"><p style=\"margin:0px;padding:0px;width:150px;\">Label</p></span>\n                     </div>\n                   </div>\n                 </tab>\n             </tabset>\n\n             <br>\n             <div class=\"card-footer\">\n               <button  class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-arrow-right\" style=\"padding-right: 5px\"></i> Submit</button>\n               <a  class=\"btn btn-danger\" routerLinkActive=\"active\" [routerLink]=\"['/']\" style=\"padding-right: 25px\"><i class=\"fa fa-times\" style=\"padding-right: 5px\"></i>Cancel</a>\n             </div>\n           </div>\n         </form>\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/views/botmodify/botmodify.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotModifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_botcreate_service__ = __webpack_require__("../../../../../src/app/services/botcreate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BotModifyComponent = (function () {
    function BotModifyComponent(http, botCreateService) {
        this.http = http;
        this.botCreateService = botCreateService;
        this.serverURL = '';
        this.selectedChatbot = {};
        this.ecommerceTypes = ['Woocommerce', 'Shopify'];
        this.isFileUploaded = false;
        this.Parameters = { subKey: '',
            Path: '',
            name: ''
        };
        this.clickCount = 0;
        this.serverURL = this.botCreateService.getServer();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this.serverURL });
    }
    BotModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.botCreateService.getFromDB(this.serverURL + '/getfromdb')
            .subscribe(function (response) {
            _this.chatbots = response.json();
        }, function (error) { return console.log(error); });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload: uploaded:", item, status, response);
            // console.log(JSON.parse(response).path);
            _this.Path = JSON.parse(response).path;
            if (status === 422) {
                _this.isFileUploaded = false;
                alert('Please choose valid file');
            }
            else if (status === 200) {
                _this.isFileUploaded = true;
                alert('File uploaded successfully..');
            }
        };
    };
    BotModifyComponent.prototype.botChange = function (mybot) {
        this.selectedChatbot = mybot;
        this.subKey = mybot.qna_key;
        this.name = mybot.name;
    };
    BotModifyComponent.prototype.onFAQSubmit = function () {
        if (this.clickCount === 0) {
            console.log('its working dupukku');
            this.clickCount = this.clickCount + 1;
            this.Parameters.subKey = this.subKey;
            this.Parameters.Path = this.Path;
            this.Parameters.name = this.name;
            console.log('name of the bot ', this.name);
            if (!this.name) {
                alert('Please provide all details and then try again');
                this.clickCount = this.clickCount - 1;
            }
            /*this.botCreateService.getQnAKey(this.serverURL + '/getqnakey', this.Parameters)
              .subscribe(
                response => {
                  console.log(response.json());
                  this.bot.kbId = response.json().kbId;
                  this.botCreateService.setModel(this.bot);
                  this.botCreateService.saveToDB(this.serverURL + '/insert', this.bot)
                    .subscribe(
                      (response) => {
                        console.log('Insert success!!');
                        this.botCreateService.clearModel();
                      },
                      (error) => console.log(error),
                      () => console.log('complete')
                    );
                },
                error => {
                  console.log(error);
                  alert('Please provide valid sub key and choose valid csv file');
                }
              )*/
        }
        else {
            console.log('click only once dupukku');
        }
    };
    BotModifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/botmodify/botmodify.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_botcreate_service__["a" /* BotCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_botcreate_service__["a" /* BotCreateService */]) === "function" && _b || Object])
    ], BotModifyComponent);
    return BotModifyComponent;
    var _a, _b;
}());

//# sourceMappingURL=botmodify.js.map

/***/ }),

/***/ "../../../../../src/app/views/botmonitor/monitorbot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Combined All Table\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>App Id</th>\n                <th>Name</th>\n                <th>Description</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let bot of chatbots; let i = index\">\n                <td>{{bot.id}}</td>\n                <td>{{bot.name}}</td>\n                <td>{{bot.description}}</td>\n                <td>\n                  <label class=\"switch switch-text switch-pill switch-success\">\n                    <input type=\"checkbox\" class=\"switch-input\" [checked]=\"bot.status\" (change)=\"checkBoxvalue(bot,i)\">\n                        <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                        <span class=\"switch-handle\"></span>\n                  </label>\n                </td>\n               </tr>\n             </tbody>\n          </table>\n         </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n"

/***/ }),

/***/ "../../../../../src/app/views/botmonitor/monitorbot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMonitorBotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_botdata_service__ = __webpack_require__("../../../../../src/app/services/botdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_botcreate_service__ = __webpack_require__("../../../../../src/app/services/botcreate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppMonitorBotComponent = (function () {
    function AppMonitorBotComponent(botService, botCreateService) {
        this.botService = botService;
        this.botCreateService = botCreateService;
        this.checkboxValue = true;
        this.bots = [];
        this.chatbots = [];
        this.serverURL = '';
        this.serverURL = this.botCreateService.getServer();
    }
    AppMonitorBotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bots = this.botService.getBots();
        this.botCreateService.getFromDB(this.serverURL + '/getfromdb')
            .subscribe(function (response) {
            _this.chatbots = response.json();
        }, function (error) { return console.log(error); });
    };
    AppMonitorBotComponent.prototype.checkBoxvalue = function (bot, index) {
        if (bot.status === 0) {
            this.chatbots[index].status = 1;
            bot.status = 1;
        }
        else {
            this.chatbots[index].status = 0;
            bot.status = 0;
        }
        //console.log(JSON.stringify(bot));
        this.botCreateService.updateBotStatus(this.serverURL + '/botupdate', bot)
            .subscribe(function (response) { return console.log('sucess'); }, function (error) { return console.log('error'); });
    };
    AppMonitorBotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/botmonitor/monitorbot.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_botdata_service__["a" /* BotDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_botdata_service__["a" /* BotDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_botcreate_service__["a" /* BotCreateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_botcreate_service__["a" /* BotCreateService */]) === "function" && _b || Object])
    ], AppMonitorBotComponent);
    return AppMonitorBotComponent;
    var _a, _b;
}());

//# sourceMappingURL=monitorbot.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map