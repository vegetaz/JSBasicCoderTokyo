/*  sử dụng vòng lặp for...of viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
    Tham số:
	- array: mảng cần kiểm tra
	- value: giá trị cần kiểm tra xem có tồn tại trong array không
    Return:
	- true nếu có tồn tại
	- false nếu không tồn tại */
function has(array, value) {
    for (let i = 0; i <= array.length; i++) {
        return array[i] == value;
    }
}
console.log(has([1, 2, 3], 4));