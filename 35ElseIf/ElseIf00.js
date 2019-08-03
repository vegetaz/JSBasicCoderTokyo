/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * if (condition1) {
 *      statement1;
 * } else if (condition2) {
 *      statement2;
 * } else {
 *      statement3;
 * }
 */

function getTicketFee(person) {
    const basePrice = 10000;
    if (person.age <= 15) {
        return basePrice * 0.8;
    } else if (person.age >= 60) {
        return basePrice * 0.9;
    } else {
        return basePrice;
    }
}

let nguoi = {
    age: 60
};

let fee = getTicketFee(nguoi);

console.log(fee);