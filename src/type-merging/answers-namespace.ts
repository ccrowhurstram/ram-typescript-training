namespace TypeMerging {

    export interface IEmployer {
        address: string;
        raiseSalary(employee: Employee): void;
    }

    export namespace IEmployer.raiseSalary {
        export let amount = 10;
    }

    export interface Employee {
        title: string;
        getFullName(): string;
    }
    Employee.prototype.getFullName = getFullName

    function getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    export class Office {
        address: string;
    }

    export namespace Office {
        export let level = 2;
    }
}

namespace TypeMergingNsTests {
    // 1. Extend `IEmployer` interface with a new `address` field of type `string`
    let employer: TypeMerging.IEmployer = {
        name: "Chr",
        address: "Op",
        raiseSalary(e?: TypeMerging.Employee) {}
    };
    let employee = new TypeMerging.Employee(employer);

    // 2. Extend `TypeMerging` namespace with a new `Office` class
    let office = new TypeMerging.Office();
    
    // 3. Extend `IEmployer` interface with a `raiseSalary` function overload that accepts an `Employee` instance as an argument
    employer.raiseSalary(employee);

    // 4. Extend `Employee` class with a `title` field of type string
    employee.title = "Mr";

    // 5. Extend `Employee` class with a `getFullName` function with the following implementation
    let fullName: string = employee.getFullName();

    // 6. Extend `IEmployer.raiseSalary` function with an `amount` field
    TypeMerging.IEmployer.raiseSalary.amount = 1;

    // 7. Extend `Office` class you added in 2) with a new `level` static field, but *without modifying the existing class declaration* you wrote in 2)
    TypeMerging.Office.level = 3;
}