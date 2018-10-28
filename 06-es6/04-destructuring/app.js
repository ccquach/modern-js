let a, b;
[a, b] = [100, 200];

// Rest operator
[a, b, ...rest] = [1, 2, 3, 4, 5];
[a, b, c, ...rest] = [1, 2, 3, 4, 5];

({ a, b } = { a: 1, b: 2, c: 3, d: 4, e: 5 });
({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4, e: 5 });

/**
 *  Array Destructuring
 */
const people = ['John', 'Beth', 'Mike'];
let [person1, person2, person3] = people;

// Parse array returned from function
function getPeople() {
  return ['Jill', 'Brutus', 'Ike'];
}

[person1, person2, person3] = getPeople();

/**
 *  Object Destructuring
 */
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: () => {
    console.log('Hello');
  },
};

// ES5
// const name = person.name,
//   age = person.age,
//   city = person.city;

// ES6
const { name, age, city, sayHello } = person;

console.log(name, age, city);
sayHello();
