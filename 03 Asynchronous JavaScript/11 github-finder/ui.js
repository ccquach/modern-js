class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.timeoutId = {
      alert: null,
      spinner: null,
    };
  }

  showProfile({
    login,
    avatar_url,
    html_url,
    public_repos,
    public_gists,
    followers,
    following,
    company,
    blog,
    location,
    created_at,
  }) {
    const none = '<span class="ml-2">&ndash;</span>';
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3 text-center">
            <img class="img-thumbnail mb-3" src="${avatar_url}" alt="${login}" />
            <a href="${html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <div class="mb-3">
            <span class="badge badge-primary">Public Repos: ${public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${public_gists}</span>
            <span class="badge badge-success">Followers: ${followers}</span>
            <span class="badge badge-info">Following: ${following}</span>
            </div>
            <ul class="list-group">
              <li class="list-group-item">
                <span class="font-weight-bold">Company:</span> ${company ||
                  none}
              </li>
              <li class="list-group-item">
                <span class="font-weight-bold">Website/Blog:</span> ${
                  blog ? `<a href="${blog}" target="_blank">${blog}</a>` : none
                }
              </li>
              <li class="list-group-item">
                <span class="font-weight-bold">Location:</span> ${location ||
                  none}
              </li>
              <li class="list-group-item">
                <span class="font-weight-bold">Member Since:</span> ${created_at.slice(
                  0,
                  10
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showRepos(repos) {
    let output = '';
    repos.forEach(
      ({ html_url, name, stargazers_count, watchers_count, forks_count }) => {
        output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${html_url}" target="_blank">${name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${stargazers_count}</span>
              <span class="badge badge-success">Watchers: ${watchers_count}</span>
              <span class="badge badge-info">Forks: ${forks_count}</span>
            </div>
          </div>
        </div>
      `;
      }
    );
    document.getElementById('repos').innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();
    const alert = this._createAlert(message, className);
    this._addAlertToDOM(alert);
    this.timeoutId.alert = setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const alert = document.querySelector('.alert');
    if (this.timeoutId.alert) {
      clearTimeout(this.timeoutId.alert);
    }
    if (alert) {
      alert.remove();
    }
  }

  _createAlert(message, className) {
    const alert = document.createElement('div');
    alert.className = className;
    alert.appendChild(document.createTextNode(message));
    return alert;
  }

  _addAlertToDOM(alert) {
    const container = document.querySelector('.search-container');
    const search = document.querySelector('.search');
    container.insertBefore(alert, search);
  }

  async displaySpinner() {
    if (this.timeoutId.spinner) {
      clearTimeout(this.timeoutId.spinner);
    }
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'inline-block';
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        spinner.style.display = 'none';
        resolve();
      }, 1000);
    });
    const res = await promise;
    return res;
  }
}
