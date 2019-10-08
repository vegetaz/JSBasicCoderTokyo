/* Write a function that splits an array (first argument) into groups the length of size(second argument)
and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size) {
    var group = [];
    while (arr.length > 0) {
        group.push(arr.splice(0, size));
    }
    return group;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));

/**
 * Tham khảo:   https://medium.com/@ncoleman/freecodecamp-chunky-monkey-dbefa8fd9b82
 */