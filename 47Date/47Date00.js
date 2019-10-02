var now = new Date();
var myBirthday = new Date('1989, 10, 25');
/**
 * Number of milliseconds from 1-1-1970
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Date
 */
console.log(now.getTime());
console.log(myBirthday.getTime());

console.log(myBirthday.getDate());
console.log(myBirthday.getMonth() + 1);
console.log(myBirthday.getYear());

var moment = require('moment');
var nows = moment();
console.log(nows);

var now2 = moment('2016-08-05 20:00');
console.log(now2.fromNow());

console.log(now2.format('YYYY/MM/DD'));