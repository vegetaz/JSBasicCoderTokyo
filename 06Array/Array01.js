/**
 * Cách sử dụng Array và Object khác nhau như thế nào. Viết câu trả lời ở phía dưới.
 */
/**
 * Array sử dụng để lưu trữ, khai báo danh sách các đối tượng có thuộc tính nào đó giống nhau, hoặc lưu trữ các mảng
 * Object sử dụng để lưu, khai báo trữ các thuộc tính của đối tượng
 */
let cat1 = {
    name: 'Sứt',
    age: 1.3
};

let cat2 = {
    name: 'Vàng',
    age: 1.1
};

let cat3 = {
    name: 'Lem',
    age: 0.45
};

let myCat = [cat1, cat2, cat3];

function showMyCat(arr) {
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i].name, arr[i].age);
    }
}

showMyCat(myCat);
