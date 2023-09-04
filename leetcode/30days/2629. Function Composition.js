/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    const fn = (acc, f) => f(acc)
    return function (x) {

        return functions.reduceRight(fn, x)
    } // other solution


    return function (x) {
        for (const fn of functions.reverse()) {
            x = fn(x)
        }
        return x;
    } // solution 1
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// fn1 = x => x + 1
// fn2 = x => 2 * x

// fn(fn2(fn1(4)))
