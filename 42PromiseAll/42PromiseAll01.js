/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

let axios = require('axios');
let URL1 = "https://jsonplaceholder.typicode.com/todos/1";
let URL2 = "https://jsonplaceholder.typicode.com/todos/2";
let URL3 = "https://jsonplaceholder.typicode.com/todos/3";

const promise1 = axios.get(URL1);
const promise2 = axios.get(URL2);
const promise3 = axios.get(URL3);

Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});