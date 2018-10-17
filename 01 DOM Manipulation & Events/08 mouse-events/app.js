const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Double click
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

/**
 * Mouseenter and mouseleave only fire off
 * when entering/leaving element with event listener
 */
// Mouseenter
// card.addEventListener('mouseenter', runEvent);

// Mouseleave
// card.addEventListener('mouseleave', runEvent);

/**
 * Mouseover and mouseout fire when mouse moves into
 * an element located inside the element with event listner
 */
// Mouseover
// card.addEventListener('mouseover', runEvent);

// Mouseout
// card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
