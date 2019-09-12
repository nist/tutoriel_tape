const test = require('tape')

function sum (a, b) {
  return a + b
}

test('sum should return the addition of two numbers', function (t) {
  var result = sum(1, 2)
  var expected = 3
  t.equal(expected, result, 'The parameters should be added')
  t.end()
})
