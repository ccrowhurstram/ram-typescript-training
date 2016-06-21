import { IEmployer } from "./employer"
import printEmployee from "./print-employee";

export class Employee {
    static print = printEmployee;
    age = 41;
    firstName = "Joe";
    lastName = "Blogs";
    constructor(public employer: IEmployer) { }
}
