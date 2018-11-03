const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list',
    emptyList: '#empty-list',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    clearBtn: '.clear-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
  };

  return {
    getSelectors: function() {
      return UISelectors;
    },
    showTotalCalories: function(totalCalories) {
      document.querySelector(
        UISelectors.totalCalories
      ).textContent = totalCalories;
    },
    populateItemList: function(items) {
      if (items.length > 0) {
        let html = '';
        items.forEach(item => {
          html += `
          <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong><em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </li>
        `;
        });
        document.querySelector(UISelectors.itemList).innerHTML = html;
      } else {
        UICtrl.hideItemList();
      }
    },
    hideItemList: function() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
      document.querySelector(UISelectors.emptyList).style.display = 'block';
    },
    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },
    addListItem: function(item) {
      // Hide empty list placeholder and show list
      const listEl = document.querySelector(UISelectors.itemList);
      if (listEl.style.display !== 'block') {
        listEl.style.display = 'block';
        document.querySelector(UISelectors.emptyList).style.display = 'none';
      }
      // Create new item
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`;
      li.innerHTML = `
        <strong>${item.name}: </strong><em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li);
    },
    clearInput: function() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    clearEditState: function() {
      UICtrl.clearInput();
      const { addBtn, updateBtn, deleteBtn, backBtn } = UISelectors;
      const btnsToHide = [updateBtn, deleteBtn, backBtn];
      btnsToHide.forEach(
        btn => (document.querySelector(btn).style.display = 'none')
      );
      document.querySelector(addBtn).style.display = 'inline';
    },
    showEditState: function() {
      const { addBtn, updateBtn, deleteBtn, backBtn } = UISelectors;
      const btnsToShow = [updateBtn, deleteBtn, backBtn];
      btnsToShow.forEach(
        btn => (document.querySelector(btn).style.display = 'inline')
      );
      document.querySelector(addBtn).style.display = 'none';
    },
    addItemToForm: function() {
      const { name, calories } = ItemCtrl.getCurrentItem();
      document.querySelector(UISelectors.itemNameInput).value = name;
      document.querySelector(UISelectors.itemCaloriesInput).value = calories;
      UICtrl.showEditState();
    },
    updateListItem: function(item) {
      document.querySelector(`#item-${item.id}`).innerHTML = `
        <strong>${item.name}: </strong><em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
    },
    deleteListItem: function(id) {
      document.querySelector(`#item-${id}`).remove();
    },
    clearListItems: function() {
      document.querySelector(UISelectors.itemList).innerHTML = '';
      UICtrl.hideItemList();
    },
  };
})();
