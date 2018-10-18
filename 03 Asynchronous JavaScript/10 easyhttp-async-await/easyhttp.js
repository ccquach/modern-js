/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 */

class easyHTTP {
  async get(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  async post(url, user) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  }

  async put(url, user) {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  }

  async delete(url) {
    const res = await fetch(url, {
      method: 'DELETE',
    });
    return 'Resource deleted';
  }
}
