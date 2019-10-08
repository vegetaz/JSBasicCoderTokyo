/**
 * Viết hàm nhận vào 2 số a, b
 * Trả về số gần 100 nhất
 * nearestTo100(89, 180)
 * Output:  89
 */
function nearestTo100(a, b) {
    if (a != b) {
        a1 = Math.abs(a - 100);
        b1 = Math.abs(b - 100);

        if (a1 < b1) {
            return a;
        }
        if (b1 < a1) {
            return b;
        }
        return 0;
    } else
        return a;
}

console.log(nearestTo100(99, 99));