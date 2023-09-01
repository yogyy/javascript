/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

/**
 * const counter = createaCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
