let trafficLight = 'green';

function goOrNotInVietnam(lightValue) {
	switch (lightValue) {
		case 'green':
		case 'orange':
			console.log('Đi đi!');
			break;
		default:
			console.log('Dừng lại!');
			break;
	}
}

goOrNotInVietnam(trafficLight);