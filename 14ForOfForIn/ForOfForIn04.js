/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu:
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 *  */

function sum(numbers) {
    let s = 0;
    for (let i of numbers) {
        s = s + i;
    }
    return s;
}

let numbers = [1, 2, 3];

console.log('Tổng các số:', sum(numbers));