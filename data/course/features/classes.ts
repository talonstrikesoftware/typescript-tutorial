// video 43 - Classes

class Vehicle {

    protected honk(): void {
        console.log("honk honk");
    }

    constructor(public color: string) { // assign color as instance variable!!
    }
}

const vehicle = new Vehicle('orange');
// vehicle.drive();
// vehicle.honk();

// video 44 - Basic Inheritance

class Car2 extends Vehicle {
    private drive(): void {
        console.log("vroom");
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
    constructor(public wheels: number, color: string) {
        super(color);
    }
}

const myNewCar = new Car2(4, "red");
myNewCar.startDrivingProcess();

// video 45 - Fields in Classes