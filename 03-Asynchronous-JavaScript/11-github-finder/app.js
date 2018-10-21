const github = new Github();
const ui = new UI();

const search = document.getElementById('search-user');

search.addEventListener('input', () => {
  if (search.value !== '') {
    getUserData(search.value);
  } else {
    ui.clearProfile();
  }
});

function getUserData(user) {
  github.get(user).then(({ profile, repos }) => {
    ui.displaySpinner().then(() => {
      if (profile.message !== 'Not Found') {
        ui.clearAlert();
        ui.showProfile(profile);
        ui.showRepos(repos);
      } else {
        ui.showAlert('No user by that name.');
      }
    });
  });
}
