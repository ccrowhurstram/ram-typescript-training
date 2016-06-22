import { Employee } from "./employee"

export function printEmployee(e: Employee) {
    console.log(`${e.firstName} ${e.lastName}`);
}