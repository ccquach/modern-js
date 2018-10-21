const http = new easyHTTP();
const url = `https://jsonplaceholder.typicode.com/users`;

http
  .get(url)
  .then(data => console.log(data))
  .catch(err => console.log(err));

const user = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com',
};

http
  .post(url, user)
  .then(data => console.log(data))
  .catch(err => console.log(err));

const id = 3;

http
  .put(`${url}/${id}`, user)
  .then(data => console.log(data))
  .catch(err => console.log(err));

http
  .delete(`${url}/${id}`)
  .then(data => console.log(data))
  .catch(err => console.log(err));
