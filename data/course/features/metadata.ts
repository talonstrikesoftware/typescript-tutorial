import "reflect-metadata";

const plane = {
    color: "red"
}

Reflect.defineMetadata("note", 'hi there', plane);
Reflect.defineMetadata("height", 10, plane);

console.log(plane);

const note = Reflect.getMetadata("note", plane);
const height = Reflect.getMetadata("height", plane);

console.log(note);
console.log(height);

// Attaching metadata to a property
Reflect.defineMetadata("note", 'hi there2', plane, 'color');
const note1 = Reflect.getMetadata("note", plane, 'color');
console.log(note1); // hi there2

@printMetadata
class Plane {
    color: string = 'red';

//    @markFunction // look at fly method and define metadata called 'secret' with value of 123
    @markFunction('HI THERE') // look at fly method and define metadata called 'secret' with value of 123
    fly(): void {
        console.log('vrrrrr');
    }
}

// function markFunction(target: Plane, key: string) {
//     Reflect.defineMetadata('secret', 123, target, key);

// }

// as a decorator function
function markFunction(secretInfo: string) {
    return function(target: Plane, key: string) {
        Reflect.defineMetadata('secret', secretInfo, target, key);
    }

}

// class decorator - target needs to be the constructor function
// 'typeof Plane' is a reference to the constructor function of Plane
function printMetadata(target: typeof Plane) {
    for (let key in target.prototype) {
        // get metadata off of each property of target
        Reflect.getMetadata('secret', target.prototype, key);
    }
}


const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
