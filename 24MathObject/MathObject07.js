/**
 * Viết hàm trigonim để in ra 3 giá trị sin cos tan của một số nhập vào
 */

function trigonim(number) {
    console.log(`Sin(${number}) = ${Math.sin(number)}`);
    console.log(`Cos(${number}) = ${Math.cos(number)}`);
    console.log('Tan(' + number + ') = ' + Math.tan(number));
}

trigonim(45);