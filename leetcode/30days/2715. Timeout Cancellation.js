/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

var cancellable = function (fn, args, t) {
  //   const timeOut = setTimeout(() => {
  //     return fn(...args);
  //   }, t);

  //   return function () {
  //     clearTimeout(timeOut);
  //   }; solution 1

  let isCancel = false;
  setTimeout(() => {
    if (!isCancel) {
      fn(...args);
    }
  }, t);
  return function () {
    isCancel = true;
  };
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */

// example how to use the function

// Define a function to be executed after a delay
function delayedFunction(arg1, arg2) {
  console.log(`Executing with arguments: ${arg1} and ${arg2}`);
}

// Create a cancellable function that will execute delayedFunction after 2000 milliseconds
const cancelExecution = cancellable(delayedFunction, ["arg1", "arg2"], 2000);

// To cancel the execution before the 2000ms delay:
cancelExecution(); // This will prevent delayedFunction from being executed.
