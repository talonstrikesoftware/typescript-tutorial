// video 34 - Tuples in Action

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// aan array representation of the - bad way
const pepsi = ['brown', true, 40];

// a tuple representation
const pepsi2: [string, boolean, number] = ['brown', true, 40];

pepsi2[0] = 40; // see how TS flags this

// an alternate way would be to use a type alias
type Drink = [string, boolean, number];

const pepsi3: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// video 35 - Why Tuples?
const carSpecs: [number, number] = [400, 3354];
// Question, what do the numbers mean to us?
// as developers it's not clear

// now lets write it as an object
const carStats = {
    horsepower: 400,
    weight: 3354
}

// See how much clearer it is?
