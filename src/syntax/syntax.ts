// your answers to the questions in syntax/readme.md....

// 1. Declare variables (or constants) using basic primitive types

let myVariable = 5;
const empty = "";


// 2. Declare an interface describing an Animal (interface should have at least two methods)

interface Animal {
    walk(): void;
    kill(prey: Animal): boolean;
}

let lion: Animal = {} as any;
let zebra: Animal = {} as any;
let isSuccess = lion.kill(zebra);


// 3. Declare a class that implements the Animal interface
//    * implement one of the methods as a class method
//    * implement one of the methods as a class field

function kill(prey: Animal): boolean {
    return true;
}

class Lion implements Animal {
    legs = 4;
    walk(): void {
        // does nothing
    }
    kill = (prey: Animal) => true;
    // kill = kill;
}


// 4. Declare a variable to be of type string or number

// union types
let str: string;
let num: number;
let numOrStr: string | number;

numOrStr = 5;
numOrStr = "";
// numOrStr = {};
// numOrStr = new Date();


// 5. Declare a variable to be of a type that combines both the Animal interface
//    and an another interface of your choosing

interface Plant {
    colour: string;
}

interface PlantOrAnimal extends Animal, Plant {
}
// type alias used to create an intersection type
type PlantOrAnimal2 = Plant & Animal;

let strangeThing = {
    walk() {},
    kill: (prey: Animal) => true,
    colour: ""
}
function eat(food: Plant & Animal) {
    
}
function eatMore(food: PlantOrAnimal) {
    
}
function eatEvenMore(food: PlantOrAnimal2) {
    
}
eat(strangeThing);
eatMore(strangeThing);
eatEvenMore(strangeThing);


// 6. Declare a variable to be an object that can have any number of fields of type number

// index types (OK so this isn't obvious, but it is basic :-0)
let expando: { [property: string]: number } = {
    legs: 2
};
expando["age"] = 5;
expando["2"] = 15;



// 7. Declare an interface that describes a function that takes a string and returns a string

function doStuff(val: string): string {
    return "";
}
function doObjectStuff(val: string): { age: number} {
    return { age: 10 };
}

interface StringFunc {
    (val?: string): string
}
function doOtherStuff(fn: StringFunc) : string {
    let result = fn("");
    return result;
}
let stuff = doOtherStuff(doStuff);
// let objStuff = doOtherStuff(doObjectStuff);


// 8. Is it possible to extend the Animal interface without introducing 
//    another interface - try it in code

interface Animal {
    // stuff: number;
}

// 9. Is it possible to assign an object literal to a variable declared
//    to be an instance of a class - try it in code

// let lionFake: Lion = {
// todo
// };


// 10. Pass a constructor function into another function

class Zebra {
    constructor(public stripes: number) {
        
    }
}

interface ZebraCtor {
    new(stripes: number): Zebra
}

function zebraFactory(ctor: { new(stripes: number): Zebra }) : Zebra {
    // logging code maybe here
    return new ctor(4);
}
function zebraFactory2(ctor: ZebraCtor) : Zebra {
    // logging code maybe here
    return new ctor(4);
}

let zebra1 = zebraFactory(Zebra);
let zebra2 = zebraFactory2(Zebra);


// 11. Convert your interface in exercise 7 to be use a generic type parameter

function stringIdentity(val: string) : string {
    return val;
}

function numIdentity(val: number) : number {
    return val;
}

interface Identity<T> {
    (val: T): T;
}
function identity<T>(val: T) : T {
    return val;
}

function echo<T>(impl: Identity<T>, val: T) : T {
    return impl(val);
}

echo(stringIdentity, "whatever");
echo(identity, 5);


// 12. Give an example of using a guard clause to implement a function that 
// accepts string or Date as a parameter

function guarded(val: string | Date) : string {
    if (typeof val === "string") {
        return val;
    }
    else {
        return val.getTime().toString();
    }
}


// 13. As 12, but your function should accept either a Buidling or Room or 
// Site *class* (make sure each class has a different method)

class Building {
    method1() { return "Building"; }
}
class Room {
    method2(){ return "Room"; }
}
class Site{
    method3(){ return "Site"; }
}

function guarded2(val: Building | Room | Site) : string {
    if (val instanceof Building) {
        return val.method1();
    }
    else if (val instanceof Room ) {
        return val.method2();
    }
    else {
        return val.method3();
    }
}


// 14. As 12, but your function should accept either an Animal or Plant 
//     *interface*

function isPlant(val: any) : val is Plant {
    return !!("colour" in val);
}

function guarded3(val: Animal | Plant) : string {
    if (isPlant(val)) {
        return val.colour;
    }
    else {
        return val.kill(val).toString();
    }
}

// 15. For the function you created in exercise 13, pass an object literal 
// that looks like a Building

let building: Building = {
    method1(): string { return ""; }
};
// WARNING: this call will fail at runtime. This is because our building instance will
// not pass the instanceof Building check. This will cause the method3 to be called
// on building which it does not implement.
guarded2(building);


// avoid leaking to the global namespace
export {};