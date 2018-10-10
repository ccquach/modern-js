let val;

/**
 * document.getElementsByClassName
 */
let items = document.getElementsByClassName('collection-item');
val = items;
val = items[1];
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document
  .querySelector('ul')
  .getElementsByClassName('collection-item');
val = listItems;

/**
 * document.getElementsByTagName
 */
const lis = document.getElementsByTagName('li');
val = lis;
val = lis[1];
lis[0].style.color = 'blue';
lis[3].textContent = 'world';

// Convert HTML Collection into array
val = Array.from(lis);
val.reverse();
val.forEach(function(li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

/**
 * document.querySelectorAll
 * Returns: NodeList (treated as an array => no need to convert)
 */
items = document.querySelectorAll('ul.collection li.collection-item');
val = items;

items.forEach(function(item, index) {
  item.textContent = `${index}: goodbye`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
  li.style.background = 'green';
});

for (let li of liEven) {
  li.style.background = 'grey';
}

console.log(val);
