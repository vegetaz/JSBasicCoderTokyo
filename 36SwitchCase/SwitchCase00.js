let memberCard = {
	tier: 'silver'
};

function getTotal(price, card) {
	let discountRate;
	if (card.tier === 'bronze') {
		discountRate = 0.02;
	} else if (card.tier === 'silver') {
		discountRate = 0.05;
	} else if (card.rate === 'gold') {
		discountRate = 0.08
	} else {
		discountRate = 0.1;
	}
	return price * (1 - discountRate);
}

let total = getTotal(500000, memberCard);

console.log(total);