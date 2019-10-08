// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a, b, c) {
    // viết code ở đây.
    if (a > b && b > c) {
        return a;
    } else if (b > c && b > a) {
        return b;
    } else {
        return c;
    }
}