// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

function getTasks() {
  const tasks = getTasksFromLocalStorage();
  for (let task of tasks) {
    createTaskElement(task);
  }
}

function getTasksFromLocalStorage() {
  return localStorage.getItem('tasks') === null
    ? []
    : JSON.parse(localStorage.getItem('tasks'));
}

function createTaskElement(task) {
  /**
   * Create list item
   */
  const li = document.createElement('li');
  // Add style class
  li.className = 'collection-item';
  // Create text node
  li.appendChild(document.createTextNode(task));

  /**
   * Create delete button
   */
  const link = document.createElement('a');
  // Add style class
  link.className = 'delete-item secondary-content';
  // Set href attribute
  link.setAttribute('href', '#');
  // Add icon
  // const icon = document.createElement('i');
  // icon.className = 'fa fa-remove';
  // link.appendChild(icon);
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append to list item
  li.appendChild(link);
  // Append list item to list
  taskList.appendChild(li);
}

function addTask(e) {
  e.preventDefault();
  createTaskElement(taskInput.value);
  storeTaskInLocalStorage();
  // Clear input
  taskInput.value = '';
}

function storeTaskInLocalStorage() {
  let tasks = getTasksFromLocalStorage();
  tasks.push(taskInput.value);
  setTasksInLocalStorage(tasks);
}

function setTasksInLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      const task = e.target.parentElement.parentElement;
      removeTaskElement(task);
      removeTaskFromLocalStorage(task);
    }
  }
}

function removeTaskElement(task) {
  task.remove();
}

function removeTaskFromLocalStorage(deletedTask) {
  let tasks = getTasksFromLocalStorage();
  tasks.forEach((task, index) => {
    if (task === deletedTask.textContent) {
      tasks.splice(index, 1);
    }
  });
  setTasksInLocalStorage(tasks);
}

function clearTasks() {
  // taskList.innerHTML = '';

  // Faster to loop thru
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
  localStorage.clear();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  for (let task of document.querySelectorAll('.collection-item')) {
    if (task.textContent.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  }

  // document.querySelectorAll('.collection-item').forEach(task => {
  //   if (task.textContent.toLowerCase().indexOf(text) !== -1) {
  //     task.style.display = 'block';
  //   } else {
  //     task.style.display = 'none';
  //   }
  // });
}
