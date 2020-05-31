let car = {
    id: 123,
    style: 'convertible'
};

let carIds = [
    { carId: 123 },
    { carId: 125 },
    { carId: 173 }
]

console.log( JSON.stringify(car));

console.log( JSON.stringify(carIds));


let jsonIn = `
    [
        {"carId": 123},
        {"carId": 143},
        {"carId": 153}
    ]
`;
let carIdss = JSON.parse(jsonIn);
console.log( carIdss );
console.log( JSON.stringify(carIdss) );