/**
 * Node Module
 * Constructor Function
 */

// import Cat from './cat'; // ES6
let Cat = require('./cat');

// import Mouse from './mouse'; // ES6 
let Mouse = require('./mouse');

let mickey = new Mouse('Đen');
let jerry = new Mouse('Cam');

console.log(mickey);
console.log(jerry);

let sut = new Cat();
console.log(sut);

sut.eat(mickey);
sut.eat(jerry);

console.log(sut);