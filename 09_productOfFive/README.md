## Product of Five

Given a number like 127289373913828309127381263, find the product of the 5 adjacent numbers whose product is largest.  So in a simple case of 111333321, your function should return 162 from 3*3*3*3*2.

The answer for 127289373913828309127381263 is 3024.

function product(number) {
  var split = number.split('');
  var result = 0;
  for (var i = 0; i < split.length-4 ; i++) {
    if (split[i]+ split[i + 1] + split[i + 2] + split[i + 3] + split[i + 4] > result) {
      result = split[i]+ split[i + 1] + split[i + 2] + split[i + 3] + split[i + 4];
    }
  }
  return result;
}
