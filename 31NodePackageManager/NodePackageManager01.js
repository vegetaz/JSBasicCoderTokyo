/**
 * 1. Check file package.json bạn sẽ thấy module password-generator nằm trong danh sách dependencies
 * 2. Đọc cách dùng module này dưới đây
 *      https://www.npmjs.com/package/password-generator
 *      npm i password-generator --save
 * 3. Tìm hiểu cách require một 3rd-party module trên repl.it: https://repl.it/site/blog/npm
 * 4. Require module này và tạo ra 1 password ngẫu nhiên có 8 ký tự, dạng dễ nhớ
 */

let passwordGenerator = require('password-generator');

console.log('Mật khẩu ngẫu nhiên:', passwordGenerator(8, true));