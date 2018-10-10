let val;

/**
 * document.getElementById()
 */

// Get things from element
val = document.getElementById('task-title');
val = document.getElementById('task-title').id;
val = document.getElementById('task-title').className;

const taskTitle = document.getElementById('task-title');

// Change styles
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color: red">Task List</span>';

/**
 * document.querySelector()
 */
val = document.querySelector('#task-title');
val = document.querySelector('.card-title');
val = document.querySelector('h5');

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'orange';
document.querySelector('li:nth-child(4)').textContent = 'hello world';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

console.log(val);
