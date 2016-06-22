// TODO: add your extensions here
import { Employee, IEmployer, printEmployee } from "./existing-module";

declare module "./existing-module/employer" {
    export interface IEmployer {
        address: string;
        raiseSalary(e: Employee): void;
    }
    namespace IEmployer.raiseSalary {
        let amount: number;
    }
}
declare module "./existing-module/employee" {
    export interface Employee {
        title: string;
        getFullName(): string;
    }
}
Employee.prototype.getFullName = getFullName;

function getFullName(): string {
    return this.firstName + ' ';
}

declare module "./existing-module/print-employee" {
    namespace printEmployee {
        let isEnabled: boolean;
    }
}


function typeMergingTests() {
    // 1. Extend `IEmployer` interface with a new `address` field of type `string`
    let employer: IEmployer = {
        name: "Chr",
        address: "Op",
        raiseSalary(e?: Employee) { }
    };
    let employee = new Employee(employer);

    // 2. Extend `existing-module` module with a new `Office` class
    //let office = new Office();

    // 3. Extend `IEmployer` interface with a `raiseSalary` function overload that accepts an `Employee` instance as an argument
    employer.raiseSalary(employee);

    // 4. Extend `Employee` class with a `title` field of type string
    employee.title = "Mr";

    // 5. Extend `Employee` class with a `getFullName` function with the following implementation
    let fullName: string = employee.getFullName();

    // 6. Extend `IEmployer.raiseSalary` function with an `amount` field
    IEmployer.raiseSalary.amount = 1;

    // 7. Extend `printEmployee` function with a new `isEnabled` field
    printEmployee.isEnabled = true;
}