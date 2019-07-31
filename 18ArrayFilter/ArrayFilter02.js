/**
 * Given an array of numbers, return a new array that only includes the even numbers.
 * (số chẵn)
 */

function evensOnly(arr) {
    return arr.filter(function (x) {
        return x % 2 == 0;
    });
}

console.log(evensOnly([3, 6, 8, 2]));
console.log(evensOnly([1, 5, 5]));