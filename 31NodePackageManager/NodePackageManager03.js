/**
 * https://github.com/sindresorhus/awesome-nodejs
 * Đây là một trang tổng hợp nhiều node module rất hay (không phải là tất cả)
 * Hãy thử học cách dùng 1 module mà bạn hiểu, tạo 1 ví dụ và giải thích về nó.
 * Sau này bạn sẽ cần phải google rất nhiều, học cách đọc tài liệu sẽ giúp cho công việc của bạn trong tương lai.
 * https://github.com/mathiasbynens/he
 *      npm install he --save
 * Module này cung cấp phương thức để mã hoá và giải mã ký tự, thích hợp cho công việc làm web với các ngôn ngữ Latin hoặc CJK.
 */

let he = require('he');

let normalText = 'Sứt là con mèo béo!';

console.log('Encode Text:', he.encode(normalText));

let encodeText = 'S&#x1EE9;t l&#xE0; con m&#xE8;o b&#xE9;o!';

console.log('Normal Text:', he.decode(encodeText));