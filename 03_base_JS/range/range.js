const range = (from, to, step) => {
  let result = [];

  if (from === to || (from < to && to < step)) return [from];
  if (!step) {
    step = from > to ? -1 : 1;
  }

  if (to == null) {
    if (from < 0) return [];
    to = from || 0;
    from = 0;
  }
  let length = Math.max(Math.ceil((to - from) / step), 0);
  // if (!length && length !== 0) throw 'А для чего это ошибка ообще нужна?';
  let test = Array(length);

  for (let i = 0; i < length; i++) {
    result.push(from);
    from += step;
  }

  return result;
};

// const range2 = (n, r, t) => {
//   if (n === r || (n < r && r < t)) return [n];
//   if (r == null && n < 0) return [];
//   // if (n < r && r < t) return [n];
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

// let a = [, ,];
// console.log(range(...a));
// console.log(range2(...a));

module.exports = range;
