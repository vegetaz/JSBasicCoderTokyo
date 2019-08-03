/**
 * Phương thức filter() dùng để tạo một mảng mới với tất cả các phần tử thỏa điều kiện của một hàm test.
 */

let numbers = [1, 2, 3, 4];

let eventNumbers = numbers.filter(function (x) {
    return x % 2 === 0;
});

console.log(eventNumbers);

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);