/**
 * Asynchronous: Bất đồng bộ
 */

let fs = require('fs');

console.log('Bắt đầu');

let song1 = fs.readFile('song1.txt', 'utf8', function(err, data) {
    console.log(data);
});

let song2 = fs.readFile('./song2.txt', 'utf8', function(err, song2) {
    console.log(song2);
});

console.log('Kết thúc!');