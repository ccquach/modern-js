const $output = document.getElementById('output');

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('text.txt')
    .then(res => res.text())
    .then(data => (output.innerHTML = data))
    .catch(err => console.log(err));
}

function getJSON() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      let result = '';
      data.forEach(post => (result += `<li>${post.title}</li>`));
      $output.innerHTML = result;
    })
    .catch(err => console.log(err));
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      let result = '';
      data.forEach(user => (result += `<li>${user.login}</li>`));
      $output.innerHTML = result;
    })
    .catch(err => console.log(err));
}
