let rectangles = [
    { width: 10, heigh: 5 },
    { width: 10, heigh: 20 },
    { width: 4, heigh: 16 }
];

let area = rectangles.map(function (x) {
    return x.width * x.heigh;
});

console.log(area);