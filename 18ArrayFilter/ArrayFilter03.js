/**
 * Given a list of students, filter out the famale ones
 */

function filterOutFemales(members) {
    return members.filter(function (x) {
        return (x.gender !== 'female');
    });
}

let members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];

console.log(filterOutFemales(members));