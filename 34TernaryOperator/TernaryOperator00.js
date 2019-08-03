/**
 * Ternary Operator - Biểu thức điều kiện
 * Một hình thức khác của If...Else
 * Syntax:
 *      condition ? expression when true : expression when false
 */

function tossCoin() {
    let value = Math.random();
    let result = (value < 0.5) ? 'Mặt sấp!' : 'Mặt ngửa!';
    console.log(result);
}

tossCoin();