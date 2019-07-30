/* Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau.
Viết câu trả lời ở dưới đây. */

let a = [1, 2];
let b = [1, 2];
console.log(a === b);

/* Dấu === có nghĩa là bằng chính xác. 
Trả về true nếu các toán hạng bằng nhau và cùng kiểu. 
Ở đây a và b không xác định được kiểu dữ liệu là gì nên kết quả trả về là false */