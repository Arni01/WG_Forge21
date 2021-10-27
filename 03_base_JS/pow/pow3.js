const pow = (base, exp) => {
  if (exp === 0) return 1;
  if (exp % 2 == 1) return pow(base, exp - 1) * base;
  else {
    let b = pow(base, exp / 2);
    return b * b;
  }
};
// console.log(Math.pow(-3, 3));
// console.log(pow(2, 2));
// console.log(pow(16, 4));
// console.log(pow(-3, 3));
// console.log(pow(2, 55));

module.exports = pow;
