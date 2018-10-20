const github = new Github();
const ui = new UI();

const search = document.getElementById('search-user');

search.addEventListener('keyup', e => {
  if (search.value !== '') {
    getUserData(search.value);
  } else {
    ui.clearProfile();
  }
});

function getUserData(user) {
  github.get(user).then(({ profile, repos }) => {
    if (profile.message !== 'Not Found') {
      ui.clearAlert();
      ui.displaySpinner().then(() => {
        ui.showProfile(profile);
        ui.showRepos(repos);
      });
    } else {
      ui.showAlert('User not found', 'alert alert-danger');
      ui.clearProfile();
    }
  });
}
