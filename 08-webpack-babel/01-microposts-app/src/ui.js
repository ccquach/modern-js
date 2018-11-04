class UI {
  constructor() {
    this.posts = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.formState = 'add';
  }

  showPosts(posts) {
    let output = '';
    for (let { id, title, body } of posts) {
      output += `
        <div class="card bg-light mb-3">
          <h5 class="card-header">${title}</h5>
          <div class="card-body">
            <p class="card-text pull-left mb-0">${body}</p>
            <div class="pull-right">
              <a href="#" class="edit card-link text-warning" data-id="${id}">
                <i class="fa fa-pencil"></i>
              </a>
              <a href="#" class="delete card-link text-danger" data-id="${id}">
                <i class="fa fa-remove"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    }
    this.posts.innerHTML = output;
  }

  getInputs() {
    return {
      title: this.titleInput.value,
      body: this.bodyInput.value,
      id: this.idInput.value,
    };
  }

  clearInputs() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  clearIdInput() {
    this.idInput.value = '';
  }

  showAlert(message, className) {
    this.clearAlert();

    const alert = document.createElement('div');
    alert.className = className;
    alert.appendChild(document.createTextNode(message));
    const postsContainer = document.querySelector('.posts-container');
    postsContainer.insertBefore(alert, this.posts);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  fillForm(data) {
    const { title, body, id } = data;
    this.titleInput.value = title;
    this.bodyInput.value = body;
    this.idInput.value = id;
  }

  changeFormState(type) {
    if (type === 'edit') {
      // Show edit button
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';
      // Create cancel button
      const cancelBtn = document.createElement('button');
      cancelBtn.appendChild(document.createTextNode('Cancel Edit'));
      cancelBtn.className = 'post-cancel btn btn-light btn-block';
      const form = document.querySelector('.card-form');
      const formEnd = document.querySelector('.form-end');
      form.insertBefore(cancelBtn, formEnd);
    } else {
      // Show post button
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';
      // Remove cancel button
      const cancelBtn = document.querySelector('.post-cancel');
      if (cancelBtn) {
        cancelBtn.remove();
      }
      // Clear inputs
      this.clearInputs();
      this.clearIdInput();
    }
  }
}

export default new UI();
