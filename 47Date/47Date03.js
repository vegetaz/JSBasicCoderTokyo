/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ cách ngày được truyền vào n ngày
 */

function getFormattedDate() {
    // MM/DD/YYYY
    var date = new Date();
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    console.log(month + '/' + day + '/' + year);
}

getFormattedDate();

// function subtractDays(date, n) {
//     // var d = new Date(date);
//     // var n;
//     // var curr_date = d.getDate();
//     // var curr_month = d.getMonth() + 1;
//     // var curr_year = d.getYear();
//     // console.log(curr_year);
//     // console.log(curr_date + "/" + curr_month + "/" + curr_year);
//     // return new Date(date.getDate() + n + '/' + date.getMonth() + '/' + date.getFullYear());

//     var toDay = new Date();
//     var milisecond = +toDay - (n * 24 * 60 * 60 * 1000);
//     var date = Date(milisecond);
//     console.log(date);
// }

// subtractDays('06/10/2019', 5);
var date = new Date("06/10/2019")

// function subtractDays(n) {
//     var n;
//     var curr_date = date.getDate();
//     var curr_month = date.getMonth() + 1 - n;
//     var curr_year = date.getYear();
//     console.log('0' + curr_month + "/" + curr_date + "/" + (curr_year + 1900));
// }

// subtractDays(5);