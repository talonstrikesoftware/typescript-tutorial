// video 37 - Long Type Annotations
// the old way
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

const printVehicle = (vehicle:{name: string; year: number; broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
}

printVehicle(oldCivic);

// do it with an interface
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

interface Reportable {
    summary(): string;
}
const oldAccord = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const printVehicle2 = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
    console.log(vehicle.summary());
}
printVehicle2(oldCivic);
printVehicle2(oldAccord);

// video 41 - Code Reuse with Interfaces

const printSummary = (reportable: Reportable): void => {
    console.log(reportable.summary());
}


const drink2 = {
    color: 'brown',
    carbonated: true,
    suger: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}
printSummary(drink2);