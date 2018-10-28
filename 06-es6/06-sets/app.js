/**
 * Sets
 *  Store unique values of any type
 */
// Create set
const set1 = new Set();

// Add values
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100); // NOT added - already exists in set (only unique values allowed)

console.log(set1);

// Alternative format
// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: 'John' })); // false - reference type

// Delete from set
set1.delete(100);

console.log(set1);

// Iterate through set
for (let item of set1) {
  console.log(item);
}
for (let item of set1.values()) {
  console.log(item);
}
for (let item of set1.keys()) {
  console.log(item);
}
// for (let [key, value] of set1.entries()) {
//   console.log({ key, value });
// }

// Iterate with forEach
set1.forEach(value => {
  console.log(value);
});

// Convert to array
let arr = Array.from(set1);

console.log(arr);
