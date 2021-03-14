
exports.min = function min(array) {
  if ((!Array.isArray(array)) || (array.length == 0)) {
    return 0;
  }

  let aMin = array[0];
  array.forEach(element => {
      if (aMin > element) {
          aMin = element;
      }
  });

  return aMin;
}

exports.max = function max (array) {
  if ((!Array.isArray(array)) || (array.length == 0)) {
    return 0;
  }

  let aMax = array[0];
  array.forEach(element => {
      if (aMax < element) {
          aMax = element;
      }
  });

  return aMax;
}

exports.avg = function avg(array) {
  if ((!Array.isArray(array)) || (array.length == 0)) {
    return 0;
  }

    let aSum = 0;
    array.forEach(element => {
        aSum += element;
    });

    aSum = aSum / array.length;


  return aSum.toFixed(2);
}