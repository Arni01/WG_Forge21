const curry = (func) => {
  if (typeof func !== 'function') throw 'Not a function';
  return function curried(...arg) {
    if (arg.length >= func.length) {
      return func.apply(this, arg);
    } else {
      return (...argPass) => {
        return curried.apply(this, [...arg, ...argPass]);
      };
    }
  };
};

// const point = (x, y, z) => [x, y, z];

// const curried = curry(point);

// console.log(curried(1)(2)(3));
// console.log(curried(1, 2)(3));
// console.log(curried(1, 2, 3));
// console.log(curried(1, 3));

module.exports = curry;
