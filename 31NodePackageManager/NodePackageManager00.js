/**
 * npm init
 * npm install readline-sync --save
 * https://www.npmjs.com/package/readline-sync
 */

let readlineSync = require('readline-sync');

let userName = readlineSync.question('May I have your name? ');

console.log('Hi ' + userName + '!');