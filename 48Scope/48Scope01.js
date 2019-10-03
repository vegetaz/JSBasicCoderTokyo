var a = 1;

function foo() {
    var a = 2;
    return a;
}

function bar() {
    a = 2;
    return a;
}

foo();
console.log(a); // Kết quả? a = 1 vì hàm foo khai báo a = 2 là biến local, còn ở đây console.log là in ra giá trị global
bar();
console.log(a); // Kết quả? a = 2 vì hàm bar đã gán 2 cho giá trị a
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh