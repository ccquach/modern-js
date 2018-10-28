const http = new easyHTTP();
const url = `https://jsonplaceholder.typicode.com/posts`;

// GET MULTIPLE POSTS
// http.get(url, function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// GET SINGLE POST
// http.get(`${url}/1`, function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

const post = {
  title: 'Custom post',
  body: 'This is a custom post.',
};

// ADD POST
// http.post(url, post, function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

const id = 5;

// UPDATE POST
// http.put(`${url}/${id}`, post, function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// DELETE POST
http.delete(`${url}/${id}`, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
