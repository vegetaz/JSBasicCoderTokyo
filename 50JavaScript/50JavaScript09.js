/**
 * Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
 * Lưu ý cho chuỗi 'abcd' :
 *  	element    'a'|'b'|'c'|'d'
 * 		index 	    0 | 1 |	2 |	3
 *      n = 1 ------------------- 'acd'
 *      n = 2 ------------------- 'abd'
 */

function omitCharAt(str, n) {
    // Cách 1: Chậm: Phải chuyển chuỗi đó thành mảng, rồi lại xóa, rồi lại nối lại với nhau
    let tmp = str.split('');
    tmp.splice(n, 1);
    return tmp.join('');
    // Cách 2: Nhanh: Lấy substring chỉ là xử lý một chiều, trích xuất một đoạn của chuỗi str
    // return str.substr(0, n) + str.substr(n + 1);
}

console.log(omitCharAt('abcd', 2));