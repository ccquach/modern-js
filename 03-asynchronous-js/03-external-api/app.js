document.querySelector('.get-jokes').addEventListener('click', loadJokes);

function loadJokes(e) {
  e.preventDefault();
  const numJokes = document.querySelector('input[type="number"]').value;
  makeRequest(numJokes);
}

function makeRequest(numJokes) {
  const url = `http://api.icndb.com/jokes/random/${numJokes}`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const output = buildOutput(JSON.parse(this.responseText));
      displayJokes(output);
    }
  };
  xhr.send();
}

function buildOutput(res) {
  let output = '';
  if (res.type === 'success') {
    res.value.forEach(obj => {
      output += `
        <tr>
          <td>${obj.joke}</td>
        </tr>
      `;
    });
  } else {
    output += `<tr><td>Something went wrong</td></tr>`;
  }
  return output;
}

function displayJokes(jokes) {
  document.querySelector('.jokes').innerHTML = jokes;
}
