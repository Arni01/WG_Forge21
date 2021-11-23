function* range(...args) {
  let [from, to, step] = args;

  if (from === to || (from < to && to < step)) {
    yield from;
    return;
  }
  if (!step) {
    step = from > to ? -1 : 1;
  }

  if (to == null) {
    if (from < 0) return;
    to = from || 0;
    from = 0;
  }
  let length = Math.max(Math.ceil((to - from) / step), 0);

  for (let i = 0; i < length; i++, from += step) {
    yield from;
  }
}

// for (let i of range(5, 0, null)) {
//   console.log(i);
// }

module.exports = range;
