/**
 * 1. Viết hàm double nhận vào 1 số bất kì, hiển thị ra số đó nhân đôi
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function.
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó,
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 */

function double(num) {
    return num * 2;
}

function sumAndDo(nums, callback) {
    let s = 0;
    for (let i = 0; i < nums.length; i++) {
        s = s + nums[i];
    }
    return callback(s);
}

console.log('Kết quả:', sumAndDo([1, 2, 3], double));