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

module.exports = range;
