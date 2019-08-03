/**
 * JSON object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
 * 1. stringify - Convert an object to a JSON string
 * 2. parse - Convert a JSON string to an object
 */

let myCat = {name: 'Sứt', age: 1.4, fat: true};

console.log(myCat);

let myCatString = JSON.stringify(myCat);

console.log(myCatString);

let myCat2String = '{"name": "Lem", "weight": 2.10, "fat": false}';

console.log(myCat2String);

let myCat2 = JSON.parse(myCat2String);

console.log(myCat2);

console.log(myCat2.name);