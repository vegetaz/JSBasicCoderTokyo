/**
* Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
*/

var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
];

/**
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần.
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */

 /**
  * Phương thức slice() trả về một bản sao tham chiếu (shallow copy) một phần của một mảng 
  * dưới dạng một mảng nhận các giá trị có chỉ số từ begin đến end (không bao gồm end). 
  * Mảng ban đầu không bị thay đổi.
  */

function getTopStudents(students) {
    return students.sort(function (e1, e2) {
        return e2.score - e1.score;
    }).slice(0, 3);
}

/**
 * Chạy thử hàm
 */

getTopStudents(students);