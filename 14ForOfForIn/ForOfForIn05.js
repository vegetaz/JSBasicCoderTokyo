/**
 * Viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 * - object: object cần kiểm tra
 * - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 * - true nếu có tồn tại
 * - false nếu không tồn tại
 */
function has(object, key) {
    for (let k of key) {
        for (let o in object) {
            if (o == k) {
                return true;
            }
            return false;
        }
    }
}

console.log('Kết quả:', has({a: 5}, 'a'));
console.log('Kết quả:', has({a: 'something'}, 'b'));
console.log('Kết quả:', has({a: true }, 'a'));
console.log('Kết quả:', has({a: undefined }, 'a'));
console.log('Kết quả:', has({a: null }, 'a'));