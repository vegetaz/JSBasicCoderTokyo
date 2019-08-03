function Mouse(color) {
    this.color = color;
    this.dead = false;
}

Mouse.prototype.die = function () {
    this.dead = true;
}

// export default Mouse; // ES6 
module.exports = Mouse;