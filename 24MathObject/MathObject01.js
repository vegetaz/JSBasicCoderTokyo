/**
 * Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
 */

function powerup(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] *= arr[i];
        }
    }
    return arr;
}

console.log('Kết quả:', powerup([0, 3, 6, 7, 4]));