/**
 * Câu lệnh if thực thi một câu lệnh nếu một điều kiện xác định là đúng.
 * Nếu điều kiện là sai, một câu lệnh khác có thể được thực thi.
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Statements/if...else
 */

function tossCoin() {
	let value = Math.random();
	if (value < 0.5) {
		console.log('Mặt Sấp!');
	} else {
		console.log('Mặt Ngửa!');
	}
}

tossCoin();

function testNum(a) {
	if (a > 0) {
		return "positive";
	} else {
		return "NOT positive";
	}
}

console.log(testNum(-5));