let fs = require('fs');

fs.readFile('./song1.txt', 'utf8', function (err1, song1) {
    console.log(song1);
    fs.readFile('./song2.txt', 'utf8', function (err2, song2) {
        console.log(song2);
        fs.readFile('./song3.txt', 'utf8', function (err3, song3) {
            console.log(song3);
        })
    });
});

/**
 * Promise
 */