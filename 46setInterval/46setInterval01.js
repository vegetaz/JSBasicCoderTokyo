/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
    var i = x + 1;
    var intervalId = setInterval(function() {
        --i;
        console.log(i);
        if (i === 0) {
            console.log('Happy new year');
            clearInterval(intervalId);
        }
    }, 1000);
}

countDown(5);