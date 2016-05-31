// basics...

// Answer 1
let num = 10;
const str: string = "hello";
// variable type of string inferred from assignment
let str1 = "world";

// Answer 2
interface Animal {
    name: string;
    kill(target: Animal): boolean;
    move(): void;
}

// Answer 3
class Lion implements Animal {
    name = "lion";
    constructor(public health = 10) {}
    // notice: this is implemented as a method
    move() {}
    // notice: this is implemented as a property
    kill = (other: Animal) => {
        if (other.name === "zebra") {
            return true;
        } else {
            return false;
        }
    };
}

// Answer 4
// union types
type NumberOrString = number | string;
const v1: NumberOrString = "";
const v2: NumberOrString = 10;
// doesn't compile
// const v3: numberOrString = new Date();

// Answer 5
// intersection types
type Pet = Animal & { birthday: Date };
let splodge: Pet = {
    name: "splodge",
    health: 3,
    kill: (other: Animal) => false,
    move() {},
    birthday: new Date()
}; 

// Answer 6
// index types (OK so this isn't obvious, but it is basic :-0)
let byTheNumbers: { [key: string]: number } = {};
byTheNumbers["one"] = 1;
byTheNumbers["two"] = 2;
// doesn't compile
// byTheNumbers.three = 3;



// not so obvious...

// Answer 7
// function types
interface Func1 {
    (value: string): string;
}
type Func2 = (value: string) => string;


// Answer 8
// extending an existing interface
interface Animal {
    health: number;
}
// in fact it's even possible to extend an existing class with an interface!
interface Lion {
    age: number;
}

// Answer 9
// assigning an object literal to a variable typed as a class 
let tom: Lion = {
    age: 1,
    name: "tom",
    health: 20,
    move() {},
    kill(other: Animal) { return false; }
}


// Answer 10
// variable referencing a constructor function
interface LionConstructor {
    new(): Lion
}
class LionFactory {
    private ctor: LionConstructor;
    setType(ctor: LionConstructor) {
        this.ctor = ctor;
    }
    create() :Lion {
        return new this.ctor();
    }
}
const lionsStore = new LionFactory();
lionsStore.setType(Lion);
const newLion: Lion = lionsStore.create();

// declaring a variable to be the type of another variable
let firstHamster: typeof splodge;



// and then there's generics....

// Answer 11
interface Identity<T> {
    (value: T): T;
}

// ... generics can get really hard!
interface StoreItem {
    reduceBy<T>(value: T): void;
}
interface Store<T extends StoreItem> {
    items: T[];
}
class Book implements StoreItem {
    reduceBy(value: number) {}
}
class BookStore implements Store<Book> {
    items: Book[];
}


// avoid leaking to the global namespace
export {};