/**

arr.reduce(function (item1, item2) {
    //
    return x;
}, init);

Method name: reduce

 */
let numbers = [1, 2, 3, 4];

let sum = numbers.reduce(function (a, b) {
    console.log(a, b);
    return a + b;
}, 0);

console.log('Kết quả:', sum);

let products = [
    {name: 'A', quantity: 2, unitPrice: 10},
    {name: 'B', quantity: 3, unitPrice: 20},
    {name: 'C', quantity: 4, unitPrice: 30}
];

let total = products.reduce(function (currentTotal, product) {
    return currentTotal + product.quantity * product.unitPrice;
}, 0);

console.log('Tổng giá:', total);