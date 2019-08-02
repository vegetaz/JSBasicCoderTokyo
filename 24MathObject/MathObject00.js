
function discArea(r) {
    return r * r * Math.PI;
}

let s = discArea(5);
console.log(s);

console.log(Math.ceil(9.2)); // Làm tròn lên
console.log(Math.floor(9.5)); // Làm tròn xuống
console.log(Math.round(9.6)); // Làm tròn tới giá trị gần nhất
console.log(Math.round(9.3)); // Làm tròn tới giá trị gần nhất
console.log(Math.max(10, 20, 25, -25)); // Tìm giá trị lớn nhất
console.log(Math.min(10, 20, 25, -25)); // Tìm giá trị nhỏ nhất
console.log('Ngẫu nhiên:', Math.random()); // Ngẫu nhiên các số từ 0 tới 1

function tossACoin() {
    let rd = Math.random();
    return rd > 0.5;
}

console.log('Mặt ngửa:', tossACoin());

function rollADice() {
    // 1 2 3 4 5 6
    let rad = Math.floor(Math.random() * 6) + 1;
    // let rad = Math.round(Math.random() * 6) + 1;
    return rad;
}

console.log('Mặt số:', rollADice());