/**
 * Maps
 *  Key-value pairs
 *  Key and values can be ANY type
 */

const map1 = new Map();

// Set keys
const key1 = 'some string';
const key2 = {};
const key3 = function() {};

// Set values
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
console.log(map1.size);

// Iterate through keys
for (let key of map1.keys()) {
  console.log(key);
}

// Iterate through values
for (let val of map1.values()) {
  console.log(val);
}

// Iterate through key-value pairs
for (let [key, value] of map1) {
  console.log({ key, value });
}
for (let [key, value] of map1.entries()) {
  console.log({ key, value });
}

// Iterate with forEach
map1.forEach((value, key) => {
  console.log({ key, value });
});

// Convert to arrays
let arr = Array.from(map1);

// Array of values
arr = Array.from(map1.values());

// Array of keys
arr = Array.from(map1.keys());

console.log(arr);
