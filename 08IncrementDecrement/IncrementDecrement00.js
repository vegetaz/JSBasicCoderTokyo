let a = 5;
let t = a++ + ++a - --a + a--;
// 5 + ++a - --a + a-- // 6
// 5 +   7 - --a + a-- // 7
// 5 +   7 -   6 + a-- // 6
// 5 +   7 -   6 + 6   // 5
console.log(t);

let c = 5;
let d = 10;
let s = c++ * d-- + --c * ++d;
//      5   * d-- + --c * ++d   // c 5, d 10
//      5   * 10  + --c * ++d   // c 6, d 10
//      5   * 10  +   5 *  10   // c 5, d 10
console.log(s);