const App = (function(StorageCtrl, ItemCtrl, UICtrl) {
  const loadEventListeners = function() {
    // Disable submit on enter
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    const UISelectors = UICtrl.getSelectors();
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);

    document
      .querySelector(UISelectors.itemList)
      .addEventListener('click', itemEditClick);

    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener('click', itemUpdateSubmit);

    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener('click', itemDeleteSubmit);

    document
      .querySelector(UISelectors.clearBtn)
      .addEventListener('click', clearAllItemsClick);

    document
      .querySelector(UISelectors.backBtn)
      .addEventListener('click', UICtrl.clearEditState);
  };

  const itemAddSubmit = function() {
    const input = UICtrl.getItemInput();
    if (input.name !== '' && input.calories !== '') {
      // Create new item
      const newItem = ItemCtrl.addItem(input);
      StorageCtrl.storeItem(newItem);
      UICtrl.addListItem(newItem);
      UICtrl.clearInput();
      // Update total calories
      updateTotalCalories();
    }
  };

  const itemEditClick = function(e) {
    if (e.target.classList.contains('edit-item')) {
      const id = parseInt(
        e.target.parentElement.parentElement.id.split('-')[1]
      );
      const itemToUpdate = ItemCtrl.getItemById(id);
      ItemCtrl.setCurrentItem(itemToUpdate);
      UICtrl.addItemToForm();
    }
  };

  const itemUpdateSubmit = function() {
    // Update item
    const input = UICtrl.getItemInput();
    const updatedItem = ItemCtrl.updateItem(input);
    StorageCtrl.updateItem(updatedItem);
    UICtrl.updateListItem(updatedItem);
    // Leave edit state
    UICtrl.clearEditState();
    // Update total calories
    updateTotalCalories();
  };

  const itemDeleteSubmit = function() {
    // Delete item
    const currentItemId = ItemCtrl.getCurrentItem().id;
    ItemCtrl.deleteItem(currentItemId);
    StorageCtrl.deleteItem(currentItemId);
    UICtrl.deleteListItem(currentItemId);
    // Leave edit state
    UICtrl.clearEditState();
    // Update total calories
    updateTotalCalories();
    // Hide list if no items left
    if (ItemCtrl.getItems().length === 0) {
      UICtrl.hideItemList();
    }
  };

  const clearAllItemsClick = function() {
    // Remove all items
    ItemCtrl.clearItems();
    StorageCtrl.clearItems();
    UICtrl.clearListItems();
    // Update total calories
    updateTotalCalories();
  };

  const updateTotalCalories = function() {
    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(totalCalories);
  };

  return {
    init: function() {
      // Clear edit state as initial state
      UICtrl.clearEditState();

      // Populate list items
      const items = ItemCtrl.getItems();
      UICtrl.populateItemList(items);
      // Update total calories
      updateTotalCalories();

      loadEventListeners();
    },
  };
})(StorageCtrl, ItemCtrl, UICtrl);

// Initialize App
App.init();
