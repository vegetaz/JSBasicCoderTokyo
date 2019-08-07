/**
 * Synchronous: Đồng bộ
 */

let fs = require('fs');

console.log('Bắt đầu');

let song1 = fs.readFileSync('song1.txt', 'utf8');

console.log(song1);

let song2 = fs.readFileSync('song2.txt', 'utf8');

console.log(song2);

console.log('Kết thúc!');