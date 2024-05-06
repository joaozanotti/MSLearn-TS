"use strict";
/*  Module 6: DGenerics in TypeScript  */
let returnNumber = {
    value: 25,
    message: 'Hello!'
};
let returnString = {
    value: 'Hello!',
    message: 25
};
function processIdentityFunction(value, message) {
    console.log(message);
    return value;
}
let processorFuntion = processIdentityFunction;
let returnNumber1 = processorFuntion(100, 'Hello!');
class processIdentityClass {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
let processorClass = new processIdentityClass(100, 'Hello');
processorClass.process();
// Generics with classes
class Car {
    constructor() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
}
class ElectricCar extends Car {
    constructor() {
        super(...arguments);
        this.make = 'Electric Car';
        this.doors = 4;
    }
}
class Truck extends Car {
    constructor() {
        super(...arguments);
        this.make = 'Truck';
        this.doors = 2;
    }
}
function accelerate(car) {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car;
}
let myElectricCar = new ElectricCar;
accelerate(myElectricCar);
let myTruck = new Truck;
accelerate(myTruck);
/*  Laboratory  */
/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore {
    constructor() {
        this._data = new Array(10);
    }
    AddOrUpdate(index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
        else {
            console.log('Index is greater than 10');
        }
    }
    GetData(index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    }
}
let cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'
// TODO Test items as numbers.
let empIDs = new DataStore();
empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);
console.log(empIDs.GetData(0)); // returns 50
let pets = new DataStore();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5 });
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 });
console.log(pets.GetData(1)); // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }
