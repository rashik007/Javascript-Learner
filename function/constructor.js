function Car(id) {
    console.log(this);

    this.carId = id;
    this.start = function() {
        console.log('start: ' + this.carId);
    };
}
let vehicle = new Car(123);
vehicle.start();