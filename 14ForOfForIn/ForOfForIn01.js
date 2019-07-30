/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 */

/**
 * for ... of sử dụng để duyệt qua giá trị (value) của object hoặc array
 * for ... in sử dụng để duyệt qua key của object hoặc array 
 */

let myCat = {
    name: 'Sứt',
    age: 1.3,
    weight: 5
}

for (let key in myCat) {
    console.log(key);
}