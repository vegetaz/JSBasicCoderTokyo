let myCat = [
    {name: 'Sứt', age: 28},
    {name: 'Vàng', age: 26},
    {name: 'Lem', age: 32}
];

let Sut = {
    name: 'Sứt',
    age: 1.3,
    weight: 5
}

for (let cat of myCat) {
    console.log(cat.name, cat.age);
}

for (let key in myCat) {
    console.log(key, myCat[key]);
}

for (let key in Sut) {
    console.log(key, Sut[key]);
}