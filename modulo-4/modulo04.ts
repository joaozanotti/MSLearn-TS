/* Module 4: Develop typed functions using TypeScript */

/*  Exercises  */

// Functions

function displayAlert(message: string|number) {
    console.log('The message is ' + message);
}

displayAlert('Hello World');
displayAlert(10);

function sum(input: number[]): number {
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

console.log(sum([1, 2, 3]));

// Parameters optional and default

let addThreeNumbers = (x: number, y: number, z?: number): number => {
    if (z === undefined) {
        return x + y;
    } else {
        return x + y + z;
    }
}

console.log(addThreeNumbers(10, 20, 30));

let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;

console.log(subtractThreeNumbers(10, 20));

// Parameters rest and deconstructed objects

let addAllNumbers = (...numbers: number[]): number => {
    let total:number = 0;
    for(let counter = 0; counter < numbers.length; counter++) {
       if(isNaN(numbers[counter])){
          continue;
       }
       total += Number(numbers[counter]);
    }
    return total;
}

console.log(addAllNumbers(1, 2, 3, 4, 5));

interface Message {
    text: string;
    sender: string;
}
 
 function displayMessage({text, sender}: Message) {
     console.log(`Message from ${sender}: ${text}`);
}
 
console.log(displayMessage({sender: 'Christopher', text: 'hello, world'}));

// Types of a function

// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}

let addNumbers: Calculator = (x, y) => x + y;
let subtractNumbers: Calculator = (x, y) => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}

console.log(doCalculation('add')(1, 2));

/*   Laboratory  */

/*  EXERCISE 1
    TODO: Declare a new function type for the sortDescending and sortAscending functions. */
    
type compareFunctionType = (a: number, b: number) => number;

/*  TODO: Convert the sortDescending and sortAscending functions to arrow 
    functions. */

/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in descending order */
let sortDescending: compareFunctionType = (a, b) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
}

/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in ascending order. */
let sortAscending: compareFunctionType = (a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

/*  The buildArray function builds an array of unique random numbers containing the number 
    of items based on the number passed to it. The sortOrder parameter determines 
    whether to sort the array in ascending or descending order. */

/*  TODO: Update the BuildArray function. */

function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
          randomNumbers.push(nextNumber);
        } else {
          counter--;
        }
    }
    if (sortOrder === 'ascending') {
      return randomNumbers.sort(sortAscending);
    } else {
      return randomNumbers.sort(sortDescending);
    }
}

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);

/*  EXERCISE 2
    TODO: Update the LoanCalculator function. */

function loanCalculator (principle: number, interestRate: number, months = 12) {
    let interest = interestRate / 1200;   // Calculates the monthly interest rate
    let payment;
    payment = principle * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}

let myLoan = loanCalculator(1000, 5);
console.log(myLoan);