class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static addBookToList(book) {
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">&times;</a></td>
    `;
    list.appendChild(row);
  }

  static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('title').focus();
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 4000);
  }

  static removeBookFromList(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
}

class Store {
  static getBooks() {
    return localStorage.getItem('books') === null
      ? []
      : JSON.parse(localStorage.getItem('books'));
  }

  static displayBooks() {
    for (let book of Store.getBooks()) {
      UI.addBookToList(book);
    }
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks().filter(book => book.isbn !== isbn);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', function() {
  Store.displayBooks();
});

document.getElementById('book-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  const book = new Book(title, author, isbn);

  if (isInvalid(title, author, isbn)) {
    return UI.showAlert('Please fill out all fields.', 'error');
  }

  Store.addBook(book);
  UI.addBookToList(book);
  UI.clearFields();
  UI.showAlert('Book added!', 'success');
});

document.getElementById('book-list').addEventListener('click', function(e) {
  e.preventDefault();

  const isbn = e.target.parentElement.previousElementSibling.textContent;
  Store.removeBook(isbn);

  UI.removeBookFromList(e.target);
  UI.showAlert('Book removed!', 'success');
});

function isInvalid(title, author, isbn) {
  return title === '' || author === '' || isbn === '';
}
