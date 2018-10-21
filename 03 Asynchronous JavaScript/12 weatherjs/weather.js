class Weather {
  constructor(city, state) {
    this.apiKey = { ...config };
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const coordinates = await this._geocodeLocation();
    const queryStr = this._serialize({
      APPID: this.apiKey.openWeather,
      lat: coordinates.lat,
      lon: coordinates.lng,
      units: 'imperial',
    });
    const url = `http://api.openweathermap.org/data/2.5/weather?${queryStr}`;

    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  async _geocodeLocation() {
    const queryStr = this._serialize({
      key: this.apiKey.mapQuest,
      location: `${this.city}, ${this.state}`,
    }).replace(/%20/g, '+');
    const url = `https://www.mapquestapi.com/geocoding/v1/address?${queryStr}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.results[0].locations[0].latLng;
  }

  _serialize(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    return str.join('&');
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
