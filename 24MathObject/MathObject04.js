/**
 * Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100
 */

function random() {
    let rad = Math.floor(Math.random() * 100) + 1;
    return rad;
}

console.log('Ngẫu nhiên từ 1 tới 100:', random()); // The number between 1 and 100