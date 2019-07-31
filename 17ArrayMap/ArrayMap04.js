/**
 * Make an array of the names in <h1></h1>, and the ages in <h2></h2>
 */

function readyToPutInTheDOM(arr) {
    return arr.map(function (x) {
        return '<h1>' + x.name + '</h1><h2>' + x.age + '</h2>';
    })
}

let r = readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]);

console.log(r);