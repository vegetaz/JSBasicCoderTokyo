/**
 * The new operator lets developers create an instance of a user-defined object type or of one of 
 * the built-in object types that has a constructor function.The new keyword does the following things:
 * 1. Creates a blank, plain JavaScript object;
 * 2. Links (sets the constructor of) this object to another object;
 * 3. Passes the newly created object from Step 1 as the this context;
 * 4. Returns this if the function doesn't return its own object.
 */

//`new` keyword
var today = new Date();
console.log(today);

//Create a new object, object literal
let cat = {
    weight: 5.0,
    getWeight: function () {
        return this.weight;
    }
};

console.log('Cân nặng của con moè là: ', cat.getWeight());

//constructor function
function Cat(name, color) {
    this.name = name;
    this.type = 'cat';
    this.color = color;
}

let cat1 = new Cat('Sứt', 'xám');
let cat2 = { type: 'cat' };
let cat3 = new Cat('Lem', 'đen');

console.log(cat1);
console.log(cat2);
console.log(cat3);

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);