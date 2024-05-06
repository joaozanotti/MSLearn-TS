/*  Module 6: DGenerics in TypeScript  */

/*  Exercises  */

// Generics with interfaces

interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnString: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}

interface processIdentityFunction<T, U> {
    (value: T, message: U): T;
}

function processIdentityFunction<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processorFuntion: processIdentityFunction<number, string> = processIdentityFunction;
let returnNumber1 = processorFuntion(100, 'Hello!');

interface ProcessIdentityClass<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentityClass<X, Y> implements ProcessIdentityClass<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processorClass = new processIdentityClass<number, string>(100, 'Hello');
processorClass.process();

// Generics with classes

class Car {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCar extends Car {
    make = 'Electric Car';
    doors = 4
}
class Truck extends Car {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Car> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);

/*  Laboratory  */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<T> {

    private _data: Array<T> = new Array(10);
    
    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        } else {
            console.log('Index is greater than 10')
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }
}

let cities = new DataStore();

cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London");       // item not added

console.log(cities.GetData(1));         // returns 'Chicago'
console.log(cities.GetData(12));        // returns 'undefined'

// TODO Test items as numbers.
let empIDs = new DataStore<number>();

empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);                  
console.log(empIDs.GetData(0));         // returns 50

// TODO Test items as objects.
type Pets = {
    name: string;
    breed: string;
    age: number
}

let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5});
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3});
console.log(pets.GetData(1));         // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }