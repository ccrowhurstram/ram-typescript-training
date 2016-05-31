// basic primitives
const num: number = 10;
const str: string = "Hello";

// the following variable declaration fails the ts compiler ('noImplicitAny' is set to true)
// clearly this is a case where we MUST add a type annotation
// let whatAmI;
let whatAmI: number;

interface Animal {
    name: string;
    weight: number;
}

// objects literals
const pet: Animal = {
    name: "george",
    weight: 15
};
const anoPet = Object.setPrototypeOf({}, pet) as typeof pet;
const pets: Animal[] = [pet, anoPet];


// classes
class Zoo {
    constructor(private animals: Animal[]) {}
}

const wildAnimals: Animal[] = [{ name: "lion", weight: 500 }];
const londonZoo = new Zoo(wildAnimals);

const localZoo = new Zoo([{ name: "lion", weight: 500 }]);

class MyGeneric<T> {
    private isZeroBased: boolean = true;
    private ticks: number[] = [1,2,3];
    private items: T[] = [];
    add(item: T){
        this.items.push(item);
    }
    getItem(selector: (item: T) => boolean): T {
        return this.items.find(i => selector(i));
    }
}

const genericInstance = new MyGeneric<Animal>();
genericInstance.add({ name: "george", weight: 15});
let lion = genericInstance.getItem((a: Animal) => a.name === "george");



// avoid leaking to the global namespace
export {};