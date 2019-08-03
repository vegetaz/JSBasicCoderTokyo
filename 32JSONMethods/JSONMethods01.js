/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */

let fs = require('fs');

let text = fs.readFileSync('./data.json', {encoding: 'utf8'});

let texto = JSON.parse(text);

console.log(texto.name);

let membersString = '"members" = {"name": "Vận", "gender": "male", "age": 30}';

//let members = JSON.parse(membersString);
fs.writeFileSync('./data.json', membersString);