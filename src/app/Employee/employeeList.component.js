"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '2018-02-18' },
            { code: 'emp102', name: 'Alex', gender: 'Female', annualSalary: 2300, dateOfBirth: '2018-02-11' },
            { code: 'emp103', name: 'Adriana', gender: 'Female', annualSalary: 5930, dateOfBirth: '2018-02-01' },
            { code: 'emp104', name: 'Laura', gender: 'Female', annualSalary: 4700, dateOfBirth: '2018-06-18' }
        ];
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '2018-02-18' },
            { code: 'emp102', name: 'Alex', gender: 'Female', annualSalary: 2300, dateOfBirth: '2018-02-11' },
            { code: 'emp103', name: 'Adriana', gender: 'Female', annualSalary: 5930, dateOfBirth: '2018-02-01' },
            { code: 'emp104', name: 'Laura', gender: 'Female', annualSalary: 4700, dateOfBirth: '2018-06-18' },
            { code: 'emp105', name: 'Carolina', gender: 'Female', annualSalary: 2900, dateOfBirth: '2014-05-03' }
        ];
    };
    EmployeeListComponent.prototype.trackByEmployeeCode = function (index, employee) {
        return employee.code;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'list-employee',
        templateUrl: 'app/Employee/employeeList.component.html',
        styleUrls: ['app/Employee/employeeList.component.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map