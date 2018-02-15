import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                <my-employee></my-employee>
              `
    //template: ` <div>
    //                  <h1>{{pageHeader}}</h1>
    //                  <h3>{{getFullName()}}</h3>
    //                  <img src='https://angular.io/assets/images/logos/angular/{{imgUrl}}'/>
    //                  <my-employee></my-employee>
    //                  <button class='colorClass' [class]='classToApply'>Aceptar</button>
    //                    <br/><br/>
    //                  <button class='colorClass boldClass italisClass' [class.boldClass]='!applyBoldClass'>Aceptar</button>
    //                   <br/><br/>
    //                  <button class='colorClass boldClass italisClass' [ngClass]='addClases()'>Aceptar</button>
    //                   <br/><br/>
    //                    <button [ngStyle]='addSyles()'>Estilo</button>
    //                   <br/><br/>
    //                    <button [ngStyle]="{'color': 'aqua','font-weight': 'bold','borderBottom': borderStyle}">Otro Estilo</button>
    //                   <br/><br/>
    //                    <button [ngStyle]="misEstilos">Otro Estilo 2</button>
    //               </div>
    //             `
})

export class AppComponent {

    miClick(): void {
        console.log("has hecho click");

    }

    pageHeader: string = "Employee Details";
    imgUrl: string = "logo-nav@2x.png";
    firstName: string = 'Tom';
    lastName: string = 'Hanks';
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

//import { Component } from '@angular/core';

//@Component({
//  selector: 'my-app',
//  template: `<h1>Hola {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular 2'; }
