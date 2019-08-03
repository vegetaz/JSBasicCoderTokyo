/**
 * npm install readline-sync --save
 * https://www.npmjs.com/package/readline-sync
 */

let readLineSync = require('readline-sync');

let pet = {};

let name = readLineSync.question('What your pet name? ');

let age = readLineSync.questionFloat('Pet year old? ');

let legs = readLineSync.questionInt('What pet legs? ');

let weight = readLineSync.question('Cân nặng: ');

pet.name = name;
pet.age = age;
pet.legs = legs;
pet.weight = parseFloat(weight);

console.log(pet);