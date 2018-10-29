/**
 * Basic Structure
 */
// Immediately-Invoked Function Expression (IIFE)
// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public vars and functions
//   };
// })();

/**
 * Standard Module Pattern
 */
const UICtrl = (function() {
  const text = 'Hello World';

  const changeText = function() {
    document.querySelector('h1').textContent = text;
  };

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();

// We do not have access to private variables and functions
// UICtrl.changeText();
console.log(UICtrl.text);

/**
 * Revealing Module Pattern
 */
const ItemCtrl = (function() {
  const data = [];

  function add(item) {
    data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Mark' });
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));
