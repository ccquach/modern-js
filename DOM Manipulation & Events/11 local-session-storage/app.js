// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  // get new task from form input
  const task = document.getElementById('task').value;

  // get existing tasks collection from local storage
  let tasks =
    localStorage.getItem('tasks') === null
      ? []
      : JSON.parse(localStorage.getItem('tasks'));

  // add new task to collection
  tasks.push(task);

  // update local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task saved');
});

// local storage stores data as STRINGS so must parse to convert to array
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => {
  console.log(task);
});
