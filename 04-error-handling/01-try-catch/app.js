const user = { email: 'jdoe@gmail.com' };

try {
  // Produce a ReferenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Produce SyntaxError (evaluating 'Hello' and 'World' as variables => should be String)
  // Would evaluate correctly if wrapped in double quotes inside single quotes: eval('"Hello World"');
  // console.log(eval('Hello World'));

  // Produce URIError
  // decodeURIComponent('%');

  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (err) {
  console.log(`User Error: ${err.message}`);
  console.log(err);
  console.log(err.message);
  console.log(err.name);

  // Test type of error
  console.log(err instanceof ReferenceError);
  console.log(err instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result...');
}

console.log('Program continues...');
