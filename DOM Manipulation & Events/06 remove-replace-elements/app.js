/**
 * Replace element
 */

// Create element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// Add text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Get the parent node
// const cardAction = document.querySelector('.card-action');
const cardAction = oldHeading.parentElement;

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

/**
 * Remove element
 */
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Label items with index to see what is being deleted
lis.forEach((li, index) => {
  li.textContent = `${index} List Items`;
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
});

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// console.log(lis);

/**
 * Classes
 */
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.className.concat('test');
link.classList.remove('test');
val = link;

/**
 * Attributes
 */
val = link.getAttribute('href');
link.setAttribute('href', 'http://www.google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);
