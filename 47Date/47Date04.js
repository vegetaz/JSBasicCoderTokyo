function diffMs(a, b) {
    var a, b;
    return Math.abs(a.setMilliseconds(a.getMinutes()) - b.setMilliseconds(b.getMinutes()));
}
// viết ví dụ để kiểm tra
var date1 = new Date('March 13, 08 04:20');
var date2 = new Date('March 14, 08 05:22');
console.log(diffMs(date1, date2));