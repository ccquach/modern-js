/**
 * Person Constructor
 * @param {String} firstName
 * @param {String} lastName
 */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  return `Hello there, ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

/**
 * Customer Constructor
 * @param {String} firstName
 * @param {String} lastName
 * @param {String} phone
 * @param {String} membership
 */
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Revert Customer back to its own constructor
Customer.prototype.constructor = Customer;

// Customize/overwrite inherited method
Customer.prototype.greeting = function() {
  return `Hello there, ${this.firstName} ${
    this.lastName
  }. Welcome to our company!`;
};

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
console.log(customer1);
console.log(customer1.greeting());
