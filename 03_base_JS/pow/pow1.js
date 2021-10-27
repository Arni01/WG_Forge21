const pow = (base, exp) => {
  if (base === 1 || exp === 0) {
    return 1;
  }

  let result = base;
  let power = Math.abs(exp);

  while (power > 1) {
    --power;
    result *= base;
  }

  return exp < 0 ? 1 / result : result;
};

// console.log(Math.pow(-3, 3));
// console.log(pow(2, 2));
// console.log(pow(16, 4));
// console.log(pow(-3, 3));
// console.log(pow(2, 55));

module.exports = pow;
