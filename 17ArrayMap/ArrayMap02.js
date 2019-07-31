/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Sử dụng map method và hàm tripple để nhân 3 các phần tử trong mảng dưới đây
 */

let tripple = function (number) {
    return number * 3;
}

var numbers = [10, 5, 8];

let numbers3 = numbers.map(tripple);

console.log(numbers3);