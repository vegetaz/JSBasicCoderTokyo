/**
 * Callback function có thể được hiểu nôm na là một function A được truyền vào một function B
 * thông qua danh sách các tham số của B. Lúc này tại hàm B sẽ gọi đến hàm A
 * để thực hiện một chức năng nào đó mà A đang nắm giữ.
 * Javascript là một ngôn ngữ lập trình hướng sự kiện và bất đồng bộ
 * nên callback function đóng vai trò rất quan trọng,
 * bạn sẽ truyền một callback function vào các sự kiện và xử lý bất đồng bộ đó. 
 */

 /**
  * Nói một cách dễ hiểu,
  * callback tức là ta truyền một đoạn code (Hàm A) này vào một đoạn code khác (Hàm B).
  * Tới một thời điểm nào đó, Hàm A sẽ được hàm B gọi lại (callback).
  * https://toidicodedao.com/2015/02/05/callback-trong-javascript/
  */

let coffeeMachine = {
    makeCoffee: function (onFinish) {
        console.log('Making Coffee...');
        onFinish();
    }
}

let beep = function () {
    console.log('Tít tít...');
}

coffeeMachine.makeCoffee(beep);

coffeeMachine.makeCoffee(function () {
    console.log('Bép bép...');
});

/**
 * Hiểu theo cách đơn giản: Callback là một function,
 * được thực thi sau khi một function khác thực thi xong (thường là bất đồng bộ),
 * nên nó có tên là call back (gọi lại)
 * 
 * Phức tạp hơn: Trong Javascript, functions là objects,
 * bởi vậy, một function có thể nhận tham số là function,
 * và cũng có thể trả về một function.
 * Bất cứ function nào được truyền vào như một tham số và được gọi sau đó được gọi callback function.
 * 
 * https://viblo.asia/p/back-to-basic-callback-trong-javascript-1Je5EM1y5nL
 */