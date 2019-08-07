let pfs = require('promise-fs');

pfs.readFile('song2.txt', 'utf8')
    .then(function (song2) {
        console.log(song2);
    })
    .catch(function (err) {
        console.log(err);
    });