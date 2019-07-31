let coffeeMachine = {
    makeCoffee: function (onFinish) {
        console.log('Making Coffee...');
        onFinish();
    }
}

let beep = function () {
    console.log('Tít tít...');
}

coffeeMachine.makeCoffee(beep);

coffeeMachine.makeCoffee(function () {
    console.log('Bép bép...');
});