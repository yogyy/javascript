/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let called = false;
  return function (...args) {
    if (called) {
      return undefined;
    }
    called = true;
    return fn(...args);
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// const person = {
//   name: "constantine",
// };

// function printName(greeting) {
//   console.log(`${greeting} ${this.name}`);
// }

// printName();
// printName.apply(person, ["hai"]); // <== second params must be array
