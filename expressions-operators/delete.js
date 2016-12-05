let simpleArray = [1, 2, 3, 4];
delete simpleArray[0];
delete simpleArray[3];

console.log(simpleArray); // [ , 2, 3, ]
console.log(0 in simpleArray); //false
