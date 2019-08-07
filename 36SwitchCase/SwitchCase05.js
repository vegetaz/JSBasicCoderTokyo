let season = 'Thu';

let month = 8;

switch (season) {
    case 'Xuân':
        switch (month) {
            case 1:
                console.log('Mùa Xuân - Tháng 1');
                break;
            case 2:
                console.log('Mùa Xuân - Tháng 2');
                break;
            case 3:
                console.log('Mùa Xuân - Tháng 3');
                break;
            default:
                console.log('Mùa ' + season + ' không có tháng' + month);
                break;
        }
        break;
    case 'Hạ':
        switch (month) {
            case 4:
                console.log('Mùa Hạ - Tháng 4');
                break;
            case 5:
                console.log('Mùa Hạ - Tháng 5');
                break;
            case 6:
                console.log('Mùa Hạ - Tháng 6');
                break;
            default:
                console.log('Mùa ' + season + ' không có tháng' + month);
                break;
        }
        break;
    case 'Thu':
        switch (month) {
            case 7:
                console.log('Mùa Thu - Tháng 7');
                break;
            case 8:
                console.log('Mùa Thu - Tháng 8');
                break;
            case 9:
                console.log('Mùa Thu - Tháng 9');
                break;
            default:
                console.log('Mùa ' + season + ' không có tháng' + month);
                break;
        }
        break;
    case 'Đông':
        switch (month) {
            case 10:
                console.log('Mùa Đông - Tháng 10');
                break;
            case 11:
                console.log('Mùa Đông - Tháng 11');
                break;
            case 12:
                console.log('Mùa Đông - Tháng 12');
                break;
            default:
                console.log('Mùa ' + season + ' không có tháng' + month);
                break;
        }
        break;
    default:
        console.log('KHÔNG XÁC ĐỊNH');
        break;
}