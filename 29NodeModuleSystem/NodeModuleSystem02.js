/**
 * 1. Thêm method multiply vào module `math` nhận vào 2 số bất kì, trả về tích 2 số
 * 2. Require module math và tính tích 2 số bất kì dùng method multiply đã tạo ở trên
 * 3. Log ra kết quả
 */

let math = require('./math');

console.log('Kết quả:', math.multiply(2, 5));