// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//   e.preventDefault();
//   console.log('Hello world');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  // console.log('Inside onClick function');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // e.target.innerText = 'HELLO';

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coordinates relative to window
  val = e.clientY;
  val = e.clientX;

  // Coordinates relative to element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
