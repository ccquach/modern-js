const store = new Storage();
const { city, state } = store.getLocation();
const weather = new Weather(city, state);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-form').addEventListener('submit', e => {
  e.preventDefault();

  // Get input values
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Location config
  weather.changeLocation(city, state);
  store.setLocation(city, state);
  // Update weather details
  getWeather();

  // Reset form and hide modal
  document.getElementById('city').value = '';
  document.getElementById('state').value = '';
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then(data => ui.paint(data))
    .catch(err => console.log(err));
}
