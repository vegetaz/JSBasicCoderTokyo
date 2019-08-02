/**
 * Count the occurrences of each element inside an array using reduce
 */

function countOccurrences(arr) {
    return arr.reduce(function (s1, s2) {
        if (s2 in s1) {
            s1[s2]++;
        } else {
            s1[s2] = 1;
        }
        return s1;
    }, {});
}

console.log(countOccurrences(['a', 'b', 'c', 'b', 'a'])); // {a: 2, b: 2, c: 1}