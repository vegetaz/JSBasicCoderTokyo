/**
 * Tạo một đối tượng student có thông tin như sau:
 *   Tên: Herry,
 *   Giới tính: Nam,
 *   Tuổi: 18
 * Viết hàm showInfo để in ra các thông tin của đối tượng đó.
 */

let student = {
  name: 'Herry',
  sex: 'Nam',
  age: 18
}

function showInfo(obj) {
  console.log('Tên:', student.name);
  console.log('Giới tính:', student.sex);
  console.log('Tuổi:', student.age);
}

showInfo(); // In ra tất cả thông tin của đối tượng