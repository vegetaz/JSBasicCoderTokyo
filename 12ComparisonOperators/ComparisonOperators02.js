let a = {
    foo: 'bar'
};

let b = {
    foo: 'bar'
};

console.log(a === b);
/**
 * Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau.
 * Viết câu trả lời ở dưới đây:
 * a và b là 2 đối tượng khác nhau,
 * được đặt ở các ô nhớ khác nhau nên khi so sánh === sẽ trả về kết quả là false,
 * mặc dù 2 đối tượng này có cùng giá trị
 */