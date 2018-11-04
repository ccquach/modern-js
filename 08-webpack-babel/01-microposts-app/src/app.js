import http from './http';
import ui from './ui';

const BASE_URL = 'http://localhost:3000';

/**
 * Event Listeners
 */
document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-submit').addEventListener('click', submitPost);
document.querySelector('#posts').addEventListener('click', enableEdit);
document.querySelector('.card-form').addEventListener('click', disableEdit);
document.querySelector('#posts').addEventListener('click', deletePost);

/**
 * Helper Methods
 */
function getPosts() {
  http
    .get(`${BASE_URL}/posts`)
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

function submitPost() {
  const { title, body, id } = ui.getInputs();
  if (title !== '' && body !== '') {
    id === '' ? addPost(title, body) : editPost(id, title, body);
  } else {
    ui.showAlert('Please fill in all fields.', 'alert alert-danger');
  }
}

function addPost(title, body) {
  http
    .post(`${BASE_URL}/posts`, { title, body })
    .then(() => {
      getPosts();
      ui.clearInputs();
      ui.showAlert('Post added!', 'alert alert-success');
    })
    .catch(err => console.log(err));
}

function editPost(id, title, body) {
  http
    .put(`${BASE_URL}/posts/${id}`, { title, body })
    .then(() => {
      getPosts();
      ui.changeFormState('add');
      ui.showAlert('Post updated!', 'alert alert-success');
    })
    .catch(err => console.log(err));
}

function enableEdit(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('edit')) {
    // Fill the form with selected post data
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.parentElement.parentElement.previousElementSibling
        .textContent;
    const body =
      e.target.parentElement.parentElement.previousElementSibling.textContent;

    const data = { id, title, body };
    ui.fillForm(data);

    // Change form to edit state
    ui.changeFormState('edit');
  }
}

function disableEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
}

function deletePost(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains('delete')) {
    if (confirm('Are you sure you want to remove this post?')) {
      const id = e.target.parentElement.dataset.id;
      http
        .delete(`${BASE_URL}/posts/${id}`)
        .then(() => {
          getPosts();
          ui.showAlert('Post deleted!', 'alert alert-success');
        })
        .catch(err => console.log(err));
    }
  }
}
