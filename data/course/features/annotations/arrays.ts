// video 29 - Arrays in Typescript
const carMakers = ['ford', 'toyota', 'chevy'];
const carMakers2: string[] = [];

const dates = [ new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// video 30 - WHy Typed Arrays?

// Help with inference when extracing values
const car2 = carMakers[0]; // note inferred car type
const myCar = carMakers.pop();

// prevent incompatible values
//carMakers.push(100);

// Help with map, forEach, reduce
carMakers.map((car: string):string => {
    return car; // get access to autocomplete on car as TS knows it is a string
});

// video 31 - Multiple Types in Arrays

// Flexible types
const importantDates = [new Date(), '2030-10-10']; // inferred to const importantDates: (string | Date)[]
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push('2030-10-10');