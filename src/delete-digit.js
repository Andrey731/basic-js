const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let mas = n.toString().split('');
  n = n.toString().split('');
  let minFirst = Math.min.apply(null, n);
  for (let i = 0; i < mas.length; i++) {
    if (mas[i] == minFirst) {
      mas.splice(i, 1);
    }
  }
  let first = mas.join('');
  let minSecond = Math.min.apply(null, mas);
  for (let i = 0; i < n.length; i++) {
    if (n[i] == minSecond) {
      n.splice(i, 1);
    }
  }
  let second = n.join('');
  return Math.max(+first, +second);
}

console.log(deleteDigit(152));

module.exports = {
  deleteDigit
};