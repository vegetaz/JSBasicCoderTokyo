/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
    var arr2 = str2.split('');
    var sorted2 = arr2.sort();
    var str3 = sorted2.join('');
    //
    var arr3 = str1.split('');
    var sorted1 = arr3.sort();
    var str4 = sorted1.join('');
    if (str4 === str3) {
        return true;
    } else {
        return false;
    }
}

console.log(rearrangeChar('abx', 'abb'));