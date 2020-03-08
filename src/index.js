
exports.min = function min (array) {
  if(array && array.length)
  {
    var temp = array.sort(function(a, b){return a-b});
    return temp[0];
  }
  else return 0;
}

exports.max = function max (array) {
  if(array && array.length)
  {
    var temp = array.sort(function(a, b){return a-b});
    return temp[array.length - 1];
  }
  else return 0;
}

exports.avg = function avg (array) {
  if(array && array.length)
  {
    var temp = 0;
    for(var i = 0; i<array.length; i++)
      temp += array[i];
    return temp/array.length;
  }
  else return 0;
}
