/**
 * 1. Use the reduce() method to make this result: '<Tom><Bill><Kim>'
 * 2. Use the map() and join() medthod to solve the problem
 */
let items = ['Tom', 'Bill', 'Kim'];

let j = items.reduce(function (s1, s2) {
    return s1 + '><' + s2;
}, '');

console.log(j + '>');

let m = items.map(function (x) {
    return x + '><';
});
console.log(m);