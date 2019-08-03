function countBills(bills) {
	let total = 0;
	for (let bill of bills) {
		if (!bill.fake) {
			total = total + bill.value;
		} else {
			console.log('Fake bill!', bill);
			break; // Dừng chương trình khi gặp câu lệnh này!
		}
	}
	return total;
}

let bills = [
	{value: 10000},
	{value: 20000},
	{value: 50000},
	{value: 100000},
	{value: 200000},
	{value: 200000, fake: true},
	{value: 500000}
];

let s = countBills(bills);
console.log(s);