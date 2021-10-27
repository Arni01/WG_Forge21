const getDegree = (base, exp) => {
  return exp === 1 ? base : base * getDegree(base, exp - 1);
};

const pow = (base, exp) => {
  if (base === 1 || exp === 0) {
    return 1;
  }

  let power = Math.abs(exp);

  return exp > 0 ? getDegree(base, power) : 1 / getDegree(base, power);
};


// console.log(Math.pow(-3, 3));
// console.log(pow(2, 2));
// console.log(pow(16, 4));
// console.log(pow(-3, 3));
// console.log(pow(2, 55));

module.exports = pow;
