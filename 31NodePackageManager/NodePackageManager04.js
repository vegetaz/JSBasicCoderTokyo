/**
 * npm install readline-sync --save
 * https://www.npmjs.com/package/readline-sync
 */

let readlineSync = require('readline-sync');

let languages = [];

let language = readlineSync.question('What is your mother language?');

languages.push(language);

console.log(languages); // In ra một mảng
console.log('Tiếng mẹ đẻ:', language);