import { Component } from "@angular/core";

@Component({
    selector: 'list-employee',
    templateUrl: 'app/Employee/employeeList.component.html',
    styleUrls: ['app/Employee/employeeList.component.css']

})

export class EmployeeListComponent {
    employees: any[];
    constructor() {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '2018-02-18' },
            { code: 'emp102', name: 'Alex', gender: 'Female', annualSalary: 2300, dateOfBirth: '2018-02-11' },
            { code: 'emp103', name: 'Adriana', gender: 'Female', annualSalary: 5930, dateOfBirth: '2018-02-01' },
            { code: 'emp104', name: 'Laura', gender: 'Female', annualSalary: 4700, dateOfBirth: '2018-06-18' }
        ]
    }

    getEmployees(): void {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '2018-02-18' },
            { code: 'emp102', name: 'Alex', gender: 'Female', annualSalary: 2300, dateOfBirth: '2018-02-11' },
            { code: 'emp103', name: 'Adriana', gender: 'Female', annualSalary: 5930, dateOfBirth: '2018-02-01' },
            { code: 'emp104', name: 'Laura', gender: 'Female', annualSalary: 4700, dateOfBirth: '2018-06-18' },
            { code: 'emp105', name: 'Carolina', gender: 'Female', annualSalary: 2900, dateOfBirth: '2014-05-03' }
        ]
    }

    trackByEmployeeCode(index: number, employee: any): string {
        return employee.code
    }
    //employees: any[] = [
    //    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '2018-02-18' },
    //    { code: 'emp102', name: 'Alex', gender: 'Female', annualSalary: 2300, dateOfBirth: '2018-02-11' },
    //    { code: 'emp103', name: 'Adriana', gender: 'Female', annualSalary: 5930, dateOfBirth: '2018-02-01' },
    //    { code: 'emp104', name: 'Laura', gender: 'Female', annualSalary: 4700, dateOfBirth: '2018-06-18' }
    //]
}