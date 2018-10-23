let re;

re = /gre?a?y/i; // optional character (CAN be empty)
re = /gre?a?y\?/i; // escape character

/**
 * Square Brackets []
 *  Character sets
 */
re = /gr[ae]y/i; // can NOT be empty; must be a char in set
re = /[GF]ray/i;
re = /[^GF]ray/i; // Exclusive: match anything EXCEPT char set
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter of either case
re = /[0-9][0-9]ray/; // Match any digit

/**
 * Curly Braces {}
 *  Quantifiers
 *  Refers to character preceding quantifier
 */
re = /Hel{2}o/i; // exactly {m} times
re = /Hel{2,4}o/i; // min to max times
re = /Hel{2,}o/i; // at LEAST {m} times

/**
 * Parentheses ()
 *  Grouping
 */
re = /^([0-9]x){3}$/;

// String to match
const str = '3x3x3x3x';

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
