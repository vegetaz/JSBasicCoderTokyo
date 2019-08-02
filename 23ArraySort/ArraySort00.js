/**
array.sort(function (a, b) {}); 
If sort function return:
    a value < 0:
        a will come before b
    a value > 0:
        a will come after b
    0:
        a and b stay unchanged
 */

/**
 * Phương thức sort() sẽ sắp xếp các phần tử của mảng ngay tại chỗ (in place) và trả về mảng đó.
 * Kết quả sắp xếp có thể không ổn định (stable). Cách sắp xếp mặc định là theo Unicode code point của chuỗi.
 * Độ phức tạp về thời gian và không gian của thuật toán sắp xếp sẽ tùy vào cách hiện thực.
 */

let numbers = [2, 9, 3, 4, 1];

let ascendingNumbers = numbers.sort(function (a, b) {
    return a - b;
});

console.log('Sắp xếp từ nhỏ tới lớn:', ascendingNumbers);

let decendingNumbers = numbers.sort(function (a, b) {
    return b - a;
});

console.log('Sắp xếp từ lớn về nhỏ:', decendingNumbers);

let myCat = [
    { name: 'Linh', age: 26 },
    { name: 'Lem', age: 0.4 },
    { name: 'Sứt', age: 1.3 }
];

let sxmc = myCat.sort(function (e1, e2) {
    return e1.age - e2.age;
});

console.log(sxmc);