const url = 'https://api.github.com/users';

class Github {
  constructor() {
    this.clientId = '5e77831c4392e37cb865';
    this.clientSecret = '6dc092f51dc7750eb366a84117946bf0dfdde629';
    this.reposConfig = {
      count: 5,
      sort: 'created: asc',
    };
  }

  async get(user) {
    const clientQueryStr = `?client_id=${this.clientId}&client_secret=${
      this.clientSecret
    }`;
    const profile = await this._getProfile(user, clientQueryStr);
    const repos = await this._getRepos(user, clientQueryStr);
    return { profile, repos };
  }

  async _getProfile(user, clientQueryStr) {
    const profileRes = await fetch(`${url}/${user}${clientQueryStr}`);
    const profile = await profileRes.json();
    return profile;
  }

  async _getRepos(user, clientQueryStr) {
    const { count, sort } = this.reposConfig;
    const reposQueryStr = `&per_page=${count}&sort=${sort}`;
    const reposRes = await fetch(
      `${url}/${user}/repos${clientQueryStr}${reposQueryStr}`
    );
    const repos = await reposRes.json();
    return repos;
  }
}
