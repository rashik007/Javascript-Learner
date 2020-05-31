function startCar(carId) {
    let message = 'starting';
    let startFn = function turnKey()
    {
        let message = 'override';
    }
    startFn();
    console.log(message);
}

startCar(123);
// console.log(message)


// if(5 == 5 ) {
//     let message1 = 'equal';
//     console.log(message1);
// }


// (function() {
//     let carId1 = 123;
//     console.log(carId1);
//     return{};
// })();


// //closure with IIFE pattern
// let app = (function(){
//     let carId2 = 123;
//     let getId2 = function() {
//         return carId2;
//     };
//     return {
//         getId2: getId2
//     };
// })();

// console.log(app.getId2());

//call and apply
let o = {
    carId: 123,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};

let newCar = {carId: 456};
console.log(o.getId.apply(newCar, ['ID: ']));


//bind
