/**
 * Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
 * Yêu cầu sử dụng Math Object
 * Hàm Math.abs() trả về giá trị tuyệt đối của một số
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 */

function positiveNumber(arr) {
    return arr.map(function (ele) {
        return Math.abs(ele);
    });
}

console.log('Giá trị tuyệt đối:', positiveNumber([-2, 3, -4, -7, 10])); // [ 2, 3, 4, 7, 10 ]