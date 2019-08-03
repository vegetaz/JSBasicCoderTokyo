function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
};

Circle.prototype.isOverlapped = function (hinh2) {
  let d = Math.sqrt(Math.pow((this.x - hinh2.x), 2) + Math.pow((this.y - hinh2.y), 2));
  if (d > (this.r + hinh2.r)) {
    return 1;
  } else if (d == (this.r + hinh2.r)) {
    return 0;
  } else if (d < (this.r + hinh2.r)) {
    return -1;
  }
}

module.exports = Circle;