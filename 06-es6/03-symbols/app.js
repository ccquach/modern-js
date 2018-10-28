/**
 * Symbol
 *  Primitive data type
 *  (NOT Reference type, e.g. object/array,
 *   so you don't instantiate with new keyword)
 *
 *  Every symbol is completely unique
 */

let val;

// Create a symbol
val = Symbol();
val = Symbol('sym2'); // 'sym2' = identifier
val = typeof val;

// No two symbols can be the same
val = Symbol() === Symbol();
val = Symbol('123') === Symbol('123');

val = Symbol();
// val = `Hello ${val}`;
// val = `Hello ${String(val)}`;
val = `Hello ${val.toString()}`;

// console.log(val);

// ==================================================================

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

// must evaluate (sqaure brackets) KEY1 var to use symbol as key
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols NOT enumerable in for...in loop
for (let key in myObj) {
  console.log(`${key}: ${myObj[key]}`);
}

// Symbols ignored by JSON.stringify
val = JSON.stringify({ key: 'prop' });
val = JSON.stringify({ [Symbol('sym1')]: 'prop' });

console.log(val);
