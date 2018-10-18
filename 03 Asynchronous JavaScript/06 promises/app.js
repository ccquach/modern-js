const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

/**
 * CALLBACKS
 */
// function addPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach(post => {
//       output += `
//         <li>${post.title}</li>
//       `;
//     });
//     document.querySelector('ul').innerHTML = output;
//   }, 1000);
// }

// addPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

/**
 * PROMISES
 */
function addPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      // mimic error
      let err;
      // err = new Error('Something went wrong');
      // err.status = 400;

      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach(post => {
      output += `
        <li>${post.title}</li>
      `;
    });
    document.querySelector('ul').innerHTML = output;
  }, 1000);
}

addPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(err =>
    console.log(`Request failed with status ${err.status}: ${err.message}`)
  );
