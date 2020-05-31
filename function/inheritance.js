class Vehicle {
    constructor() {
        this.type = 'car';
    }
    
    start() {
        return `Starting: ${this.type}`;
    }
}

class Car extends Vehicle {
    constructor() {
        super();
    }

    start() {
        return 'in car start' + super.start();
    }
}


let car = new Car();
console.log(car.type);
console.log(car.start());