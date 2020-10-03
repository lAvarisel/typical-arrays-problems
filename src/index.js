
exports.min = function min (array) {
  if (Array.isArray(array) === false || array.length === 0) {
    return 0;
  }
  let min = array[0];
  for (i = 1; i < array.length; ++i) {
      if (array[i] < min) min = array[i];
  }
  return min;
}

exports.max = function max (array) {
  if (Array.isArray(array) === false || array.length === 0) {
    return 0;
  }
  let max = array[0];
  for (i = 1; i < array.length; ++i) {
      if (array[i] > max) max = array[i];
  }
  return max;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) === false || array.length === 0) {
    return 0;
  }
  return array.reduce((a, b) => (a + b)) / array.length;
}
