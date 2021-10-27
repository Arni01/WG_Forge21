const getArray = (from = 0, to, step) => {
  let result = [];
  step = step ? step : 1;
  if (to > from) {
    if (step < 1) return [];
    for (let i = from; i < to; i += step) {
      result.push(i);
    }
  } else {
    for (let i = from; i > to; i -= Math.abs(step)) {
      result.push(i);
    }
  }
  return result;
};
const range = (...arg) => {
  switch (arg.length) {
    case 1:
      if (arg[0] < 0) return [];
      return getArray(undefined, arg[0]);
    case 2:
      if (arg[0] === arg[1]) return [arg[0]];
      return getArray(arg[0], arg[1]);
    case 3:
      if(arg[0] < arg[1] && arg[1] < arg[2]) return [arg[0]]
      return getArray(arg[0], arg[1], arg[2]);
    default:
      return [undefined];
  }
};

// const range = (n, r, t) => {
//   if (n === r || (n < r && r < t)) return [n];
//   //  if (n < r && r < t) return [n];
//   if (r == null && n < 0) return [];
//   null == r && ((r = n || 0), (n = 0)), t || (t = r < n ? -1 : 1);
//   for (
//     var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0;
//     i < e;
//     i++, n += t
//   ) {
//     u[i] = n;
//   }
//   return u;
// };
// console.log(range(7, 8));
// console.log(range(-5));
// console.log(range2(-5));

// console.log(range(10, -2, 2));
// console.log(range(1, 2, 3));
// console.log(range2(1, 2, 3));
// console.log(range());
// console.log(range(3, 1, 2));
// console.log(range(-1, 11));

module.exports = range;
