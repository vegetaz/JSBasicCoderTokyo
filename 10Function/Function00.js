/**
 * Define a function
 * function doSomething(input1, input2, ..., inputn) {
 *      // write someThing here
 *      return something;
 * }
 * Keyword: function, return
 * Function name: doSomething
 * Parameter names: input1, input2, inputn
 */
function calculateTringleSquare(a, h) {
    return a * h / 2;
}
console.log('Diện tích tam giác:', calculateTringleSquare(10, 5));

function calculateDiscSquare(r) {
    return r * r * Math.PI;
}
console.log('Diện tích hình tròn:', calculateDiscSquare(10));

function chuViHinhVuong(a) {
    return a * 4;
}
console.log('Chu vi hình vuông:', chuViHinhVuong(5));

function dienTichHinhVuong(a) {
    return a * a;
}
console.log('Diện tích hình vuông:', dienTichHinhVuong(5));

function chuViTamGiacThuong(a, b, c) {
    return a + b + c;
}
console.log('Chu vi tam giác thường:', chuViTamGiacThuong(4, 5, 6));

function chuViTamGiacVuong(a, b, h) {
    return a + b + h;
}
console.log('Chu vi tam giác vuông:', chuViTamGiacVuong(6, 5, 4));

function chuViHinhChuNhat(a, b) {
    return (a + b) * 2;
}
console.log('Chu vi hình chữ nhật:', chuViHinhChuNhat(2, 5));

function dienTichHinhChuNhat(a, b) {
    return a * b;
}
console.log('Diện tích hình chữ nhật:', dienTichHinhChuNhat(2, 5));

function chuViHinhTron(r) {
    //https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Pi-unrolled-720.gif/250px-Pi-unrolled-720.gif
    return r * 2 * Math.PI;
}
console.log('Chu vi hình tròn:', chuViHinhTron(7));