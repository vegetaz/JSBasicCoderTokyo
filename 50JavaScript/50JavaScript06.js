/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
function findMaxDiff(arr) {
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return 0;
    } else {
        var max = Math.abs(arr[1] - arr[0]);
        for (var i = 1; i < arr.length; i++)
            if (Math.abs(arr[i + 1] - arr[i]) > max)
                max = Math.abs(arr[i + 1] - arr[i]);
        return max;
    }
}

console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));