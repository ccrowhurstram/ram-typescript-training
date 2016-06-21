# Type merging - Exercises

## Extending types organised using namespaces

1. Extend `IEmployer` interface with a new `address` field of type `string` (no new interface please)
2. Extend existing module with a new `Office` class
3. Extend `IEmployer` interface with a `raiseSalary` function overload that accepts an `Employee` instance as an argument 
4. Extend `Employee` class with a `title` field of type string
5. Extend `Employee` class with a `getFullName` function with the following implementation: `return this.firstName + ' ' + this.lastName`
6. Extend `IEmployer.raiseSalary` function with an `amount` field
7. Extend `printEmployee` function with a new `isEnabled` field
8. Extend `Office` class you added in 2) with a new `level` static field, but *without modifying the existing class declaration* you wrote in 2)

**Excercise notes**

* **Tip**: One exercise in the above list is not possible in typescript!
* The exerices involves extending existing code organised using typescript `namespace`'s
* The existing code you will be extending can be found in [existing-namespace.ts](existing-namespace.ts)
* Add your answers to [answers-namespace.ts](answers-namespace.ts). *Steps:*
  * uncomment the `TypeMergingNsTests`
  * add your extensions inside of the `TypeMerging` namespace
  * make the compiler happy


## Extending types organised using es2015 modules

Repeat exercises 1-7 from above, but this time you will be extending existing es2015 modules

**Excercise notes**

* **Tip**: One exercise in the above list is not possible in typescript!
* The exerices involve extending existing code organised using typescript es2015 `modules`'s
* The existing code you will be extending can be found in [existing-module](existing-module) folder
* Add your answers to [answers-module.ts](answers-module.ts). *Steps:*
  * uncomment the `typeMergingTests` function
  * add your extensions just above `typeMergingTests`
  * make the compiler happy