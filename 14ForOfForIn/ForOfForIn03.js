/**
* Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau,
* in ra cả các key của các nested object (object con lồng bên trong object lớn)
* Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
*/

var apartment = {
    bedroom: {
        area: 20,
        bed: {
            type: 'twin-bed',
            price: 100
        }
    }
};

/**
 * Kết quả mong muốn:
 * bedroom
 * area
 * bed
 * type
 * price
 * Chú ý: không cần hiển thị ra đúng thứ tự như trên
 */

function apa(obj) {
    for (let o in obj) {
        console.log(o);
        for (let a in apartment[o]) {
            console.log(a);
            for (let ap in apartment[o][a]) {
                console.log(ap);
            }
        }
    }
}

apa(apartment);

console.log('Diễn giải:')

for (let x1 in apartment) {
    console.log(x1);
    for (let x2 in apartment[x1]) {
        console.log(x2);
        for (let x3 in apartment[x1][x2]) {
            console.log(x3);
        }
    }
}