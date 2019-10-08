/**
 * Viết hàm first trả về giá trị đầu tiên của mảng,
 * nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng).
 * Nếu n <= 0 thì trả về mảng trống.
 * Tham số:
 * - array: mảng gốc
 * - n: số phần tử trả về
 */
function first(array, n) {
    if (array.length <= 0 || n <= 0) {
        return [];
    } else if (n == undefined) {
        return array[0];
    } else if (n > array.length) {
        return array;
    }
    return array.slice(0, n);
}

console.log(first([7, 9, 0, -2]));