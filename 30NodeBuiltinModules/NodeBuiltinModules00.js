let fs = require('fs');

let text = fs.readFileSync('./song.txt', {encoding: 'utf8'});

console.log(text);

fs.writeFileSync('./sut.txt', 'Sứt là con mèo đực bị Thiến!');