/**
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 */

function average(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }
    return Math.round(s / 3);
}

console.log('Điểm trung bình 3 môn đã làm tròn:', average([8, 8, 6.75]));