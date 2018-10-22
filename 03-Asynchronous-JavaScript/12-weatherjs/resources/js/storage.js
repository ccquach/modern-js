class Storage {
  constructor() {
    this.defaultCity = 'Los Angeles';
    this.defaultState = 'CA';
  }

  getLocation() {
    // Use default location if local storage empty
    if (
      localStorage.getItem('city') === null ||
      localStorage.getItem('state') === null
    ) {
      return {
        city: this.defaultCity,
        state: this.defaultState,
      };
    }
    // Otherwise, return local storage data
    return {
      city: localStorage.getItem('city'),
      state: localStorage.getItem('state'),
    };
  }

  setLocation(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}
