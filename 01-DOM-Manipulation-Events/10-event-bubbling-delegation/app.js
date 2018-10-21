/**
 * Event Bubbling
 */
// document.querySelector('.card-title').addEventListener('click', function() {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function() {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
//   console.log('col');
// });

/**
 * Event Delegation
 * Usage: listening to events on elements that were not part of the DOM when page loaded
 * e.g.) adding a new todo item
 */
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete item');
  // }

  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}
