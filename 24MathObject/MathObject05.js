/**
 * Viết hàm rightTriangle để kiểm tra 3 cạnh của một tam giác và cho biết đó có phải là tam giác vuông hay không? 
 * Nếu có thì in ra "Yes"
 * Không thì in ra "No"
 */

function rightTriangle(a, b, c) {
    if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == b * b + a * a)) {
        return 'Yes';
    }
    return 'No';
}

console.log(rightTriangle(3, 4, 5)); // "Yes"
console.log(rightTriangle(1, 2, 3)); // "No"