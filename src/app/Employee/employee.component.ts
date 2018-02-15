import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/Employee/employee.component.html',
    styleUrls: ['app/Employee/employee.component.css']
})

export class EmployeeComponent {

    firstName: string = 'Tom';
    lastName: string = 'Hopkings';
    gender: string = 'Male';
    age: Number = 20;
    colspan: number = 2;
    showDetails: boolean = false;

    toogleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}