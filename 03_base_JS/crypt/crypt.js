const Crypt = {
  _checkKey(key) {
    if (
      typeof key === 'string' &&
      key.length === 10 &&
      key.match(/[0-9A-Za-z]{10}/g) &&
      new Set(key).size === 10
    ) {
      return true;
      // key.split('').forEach((el, i) => {
      //   if (i !== key.indexOf(el)) throw 'Invalid Key';
      // });
    } else {
      throw 'Invalid Key';
    }
  },
  // _checkCode(code) {
  //   String(code)
  //     .split('')
  //     .forEach((el) => {
  //       if (Number(el) || Number(el) === 0) return true;
  //       throw 'Invalid Code';
  //     });
  // },
  // _checkSecret(secret) {
  //   if (
  //     (typeof secret === 'string' || typeof secret === 'number') &&
  //     !String(secret).match(/[^0-9^A-Z^a-z]/g)
  //   ) {
  //     return true;
  //   }
  //   throw 'Invalid Secret';
  // },
  encode(code, key) {
    this._checkKey(key);
    // this._checkCode(code);

    return String(code)
      .split('')
      .map((el) => key[el])
      .join('');
  },
  decode(secret, key) {
    this._checkKey(key);
    // this._checkSecret(secret);

    return String(secret)
      .split('')
      .map((el) => {
        el = key.indexOf(el);
        if (el < 0) throw 'Invalid Key';
        return el;
      })
      .join('');
  },
};

// const key = 'OMGJSR0CKZ';
// const code = '31337';

// let secret = Crypt.encode(code, key);
// console.log(secret);
// console.log(Crypt.decode(secret, key));

module.exports = Crypt;
