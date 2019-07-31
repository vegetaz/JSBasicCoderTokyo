/**
 * Đọc và dịch các method đã học từ MDN:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */

 /**
  * concat() Phương thức này dùng để nối/ghép 2 hoặc nhiều mảng lại với nhau 
  * và không làm thay đổi giá trị của mảng hiện tại, sẽ sinh ra mảng mới từ những mảng đã có
  */
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let array3 = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(array3);

/**
 * push() Thêm vào một hoặc nhiều phần tử vào vị trí cuối cùng của mảng.
 * Trả về giá trị độ dài của mảng mới
 */
let pets = ['Linh', 'Lem', 'Ngáo'];
console.log(pets.push('Ngào', 'Điên')); // độ dài của mảng sau khi thêm 2 phần tử
console.log(pets);

/**
 * pop() Xoá bỏ phần tử cuối cùng khỏi mảng và trả về phần tử đó.
 * Phương thức này làm thay đổi giá trị của mảng
 */
let cats = ['Sứt', 'Lem', 'Bưởi'];
let buoi = console.log(cats.pop()); // Bưởi
console.log(cats);

/**
 * shift() Xoá bỏ phần tử đầu tiên của mảng và trả về phần tử đó.
 * Phương thức này làm thay đổi giá trị của mảng
 */
let sens = ['Linh', 'Kiên', 'Yến'];
let linh = console.log(sens.shift());
console.log(sens);

/**
 * unshift() Chèn một hoặc nhiều phần tử vào vị trí đầu tiên của mảng.
 * Trả về giá trị độ dài mới của mảng
 */
let pcs = ['HP', 'DELL'];
console.log(pcs.unshift('ASUS', 'ACER')); // 4
console.log(pcs); // giá trị của mảng đã thay đổi