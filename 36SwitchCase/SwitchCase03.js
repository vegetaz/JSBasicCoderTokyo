/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 * Còn lại -> 0
 */

function transform(arr) {
    let map = arr.map(function (arr) {
        switch (arr) {
            case 'A':
            case 'a':
                return 1;
                break;
            case 'B':
            case 'b':
                return 2;
                break;
            default:
                return 0;
                break;
        }
    })
    console.log(map);
}

transform(['A', 'b', 'a', 'B', 'd']);
// [1, 2, 1, 2, 0]