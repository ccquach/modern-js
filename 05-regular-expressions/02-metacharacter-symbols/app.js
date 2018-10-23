let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; // starts with
re = /world$/i; // ends with
re = /^hello$/i; // starts and ends with 'hello'
re = /h.llo/i; // matches any ONE character (can NOT be empty)
re = /h*llo/i; // matches any character 0 or more times
re = /gre?a?y/i; // optional character (CAN be empty)
re = /gre?a?y\?/i; // escape character

// String to match
const str = 'grey?';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
