/**
 * Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
 */

function total(arr) {
    return arr.reduce((a, c) => {
        //console.log(a, c);
        return a + (c.quantity * c.unitPrice);
    }, 0);
}

let orders = [
    { name: 'A', quantity: 2, unitPrice: 100 },
    { name: 'B', quantity: 1, unitPrice: 400 },
    { name: 'C', quantity: 5, unitPrice: 15 }
];

console.log(total(orders)); // 200 + 400 + 75 = 675