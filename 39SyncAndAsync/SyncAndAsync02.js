/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

let fs = require('fs');
let axios = require('axios');

// ES2015 style import
// import axios from 'axios';

let url1 = 'https://jsonplaceholder.typicode.com/todos/1';
let url2 = 'https://jsonplaceholder.typicode.com/todos/2';

function getData() {
    let data1 = axios.get(url1).then(function(response) {
        console.log(response);
    }).catch(function (err) {
        console.log(err);
    });
    let data2 = axios.get(url2).then(function(response) {
        console.log(response);
    }).catch(function (err) {
        console.log(err);
    });
    return data1, data2;
}

getData();