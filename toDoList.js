
// Get the body of the document
let body = document.getElementsByTagName('body');

let currentDate = new Date();
let dueDate = new Date();

dueDate.setDate(dueDate.getDate() + 7); // Set the due date to be one week from now

let parentDiv = document.getElementById("container");

//Create the h1 as a variable
let h1 = document.createElement('h1');
//Add content to toDoHeader
h1.textContent = 'TODO List';
h1.id = 'toDoHeader';
//Add toDoHeader to the body section
parentDiv.appendChild(h1);

//repeat steps from h1 for h2
let h2 = document.createElement('h2');
h2.textContent = 'Due: ' + dueDate.toLocaleDateString();
parentDiv.appendChild(h2);

//add four items to the ol.
let ol = document.createElement('ol');
parentDiv.appendChild(ol);
ol.id = 'toDoList';

//Started by using counter to increment items, but not effective after deleting 3rd item. Went with CSS instead.
//let counter = 1;

let li = document.createElement('li');
li.textContent = `Create challenge.`;
ol.appendChild(li);


li = document.createElement('li');
li.textContent = `Continue challenge.`;
ol.appendChild(li);


li = document.createElement('li');
li.textContent = `Finish challenge.`;
ol.appendChild(li);


li = document.createElement('li');
li.textContent = `Take a vacay. `;
ol.appendChild(li);

let orderedListItems = Array.from(document.querySelectorAll('ol>li'))

for (const li of document.querySelectorAll('ol>li')) {
    console.log(li.textContent);
}

let thirdItem = ol.children[2];
ol.removeChild(thirdItem);

let secondOrderedListItems = Array.from(document.querySelectorAll('ol>li'))

for (const li2 of document.querySelectorAll('ol>li')) {
    console.log(li2.textContent);
}

let checklist = document.getElementById('toDoList');
let items = checklist.getElementsByTagName('li');
 
for (let i = 0; i < items.length; i++) {
   let checkBox = document.createElement('input');
   checkBox.type = 'checkbox';
   items[i].insertBefore(checkBox, items[i].firstChild);
}


const toDoList = document.getElementById("toDoList");
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const changeBtn = document.getElementById('change');
const fontColorBtn = document.getElementById('fontColor');


addBtn.addEventListener('click', (evt) => {
    let input = document.getElementById('listInput');
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    if (newItem.textContent) {
        toDoList.appendChild(newItem);
        input.value = "";
        input.classList.remove('error');
    } else {
        input.classList.add('error');
    }
});

removeBtn.addEventListener('click', (evt) => {
    let ulToDoLastItem = document.getElementById("toDoList");
    let lastItem = ol.lastElementChild;
    ol.removeChild(lastItem);
 
});



changeBtn.addEventListener('click', (evt) => {
    let itemNumber = parseInt(document.getElementById("itemToUpdate").value);
    let bgcolor = document.getElementById("colorpicker").value;
    let toDoListLength = document.getElementById("toDoList").getElementsByTagName("li");
    let count = toDoListLength.length
    let fontChoice = document.getElementById("fontColor").value;
    fontChoice = fontChoice.toLowerCase();

    if ((isNaN(itemNumber)) || (itemNumber > toDoListLength.length)) {
        alert("Please enter a valid item number.")
    } else {
        if (fontChoice === "y") {
            let itemNumberActual = itemNumber - 1;
            secondOrderedListItems[itemNumberActual].style.backgroundColor = bgcolor;
            secondOrderedListItems[itemNumberActual].style.color = 'white';
            itemToUpdate.value = "";
            fontColor.value = "";
        } else {
            let itemNumberActual = itemNumber - 1;
            secondOrderedListItems[itemNumberActual].style.backgroundColor = bgcolor;
            secondOrderedListItems[itemNumberActual].style.color = 'black';
            itemToUpdate.value = "";
            fontColor.value = "";
        }

    }
});


