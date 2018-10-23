/**
 * Regular Expressions
 *  Flags:
 *    g => global
 *    i => case insensitive
 */
let re;
re = /hello/;
re = /hello/g;
re = /hello/i;

// console.log(re);
// console.log(re.source);

let str;
let result;
/**
 * exec()
 *  Returns result in an array or null
 */
result = re.exec('hi world');
result = re.exec('hello world');
result = re.exec('brad hello world');
result = re.exec('hellojlsdjfiejwi world');

/**
 * test()
 *  Returns true or false
 */
result = re.test('hello world');
result = re.test('Hello');

/**
 * match()
 *  Returns result in array or null
 */
str = 'Hello There';
str = 'Hell There';
result = str.match(re);

/**
 * search()
 *  Returns index of the first match or -1 if not found
 */
str = 'Hello There';
str = 'Brad Hello There';
result = str.search(re);

/**
 * replace()
 *  Returns new string with some or all matches of pattern replaced
 */
str = 'Hello There';
result = str.replace(re, 'Hi');

console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);
