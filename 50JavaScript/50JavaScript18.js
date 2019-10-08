/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.
Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất
Ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]
*/

function findMostFrequent(arr) {
    var countArr = [];

    // Do dai cua mang moi bang phan tu lon nhat cua mang cu
    var lengthCountArr = Math.max.apply(Math, arr);

    // khoi tao mang countArr = 0
    for (var i = 0; i <= lengthCountArr; i++) {

        countArr[i] = 0;
    }

    // tang count trong mang moi dua vao index
    for (var i = 0; i < arr.length; i++) {

        countArr[arr[i]]++;
    }

    var max = Math.max.apply(Math, countArr);

    var result = [];
    for (var i = 0; i < lengthCountArr; i++) {

        if (countArr[i] === max)
            result.push(i);
    }

    return result;
}

console.log(findMostFrequent([1, 2, 3, 4, 1, 2, 2, 1]));