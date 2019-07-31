/**
 * Given an array of arrays, flatten them in to a single array
 */

function flatten(arr) {
    return arr.reduce(function (a1, a2) {
        return a1.concat(a2);
    }, []);
}

let arrays = [
    ["1", "2", "3"],
    [true, false],
    [4, 5, 6]
];

console.log(flatten(arrays));