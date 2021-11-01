const partial = (func, ...argRoot) => {
  if (typeof func !== 'function') throw 'Not a function';

  return function curried(...arg) {
    if (arg.length + argRoot.length >= func.length) {
      return func.apply(null, [...argRoot, ...arg]);
    } else {
      return (...argPass) => {
        return curried.apply(null, [...arg, ...argPass]);
      };
    }
  };
};

// const volume = (x, y, z) => x * y * z;

// const vol10 = partial(volume, 10);

// console.log(vol10(5, 4));

// const vol10Base = partial(volume, 10, 10);
// console.log(vol10Base);
// console.log(vol10Base(10));

module.exports = partial;
