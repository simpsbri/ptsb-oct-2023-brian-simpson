/*
    ? Document Object Model (DOM)
    * an object comprising the structure and content of an .html file

    ? Basic Structure:
    * Document
        * HTML
            * Head
                * Meta tags
                * Link tags
                * Title tag
                * ...and all of its content (text, attributes, comments)
            * Body
                * Nav
                * Header
                * h1's, img's, aside's, div's, and so on...
                * ...and all of their attributes and values
*/

// ? Displays entire document object
console.log(document);

/*
    ? Window vs Document vs Navigator vs History Objects
    * document -> outlines the file rendered
    * window -> handles browser-specific functions
    * navigator -> handles language and geolocation
    * history -> handles browser session history
*/

console.log(navigator.language);
console.log(history.state);
console.log(window.fullScreen);

// ? Creating our first element using DOM

// * 1. use .createElement method on a document object & pass your element argument of choice
let h1 = document.createElement('h1');

console.log(h1);

// * 2. modify .textContent property to change rendered text value
h1.textContent = 'Cersei is napping again';
h1.style.color = 'red';

// * 3. append the element we created & modified (child) to its parent element
document.body.appendChild(h1);

console.log(document.getElementsByTagName('li'));

/*
    ? Accessing elements using DOM
    * Elements can be accessed several different ways. Most common are:
    * getElementById()
    * getElementsByClassName() [HTMLCollection]
    * getElementsByTagName() [HTMLCollection]
    * querySelector()
    * querySelectorAll() [NodeList]
*/

/*
    ? getElementById()
    * returns the first instance of an id element
*/


//const ulToDo = document.getElementById('ulToDo');
//console.log(ulToDo);

/*
    ? getElementsByClassName()
    * returns an HTML Collection of class instances
    * array-like object (cannot use array methods)
    * allows access to index, length, etc.
    * can be looped through
*/

// const listItem = document.getElementsByClassName('listItem');
// console.log(listItem);

// Accessing an instance of class list
// listItem[0].style.color = "rebeccapurple"




// for (i of listItem) {
//   i.style.color = 'rebeccapurple';
// }

// Use tag for listItem html and make the blue

// Use class for listItem html and add right margin 10px, padding 3px

// Use listTitle id to add a text underline


/*
    ? .getElementsByTagName()
    * just like above but for elements
*/

// const allLargeHeaders = document.getElementsByTagName('h1');
// console.log(allLargeHeaders);

// for (i of allLargeHeaders) {
//   i.style.color = '#4287f5';
// }

/*
    ? .querySelector()
    * return the first instance of an element
    * access using tag name, id, and class names
    * MUST SPECIFY whether it's a tag, ., or #
    * ex: "nav" for element; ".nav" for class; "#nav" for id
*/

// const listItemsByQuerySelector = document.querySelector('.listItem');
// console.log(listItemsByQuerySelector); // ! returns first instance ONLY

/*
    ? .querySelectorAll()
    * returns a NodeList of all instances of a class, id, or element(s)
    * allows the use of array methods to iterate over
*/

// const listItemsByQuerySelectorAll = document.querySelectorAll('.listItem');
// console.log(listItemsByQuerySelectorAll);

/*
    ! Challenge
    * Add a list item
    * Remove the 2nd item from the list
    * Change the add item button styles using the ID and text size 42px (use JS)
    * Extra Credit: Remove inline styles on add item, add a class, and style it in the separate CSS file
*/

//create a variable for the element
let ulToDo = document.getElementById('ulToDo');

//create a li element to add to the page
let li = document.createElement('li');

//set the "content" of the new li element
li.textContent = 'New task';

//append the new li element to the ulToDo item/list
ulToDo.appendChild(li);

//style the ulToDo color to blue
ulToDo.style.color = 'blue';


// Get the second li element in the ulToDo list
let liToRemove = ulToDo.children[1]; 

// Remove the second li element from the ulToDo list
ulToDo.removeChild(liToRemove); 










/*
    ? HTMLCollection vs NodeList

    * HTMLCollection returns a list that is live
    * Live lists DO show newly created elements even after their lookup

    * NodeList returns a static list of elements
    * NodeLists DO NOT show newly created elements
*/

// const htmlCollection = document.getElementsByClassName('listItem');
// const nodeList = document.querySelectorAll('.listItem');
// console.log('HTMLCollection', htmlCollection, 'NodeList', nodeList);

// const testItem = document.createElement('li');
// testItem.textContent = 'Test Item';
// testItem.className = 'listItem';
// ulToDo.appendChild(testItem);

// ? Last element isn't red because NodeList is static
// for (i of nodeList) {
//     i.style.color = "red"
// }

// ? All elements are red because HTMLCollection is live
// for (i of htmlCollection) {
//   i.style.color = 'red';
// }
