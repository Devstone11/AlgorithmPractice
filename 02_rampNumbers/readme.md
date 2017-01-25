# Ramp Numbers
A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.

## Input
A positive integer, n.

## Output
true if the input is a ramp number, false if it is not

function ramp(number) {
  var isRamp = true;
  var str = number.toString();
  for (var i = 0; i < str.length - 2; i++) {
    if (str[i].parseInt() > str[i + 1].parseInt()) {
      isRamp = false;
      break;
    }
  }
  return isRamp;
}
