# 7 Segment Display

## Input

A positive integer [0, ∞)

## Output

The 7-segment display of the number as a string.

## Examples

### 1

```js
sevenSegment(1);
```

```txt

  |
  |
```

### 87

```js
sevenSegment(87);
```

```txt
 _   _
|_|   |
|_|   |
```

## Hint

* [JavaScript String newline character?](http://stackoverflow.com/questions/1155678/javascript-string-newline-character)

function segmentDisplay(integer) {
  digitArr = integer.toString.split('');
  console.log(line(digitArr, topLine) + '\n' + line(digitArr, middleLine) + '\n' + line(digitArr, bottomLine));
}

function line(digitArr, lineFunc) {
  result = '';
  digitArr.forEach(function(digit) {
    result += lineFunc(digit);
    result += ' ';
  })
  return result;
}

function topLine(digit) {
  if (digit === '0' ||
      digit === '2' ||
      digit === '3' ||
      digit === '5' ||
      digit === '6' ||
      digit === '7' ||
      digit === '8' ||
      digit === '9') {
    return '_';
  } else {
    return ' ';
  }
}

function middleLine(digit) {
  if (digit === '0') {
    return '| |'
  } else if (digit === '1' || digit === '7') {
    return ' |'
  } else if (digit === '2' || digit === '3') {
    return '_|'
  } else if (digit === '4' || digit === '8' || digit === '9') {
    return '|_|'
  } else {
    return '|_'
  }
}

function bottomLine(digit) {
  if (digit === '0' ||
      digit === '6' ||
      digit === '8') {
    return '|_|'
  } else if (digit === '1' ||
             digit === '4' ||
             digit === '7' ||
             digit === '9') {
    return ' |'
  } else if (digit === '2') {
    return '|_'
  } else {
    return '_|'
  }
}
