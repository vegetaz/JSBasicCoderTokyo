/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
let s = 1;
function multiply(arr) {
    for (let ar of arr) {
        s *= ar;
    }
    return s;
}

console.log(multiply([2, 3, 4])); // expect: 24