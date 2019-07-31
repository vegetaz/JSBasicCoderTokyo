/**
 * Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
 * Nếu không tìm thấy số chẵn nào thì trả về undefined
 */

function findFirstEvenNumber(array) {
    return array.find(function (obj) {
        return obj % 2 === 0;
    });
}

console.log(findFirstEvenNumber([7, 9, 0, -2]));
console.log(findFirstEvenNumber([7, 9, 3]));