/**
 * Promise là một cơ chế trong JavaScript giúp bạn thực thi các tác vụ bất đồng bộ
 * mà không rơi vào callback hell hay pyramid of doom,
 * là tình trạng các hàm callback lồng vào nhau ở quá nhiều tầng.
 * https://techtalk.vn/tat-tan-tat-ve-promise-va-async-await.html
 */

let fs = require('fs');

function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf8', function (error, data) {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

/**
 * https://kipalog.com/posts/Promise-la-khi-gi-
 */

readFilePromise('song1.txt')
    .then(function (song1) {
        console.log(song1);
    })
    .catch(function (err) {
        console.log(err);
    });

/**
 * https://viblo.asia/p/javascript-code-bat-dong-bo-de-dang-hon-voi-promise-XL6lAAp4lek
 * https://viblo.asia/p/gioi-thieu-ve-promise-trong-javascript-mrDGMJVPezL
 */