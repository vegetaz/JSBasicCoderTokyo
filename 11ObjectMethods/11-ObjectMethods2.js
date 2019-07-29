/**
* Khai báo biến `rectangle` là 1 object gồm có các property:
* - width: chiều rộng, là 1 số bất kì
* - height: chiều cao, là 1 số bất kì
* Viết các method:
* - getWidth: trả về chiều rộng
* - getHeight: trả về chiều cao
* - getArea: trả về diện tích
*/
let rectangle = {
    width: 25,
    height: 89,
    getWidth: function () {
        return rectangle.width;
    },
    getHeight: function () {
        return rectangle.height;
    },
    getArea: function () {
        return (rectangle.height) * (rectangle.width);
    }
}
console.log('Chiều rộng hình chữ nhật:', rectangle.getWidth());
console.log('Chiều cao hình chữ nhật:', rectangle.getHeight());
console.log('Diện tích hình chữ nhật:', rectangle.getArea());