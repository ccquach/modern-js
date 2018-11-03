const ItemCtrl = (function() {
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  const state = {
    // items: [
    //   { id: 0, name: 'Steak dinner', calories: 1200 },
    //   { id: 1, name: 'Cookie', calories: 400 },
    //   { id: 2, name: 'Eggs', calories: 300 },
    // ],
    items: StorageCtrl.getItems(),
    currentItem: null,
    totalCalories: 0,
  };

  return {
    logData: function() {
      return state;
    },
    getTotalCalories: function() {
      return state.items.reduce(
        (total, nextItem) => (total += nextItem.calories),
        0
      );
    },
    getItems: function() {
      return state.items;
    },
    getItemById: function(id) {
      return state.items.find(item => item.id === id);
    },
    addItem: function(input) {
      const { name, calories } = input;
      const ID =
        state.items.length > 0 ? state.items[state.items.length - 1].id + 1 : 0;
      const newItem = new Item(ID, name, parseInt(calories));
      state.items.push(newItem);
      return newItem;
    },
    setCurrentItem: function(item) {
      state.currentItem = item;
    },
    getCurrentItem: function() {
      return state.currentItem;
    },
    updateItem: function(input) {
      const { name, calories } = input;
      const itemToUpdate = ItemCtrl.getItemById(state.currentItem.id);
      itemToUpdate.name = name;
      itemToUpdate.calories = parseInt(calories);
      return itemToUpdate;
    },
    deleteItem: function(id) {
      state.items = state.items.filter(item => item.id !== id);
    },
    clearItems: function() {
      state.items = [];
    },
  };
})();
