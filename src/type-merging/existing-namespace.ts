namespace TypeMerging {

    export interface IEmployer {
        name: string;
        raiseSalary(): void;
    }

    export class Employee {
        static print = printEmployee;
        age = 41;
        firstName = "Joe";
        lastName = "Blogs";
        constructor(public employer: IEmployer) { }
    }

    export function printEmployee(e: Employee) {
        console.log(`${e.firstName} ${e.lastName}`);
    }
}