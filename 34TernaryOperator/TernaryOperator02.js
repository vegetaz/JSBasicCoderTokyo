/**
 * Sử dụng ternary operator thay thế cho if else sao cho đoạn code sau không thay đổi logic
 */

function doSomething(a) {
  var b;
  if (a > 0) {
    b = 1;
  } else if (a < 0) {
    b = 2;
  } else {
    b = 3;
  }
  return b;
}

function doSomethingTernary(a) {
  var c = (a > 0) ? 1
    : (a < 0) ? 2 : 3;
  console.log(c);
}

doSomethingTernary(-1);

doSomething(-1);

// Test 2 hàm trên với cùng đầu vào

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * Conditional chains
 * The ternary operator is right-associative, which means it can be "chained" in the following way,
 * similar to an if … else if … else if … else chain:
 * function example(…) {
  return condition1 ? value1
       : condition2 ? value2
       : condition3 ? value3
       : value4;
}

// Equivalent to:

function example(…) {
  if (condition1) { return value1; }
  else if (condition2) { return value2; }
  else if (condition3) { return value3; }
  else { return value4; }
}
 */