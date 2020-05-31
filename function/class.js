class Car {
    constructor(id) {
        this.id = id;
    }

    identify(suffix) {
        return `car Id: ${this.id} ${suffix}`;
    }
}
let car = new Car(132);

console.log(car.identify('!!!'));