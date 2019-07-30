let a = 10;

let x = --a + a++;
console.log(x);

/* Nhấn Run để chạy code.
Giải thích vì sao kết quả là 18.
--a sẽ trả về kết quả là a = 9, trả về giá trị sau khi thay đổi
++a sẽ trả về kết quả là a = 9, trả về giá trị trước khi thay đổi,
mà lúc này a = 9, nên giá trị trước khi thay đổi vẫn là 9. */