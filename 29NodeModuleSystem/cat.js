function Cat() {
    this.stomach = [];
}

Cat.prototype.eat = function (mouse) {
    this.stomach.push(mouse);
    mouse.dead = true;
}

// export default Cat; // ES6 
module.exports = Cat;