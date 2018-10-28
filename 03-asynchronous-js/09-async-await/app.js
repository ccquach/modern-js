// the keyword 'async' (without 'await') returns promise

// async function myFunc() {
//   // return 'hello';

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hello'), 3000);
//   });

//   const error = true;
//   if (!error) {
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// // console.log(myFunc());
// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

getUsers().then(users => console.log(users));
