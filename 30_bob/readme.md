# Bob

## Input

A message from Bob's brother

var result = bob.hey('Today is Thursday.');

## Output

Bob's response

assert(result == 'Whatever.');

## Details

Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

# Instructions

Create a file with your initials in the solutions folder.

Update line 1 of test\test.js

`var Bob = require('../solutions/yourfile.js');`

To run the tests:

cd into this folder (30_bob)

Run the command `mocha`

Fix each of the errors in turn. When you get the first test to pass, remove the x from the next test, and make that pass as well. Rinse and Repeat.

Remember that passing code is just the first step. The goal is to work towards a solution that is as readable and expressive as you can make it. (Refactor, Refactor, Refactor)

Please make your solution as general as possible. Good code doesn't just pass the test suite, it works with any input that fits the specification.

[Source](http://exercism.io/exercises/javascript/bob/readme)

function bobResponse(message) {
  if (message[message.length -1] === '?') {
    return 'Sure.';
  } else if (message[message.length -1] === '!') {
    return 'Whoa, chill out!';
  } else if (message === '') {
    return 'Fine, be that way!'
  } else {
    return 'Whatever';
  }
}
