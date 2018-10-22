class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.sunrise = document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description
      .split(' ')
      .map(word => this._capitalize(word))
      .join(' ');

    const temp = weather.main.temp;
    const fahrenheit = Math.round(temp);
    const celsius = Math.round(this._convertToCelsius(temp));
    this.temp.innerHTML = `${fahrenheit}&#8457; (${celsius}&#8451;)`;

    this._setAttribute(this.icon, {
      src: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
      alt: weather.weather[0].description,
      title: weather.weather[0].description,
    });

    this.sunrise.textContent = `${this._getTimeFromUnix(
      weather.sys.sunrise
    )} AM`;
    this.sunset.textContent = `${this._getTimeFromUnix(weather.sys.sunset)} PM`;

    this.humidity.textContent = `${weather.main.humidity}%`;
    this.pressure.textContent = `${weather.main.pressure} hPa`;
    this.wind.textContent = `From the ${this._degToCompass(
      weather.wind.deg
    )} at ${Math.round(weather.wind.speed)} mi/h (${Math.round(
      this._mphToMPS(weather.wind.speed)
    )} m/s)`;
  }

  _capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  _convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }

  _setAttribute(el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  _degToCompass(deg) {
    const arr = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];
    const val = Math.floor(deg / 22.5 + 0.5);
    return arr[val % 16];
  }

  _mphToMPS(speed) {
    return speed / 2.237;
  }

  _getTimeFromUnix(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours() < 12 ? date.getHours() : date.getHours() - 12;
    const minutes = '0' + date.getMinutes();
    return hours + ':' + minutes.substr(-2);
  }
}
