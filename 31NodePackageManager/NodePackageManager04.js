let readlineSync = require('readline-sync');

let languages = [];

let language = readlineSync.question('What is your mother language?');

languages.push(language);

console.log(languages); // In ra một mảng
console.log('Tiếng mẹ đẻ:', language);