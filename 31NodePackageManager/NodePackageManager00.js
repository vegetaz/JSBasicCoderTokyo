let readlineSync = require('readline-sync');

let userName = readlineSync.question('May I have your name? ');

console.log('Hi ' + userName + '!');