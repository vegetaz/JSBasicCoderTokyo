/**
 * Prototype
 * Create a new object, object literal
 */

let mouse = {
    weight: 0.2,
    getWeight: function () {
        return this.weight;
    }
};

function Mouse(color, weight) { // Constructor function
    this.type = 'Chuột';
    this.color = color;
    this.weight = weight;
}

Mouse.prototype.sleep = function () {
    console.log('Sleeping...');
}

let jerry = new Mouse('orange', 20);
jerry.sleep();

let mickey = new Mouse('white', 10);
mickey.sleep();