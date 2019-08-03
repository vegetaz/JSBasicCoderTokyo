/* 
  viết hàm updateObj để xóa thuộc tính rollno khỏi đối tượng student và in ra kết quả
*/

let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

function updateObj() {
  delete student.rollno;
  return student;
}

console.log(updateObj());
/*
  var student = {
    name : "David Rayy",
    sclass : "VI",
  };
*/