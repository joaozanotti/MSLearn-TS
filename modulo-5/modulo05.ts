/*  Module 5: Declare and instantiate classes in TypeScript  */

/*    Exercises  */

/*    Laboratory  */

/*  EXERCISE 1 */

// Class Car

interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

class Car implements Vehicle {
    private static numberOfCars: number = 0;
    private _make: string;
    private _color: string;
    private _doors: number;

    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
        Car.numberOfCars++;
    }

    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }

    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }

    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    accelerate(speed: number): string {
        return `${this.make} is accelerating to ${speed} MPH.`;
    }

    brake(): string {
        return `${this.make} is braking with the standard braking system.`;
    }

    turn(direction: 'left' | 'right'): string {
        return `${this.make} is turning ${direction}`;
    }

    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }
}

let myCar1 = new Car('Cool Car Company', 'blue', 2);
let myCar2 = new Car('Galaxy Motors', 'red', 4);
let myCar3 = new Car('Galaxy Motors', 'gray');

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));

class ElectricCar extends Car {
    private _range: number;

    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }

    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }

    charge() {
        console.log(this.make + " is charging.");
    }

    brake(): string {
        return `${this.make} is braking with the regenerative braking system.`;
    }
}

let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
spark.charge();
console.log(spark.brake());

class BuildArray {
    // TODO Define the properties
    private _items: number;
    private _sortOrder: 'ascending' | 'descending';

    // TODO Define the constructor
    constructor (items: number, sortOrder: 'ascending' | 'descending') {
        this._items = items;
        this._sortOrder = sortOrder;
    }

    // TODO Define the accessors
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
    }

    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(sortOrder) {
        this._sortOrder = sortOrder;
    }

    // TODO Define the methods
    sortDescending = (a: number, b: number) => {
        if (a > b) {
            return -1;
        } else if (b > a) {
            return 1;
        } else {
            return 0; 
        }
    }

    sortAscending = (a: number, b: number) => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    }

    buildArray(): number[] {
        let randomNumbers: number[] = [];
        let nextNumber: number;
        for (let counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            } else {
                counter--;
            }
        }
        if (this.sortOrder === 'ascending') {
            return randomNumbers.sort(this.sortAscending);
        } else {
            return randomNumbers.sort(this.sortDescending);
        }
    }
}

/*  sortDescending is a comparison function that tells the sort method how to sort numbers
    in descending order. */

/*  sortAscending is a comparison function that tells the sort method how to sort numbers 
    in ascending order. */

/*  buildArray builds an array of unique random numbers containing the number of items 
    based on the number passed to it. The sortOrder parameter determines whether to sort 
    the array in ascending or descending order. */

/*  TODO: Instantiate the BuildArray objects. */

let testArray1 = new BuildArray(12, 'ascending');
let testArray2 = new BuildArray(8, 'descending');
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());