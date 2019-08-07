/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request)
 * để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 * 
 * Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link.
 * Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */

let fs = require('fs');

let request = require('request');

let url = 'https://randomuser.me/api/';

console.time('Time this');

for (var i = 0; i < 10000; i++) {
    request(url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}

console.timeEnd('Time this');