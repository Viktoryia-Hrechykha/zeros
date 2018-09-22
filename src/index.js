module.exports = function getZerosCount(number) {
  var count = 0;
  var rest = number;
  var i = 1;

  while (rest > 1) {
    rest = number / Math.pow(5,i);
    count += Math.floor(rest);
    i += 1;
  }

  return count;

}
