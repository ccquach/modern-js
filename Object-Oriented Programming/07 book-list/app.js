function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">&times;</a></td>
  `;
  list.appendChild(row);
};

UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('title').focus();
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

UI.prototype.showAlert = function(message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 4000);
};

UI.prototype.removeBookFromList = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};

document.getElementById('book-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  const book = new Book(title, author, isbn);

  const ui = new UI();

  if (isInvalid(title, author, isbn)) {
    return ui.showAlert('Please fill out all fields.', 'error');
  }

  ui.addBookToList(book);
  ui.clearFields();
  ui.showAlert('Book added!', 'success');
});

document.getElementById('book-list').addEventListener('click', function(e) {
  e.preventDefault();
  const ui = new UI();
  ui.removeBookFromList(e.target);
  ui.showAlert('Book removed!', 'success');
});

function isInvalid(title, author, isbn) {
  return title === '' || author === '' || isbn === '';
}
