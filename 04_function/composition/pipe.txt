const pipe = (arrFunc) => {
  return (x) => arrFunc.reduce((acc, current) => current(acc), x);
};

// const add = (y) => (x) => x + y;
// const mul = (y) => (x) => x * y;
// const sub = (y) => (x) => x - y;
// const div = (y) => (x) => x / y;

// let x = 10;
// let solve = pipe([mul(2), mul(3)]);
// console.log(solve(10));

// const solve2 = pipe([add(100), mul(3), div(4), sub(1)]);

// console.log(solve2(0));

module.exports = pipe;
