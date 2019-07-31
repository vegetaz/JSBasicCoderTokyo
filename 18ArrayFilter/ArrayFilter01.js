/**
 * Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
 */

function fiveAndGreaterOnly(arr) {
    return arr.filter(function (x) {
        return x >= 5;
    });
}

console.log(fiveAndGreaterOnly([1, 2, 3, 4, 5, 6, 7, 8, 9]));