/**
 * npm init
 * https://github.com/tj/co
 * npm install co --save
 */
var fs = require('fs');
var co = require('co');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, {encoding: 'utf8'}, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// *: generator function

co(function*() {
    var values = yield [
        readFilePromise('./song1.txt'),
        readFilePromise('./song2.txt'),
        readFilePromise('./song3.txt')
    ];
    return values;
}).then(function(values) {
    console.log(values);
}).catch(function(error) {
    console.log(error);
});