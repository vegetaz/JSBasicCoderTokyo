/**
 * Write a JavaScript function to get the first element of an array.
 * Passing a parameter 'n' will return the first 'n' elements of the array.
 */

 function first(arr, n) {
    let l = arr.length;
    let i = l + n;
    for (i; i > (l + 1); i--) {
        arr.pop();
        arr;
    }
    return arr;
 }

 console.log(first([1, 2, 3], 2));