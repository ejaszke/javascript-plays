const cars =
    [
        {'company': 'ford', 'model': 'focus', 'price': 200},
        {'company': 'audi', 'model': 'a8', 'price': 100},
        {'company': 'vw', 'model': 'golf', 'price': 50},
    ];



const models = cars.map(car => car.model);
console.log(models);

const sum = cars.reduce((sum, car) => sum + car.price, 0);

// let sum = 0;
// for (let i=0; i< cars.length; i++) {
//
//     sum += cars[i].price;
// }

console.log(sum);
