var a = 1;

var b = {
    a: 2,
    foo: function() {
        console.log(this.a);
    }
};

b.foo();
// KQ = 2 vì đã gọi hàm foo() trong đối tượng b. Trong hàm foo() thì in ra giá trị có trong đối tượng b là thuộc tính a có giá trị là 2
var fooCopy = b.foo;
fooCopy();
// KQ =1 vì hàm này in ra giá trị của thuộc tính foo có trong object b, theo giá trị boolean thì sẽ có kết quả là 1
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13