/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
function diff(fromDate, toDate) {
    var diff = new Date(toDate).setHours(12) - new Date(fromDate).setHours(12);
    return Math.round(diff / 8.64e7);
}

var start = new Date('2018/05/17');
var end = new Date();

console.log(diff(start, end));