// video 15 - Annotations with Variables
let apples: number = 5;

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let notghing: undefined = undefined;

// built in objects
let now: Date = new Date();

// video 16 - Object Literal Annotations

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

// video 17 - Annotations around functions

// Function

// note this is a inline function assigned to a variable
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// video 19 - The 'Any' Type

// When to use annotations

// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // JSON.parse returns 'any'

// video 20 - Fixing the 'Any' type

const coordinates2: {x: number, y: number} = JSON.parse(json); // JSON.parse returns 'any'

// video 21 - Delayed Initialization

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// video 22 - When inference Doesn't Work

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i< numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}


