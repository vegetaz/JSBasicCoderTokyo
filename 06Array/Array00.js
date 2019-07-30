/**
 * 
 */
let dog1 = {
    type: 'Chó ta'
};

let dog2 = {
    type: 'Lạp xưởng'
};

let dog3 = {
    name: 'Ngáo',
    type: 'Husky'
};

let bunchOfDogs = [dog1, dog2, dog3];

console.log(bunchOfDogs);
console.log(bunchOfDogs[2].name);

let dog4 = {
    type: 'Shiba'
};

bunchOfDogs[3] = dog4;

console.log(bunchOfDogs);