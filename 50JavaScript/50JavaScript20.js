/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr) {
    let maxDiff = -1;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > min && maxDiff < Math.abs(arr[i] - min)) {
            maxDiff = Math.abs(arr[i] - min);
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return maxDiff;
}

console.log(findmaxDiff([13, 2, 3, 8, 9]));