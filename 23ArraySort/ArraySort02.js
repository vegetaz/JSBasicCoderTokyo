/**
* Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự từ lớn đến nhỏ
*/

function sortNumbers(arr) {
    return arr.sort(function (e1, e2) {
        return e2 - e1;
    });
}

console.log(sortNumbers([5, 1, 3, 2]));