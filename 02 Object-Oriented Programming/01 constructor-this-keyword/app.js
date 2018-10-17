// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);

  this.calcuateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    // console.log({ diff, ageDate });
    return Math.abs(ageDate.getUTCFullYear() - 1970);

    // Alternative calculation
    // return new Date(new Date() - this.birthday).getFullYear() - 1970;
  };
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calcuateAge());
