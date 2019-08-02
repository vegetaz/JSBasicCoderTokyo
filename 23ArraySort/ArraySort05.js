/**
 * Sort the objects in the array by age
 */

function byAge(arr) {
    return arr.sort(function (e1, e2) {
        return e1.age - e2.age;
    });
}

let sbyAge = byAge([
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]);

console.log('Kết quả:', sbyAge);