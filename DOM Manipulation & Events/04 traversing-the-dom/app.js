let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// Get child nodes (all nodes, not just elements)
val = list.childNodes; // text nodes are line breaks in between <li>
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

/**
 * Node types:
 *  1 - Element
 *  2 - Attribute (deprecated)
 *  3 - Text node
 *  8 - Comment
 *  9 - Document itself
 * 10 - Doctype
 */

// Get children element nodes
val = list.children; // does not include line breaks
val = list.children[0];
val.textContent = 'Hello';

// Children of children
val = list.children[1].children;
val = list.children[1].children[0];
val.id = 'test-link';

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.children.length;
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
