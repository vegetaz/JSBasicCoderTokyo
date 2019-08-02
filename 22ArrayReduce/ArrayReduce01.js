/**
 * Given an array of arrays, flatten them into a single array
 */

function flatten(arr) {
    return arr.reduce(function (a, b) {
      return a.concat(b);
    },[]);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];