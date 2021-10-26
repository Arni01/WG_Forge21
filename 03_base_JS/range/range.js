// const getArray = (from = 0, to, step = 1) => {
//   let result = [];
//   step = step !== 0 ? step : 1;
//   // if (to > from) {
//   //   for (let i = from; i < to; i += step) {
//   //     result.push(i);
//   //   }
//   // } else {
//   console.log('dop');
//   for (let i = from; i > to; i -= Math.abs(step)) {
//     result.push(i);
//   }
//   // }
//   return result;
// };
// const range = (...arg) => {
//   switch (arg.length) {
//     case 1:
//       return getArray(undefined, arg[0]);
//     case 2:
//       return getArray(arg[0], arg[1]);
//     case 3:
//       return getArray(arg[0], arg[1], arg[2]);
//   }
// };

const range = (n, r, t) => {
  // if (n === r) return [n];
  // null == r && ((r = n || 0), (n = 0));
  // // (t = r < n ? -1 : 1);
  // // if (r < n) {
  // //   t = t ? -t : -1;
  // // } else {
  // //   t = t ? t : 1;
  // // }
  // for (
  //   var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0;
  //   i < e;
  //   i++, n += t
  // ) {
  //   u[i] = n;
  // }
  result = [];

  if (n > r) {
    for (let i = n; i > r; i -= t) {
      result.push(i);
    }
  }

  return result;
};

// console.log(range(10, 0, 2));

// console.log(range(10, -2, 2));
// console.log(range(10, 0, 1.1));
// console.log(range(1, 3, 0));
// console.log(range(3, 1, 2));
// console.log(range(-1, -11, -2));
// console.log(range2(-1, -11, -2));
// console.log(-11 > -1);

module.exports = range;
