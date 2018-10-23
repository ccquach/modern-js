let re;

/**
 * Shorthand Character Classes
 */
re = /\w/; // word character - alphanumeric or _ (underscore)
re = /\w+/; // one or more
re = /\W/; // non-word characters
re = /\d/; // any digit
re = /\d+/;
re = /\D/; // non-digit
re = /\s/; // whitespace
re = /\S/; // non-whitespace
re = /Hell\b/i;

/**
 * Assertions (conditionals)
 */
re = /x(?=y)/; // Match x ONLY if followed by y
re = /x(?!y)/; // Match x ONLY if NOT followed by y

// String to match
const str = 'zexy';

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
