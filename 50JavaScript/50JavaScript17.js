/**
 * Write a function return maximum possible sum of some of its k consecutive numbers
 * (numbers that follow each other in order.) of a given array of positive integers
 */
function maxOfSumChain(arr, k) {
    var result = 0;
    var sum = 0;
    for (var i = 0; i < k - 1; i++) {
        sum += arr[i];
    }
    for (var i = k - 1; i < arr.length; i++) {
        sum += arr[i];
        if (sum > result) {
            result = sum;
        }
        sum -= arr[i - k + 1];
    }
    return result;
}

console.log(maxOfSumChain([1, 3, 2], 2));