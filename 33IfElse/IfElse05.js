/**
 * Viết hàm xếp hạng theo điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
  if (0 <= score && score < 5) {
    console.log('C');
  } else if (5 <= score && score < 7) {
    console.log('B');
  } else if (7 <= score && score <= 10) {
    console.log('A');
  } else {
  }
}

console.log(grade(4)); // C
console.log(grade(5)); // B