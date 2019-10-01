var i = 0;
var intervalId = setInterval(function() {
    ++i;
    console.log(i);
    if (i === 10) {
        clearInterval(intervalId);
    }
}, 1000);