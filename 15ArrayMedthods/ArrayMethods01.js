/**
 * Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
 */
function removeEnd(arr, n) {
    l = arr.length;
    for (let i = (l + n); i > l; i--) {
        arr.pop();
        arr;
    }
    return arr;
}
console.log(removeEnd([2, 3, 1, 8, 9, 7], 3));