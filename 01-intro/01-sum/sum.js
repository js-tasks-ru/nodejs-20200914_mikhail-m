function sum(a, b) {
  if (isNaN(parseFloat(a) && parseFloat(b))) {
    throw new TypeError('Ошибка', 'index.js', 3);}
  else {
    return a + b;
}
}

module.exports = sum;

