/*
Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi thành ký tự theo sau nó trong bảng chữ cái.
Ví dụ: "Hello" chuyển thành "Ifmmp"
Tham số:
- String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        var newCharCode = charCode + 1;
        var newChar = String.fromCharCode(newCharCode);
        result = result + newChar;
    }
    return result;
}

console.log(toNextChar('abc'));