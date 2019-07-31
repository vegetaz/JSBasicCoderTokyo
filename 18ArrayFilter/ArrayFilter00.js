let numbers = [1, 2, 3, 4];

let eventNumbers = numbers.filter(function (x) {
    return x % 2 === 0;
});

console.log(eventNumbers);