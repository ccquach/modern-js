const StorageCtrl = (function() {
  const getLocalStorageItems = function() {
    return JSON.parse(localStorage.getItem('items'));
  };

  const setLocalStorageItems = function(items) {
    localStorage.setItem('items', JSON.stringify(items));
  };

  return {
    storeItem: function(item) {
      if (localStorage.getItem('items') === null) {
        setLocalStorageItems([item]);
      } else {
        const items = getLocalStorageItems();
        items.push(item);
        setLocalStorageItems(items);
      }
    },
    getItems: function() {
      return getLocalStorageItems() ? getLocalStorageItems() : [];
    },
    updateItem: function(updatedItem) {
      const items = getLocalStorageItems();
      items.forEach(item => {
        if (item.id === updatedItem.id) {
          items.splice(items.indexOf(item), 1, updatedItem);
        }
      });
      setLocalStorageItems(items);
    },
    deleteItem: function(id) {
      let items = getLocalStorageItems();
      items = items.filter(item => item.id !== id);
      setLocalStorageItems(items);
    },
    clearItems: function() {
      localStorage.removeItem('items');
    },
  };
})();
