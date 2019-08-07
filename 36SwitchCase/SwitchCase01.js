/**
 * Lệnh switch case có công dụng giống như lệnh if else đó là đều dùng để rẻ nhánh chương trình, 
 * ứng với mỗi nhánh sẽ có một điều kiện cụ thể và điều kiện đó phải sử dụng toán tử so sánh bằng, 
 * còn đối với lệnh if else thì bạn có thể truyền vào một mệnh đề bất kì và sử dụng nhiều toán tử khác nhau.
 */
let memberCard = {
	tier: 'platium'
};

function getTotal(price, card) {
	let discountRate;
	switch (card.tier) {
		case 'bronze':
			discountRate = 0.02;
			break;
		case 'silver':
			discountRate = 0.05;
			break;
		case 'gold':
			discountRate = 0.08;
			break;
		default:
			discountRate = 0.1;
			break;
	}
	return price * (1 - discountRate);
}

let total = getTotal(500000, memberCard);
console.log(total);

/**
 * Nếu như trong tất cả các case không có  case nào phù hợp thì nó sẽ chạy lệnh ở default, 
 * ngược lại nếu có case nào phù hợp thì chương trình sẽ chạy trong case đó, 
 * đồng thời lệnh break sẽ giúp chương trình thoát khỏi lệnh switch, 
 * còn nếu bạn không thêm lệnh break thì chương trình sẽ tiếp tục kiểm tra và chạy tiếp ở case tiếp theo.
 */