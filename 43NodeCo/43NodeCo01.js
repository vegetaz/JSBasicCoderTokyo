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

var readFiles = co.wrap(function*(files) {
    //[String]  ->  [Promise]
    var values = yield files.map(function(files) {
        return readFilePromise(files);
    });
    return values;
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
.then(function() {
    console.log(values);
});