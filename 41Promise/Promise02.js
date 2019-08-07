let pfs = require('promise-fs');

function onDone(song) {
    console.log(song);
}

function onError(error) {
    console.log(error);
}

function readFile(path) {
    return pfs.readFile(path, 'utf8');
}

readFile('song3.txt')
    .then(onDone)
    .then(function () {
        return readFile('song2.txt');
    })
    .then(onDone)
    .catch(onError);