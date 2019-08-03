/**
 * Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
 */

function doSomething(a) {
  let b;
  if (a > 0) {
    b = 1;
  } else if (a < 0) {
    b = 2;
  } else {
    b = 3;
  }
  return b;
}

function doSomethingTernary(a) {
  let c = (a > 0) ? 1 : (a < 0) ? 2 : 3;
  console.log(c);
}

// Test 2 hàm trên với cùng đầu vào

console.log('Kết quả:', doSomething(-1));

console.log('Kết quả:', doSomething(-1));