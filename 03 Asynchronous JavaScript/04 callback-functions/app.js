const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

/**
 * Synchronous
 */
// function addPost(post) {
//   setTimeout(() => {
//     posts.push(post);
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

// addPost({ title: 'Post Three', body: 'This is post three' });
// getPosts();

/**
 * Asynchronous
 */
function addPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
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

addPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
