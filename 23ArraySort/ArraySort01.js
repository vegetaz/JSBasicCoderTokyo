/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự từ nhỏ đến lớn (ascending order)
 */

function sortNumbers(arr) {
    return arr.sort(function (e1, e2) {
        return e1 - e2;
    });
}

console.log(sortNumbers([5, 1, 3, 2]));