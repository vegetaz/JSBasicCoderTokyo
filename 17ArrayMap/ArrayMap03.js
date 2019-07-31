/**
 * Make an array of strings of the names
 */

function namesOnly(arr) {
    return arr.map(function (x) {
        return x.name;
    });
}

let n = namesOnly([
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
])

console.log(n);