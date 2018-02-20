"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageHeader = "Employee Details";
        this.imgUrl = "logo-nav@2x.png";
        this.firstName = 'Tom';
        this.lastName = 'Hanks';
        //isDisabled: boolean = false;
        //classToApply: string = "italisClass boldClass";
        //applyBoldClass: boolean = false;
        //applyItalicsClass: boolean = true;
        //isbold: boolean = true;
        //fontSize: number = 30;
        //isItalic: boolean = true;
        //misEstilos = {
        //    'font-size.px': this.fontSize,
        //    'font-style': this.isItalic ? 'italic' : 'normal',
        //    'font-weight': this.isbold ? 'bold' : 'normal'
        //};
        //addSyles() {
        //    let styles = {
        //        'font-size.px': this.fontSize,
        //        'font-style': this.isItalic ? 'italic' : 'normal',
        //        'font-weight': this.isbold ? 'bold' : 'normal'
        //    };
        //    return styles;
        //};
        //addClases() {
        //    let clases = {
        //        boldClass: this.applyBoldClass,
        //        italicsClass: this.applyItalicsClass
        //    };
        //    return clases;
        //};
        //getFullName(): string {
        //    return this.firstName + " " + this.lastName;
        //}
    }
    AppComponent.prototype.miClick = function () {
        console.log("has hecho click");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n                <my-employee></my-employee>\n                <br/>\n                <br/>\n               <list-employee></list-employee>\n              "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//import { Component } from '@angular/core';
//@Component({
//  selector: 'my-app',
//  template: `<h1>Hola {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular 2'; }
//# sourceMappingURL=app.component.js.map