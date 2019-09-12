const test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
  return a + b;
}

test('sum should return the addition of two numbers', function (t) {
  result = sum(1, 2);
  expected = 3;
  t.equal(expected, result, 'The parameters should be added');
  t.end();
});
