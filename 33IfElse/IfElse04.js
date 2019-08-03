/**
 * Viết hàm isTruthy nhận vào 1 giá trị, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 * https://kipalog.com/posts/truthy-va-falsy-value-trong-Javascript---lam-sao-cho-de-nho
 * https://www.youtube.com/watch?v=OJrr2Dw1_KQ
 */

function isTruthy(x) {
  if (x) {
    console.log('This is truthy value!');
  } else {
    console.log('This is falsy value!')
  }
}

console.log(isTruthy(true));
console.log(isTruthy('0'));
console.log(isTruthy([]));
console.log(isTruthy(1));