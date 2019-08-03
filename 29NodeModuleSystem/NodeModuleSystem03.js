/**
 * 1. Thêm method `sum` cho module `math`, nhận vào 1 array các số, trả về tổng các số
 * 2. Require module math và sử dụng method sum để tính tổng 1 array các số bất kì
 * 3. Log kết quả
 */

let math = require('./math');

console.log('Kết quả:', math.sum([1, 2, 3]));