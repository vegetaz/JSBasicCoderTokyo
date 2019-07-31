/**
 * Phương thức find() trả về giá trị của phần tử đầu tiên trong mảng thoả mãn hàm kiểm tra được cung cấp.
 * Nếu không, giá trị undefined được trả về.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

let array1 = [5, 12, 8, 130, 44];

let found = array1.find(function (element) {
    return element > 10;
});

console.log(found);