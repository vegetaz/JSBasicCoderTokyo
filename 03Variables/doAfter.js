/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
*/
function doAfter(fn, ms) {
  setTimeout(fn, ms);
}

function doSomething() {
  console.log('Xin chào!');
}

console.log('2 giây sau:...');
doAfter(doSomething, 2000);