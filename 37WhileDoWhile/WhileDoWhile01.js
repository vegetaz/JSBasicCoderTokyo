/**
 * Câu lệnh do ... while tạo ra một vòng lặp thực thi một câu lệnh được chỉ định
 * cho đến khi điều kiện kiểm tra đánh giá thành false.
 * Điều kiện được đánh giá sau khi thực hiện câu lệnh, dẫn đến câu lệnh được chỉ định thực thi ít nhất một lần.
 */

let i = 1;

do {
    console.log(i);
    ++i;
} while (i <= 10)