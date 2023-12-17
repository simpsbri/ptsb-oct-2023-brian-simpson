/*
    ? Event Listeners
    * allow us to execute a callback fx when an event occurs
    * .addEventListener() takes an event and fires a callback
    * event - a string for the event type
    * callback = fx that is triggered immediately after event occurs
*/

const listInput = document.getElementById('listInput');

/*
 * 1. Event listener listens for a key up event
 * 2. We collect it within the event argument
 * 3. We access the target property of the element on which the event listener was placed
 * 4. We console.log it's .value property
 */
// listInput.addEventListener("keyup", event => console.log(event.target.value))
//



listInput.addEventListener('keyup', (keystroke) => {
    // console.log(keystroke);
    // console.log(keystroke.target.value);

    let currentInputValue = keystroke.target.value;
    console.log(currentInputValue);
} )


const ulToDo = document.getElementById("ulToDo");
const addBtn = document.getElementById('add');
const submitBtn = document.getElementById('remove');


addBtn.addEventListener('click', (evt) => {
    console.log(evt);
    let input = document.getElementById('listInput');
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    if (newItem.textContent) {
        ulToDo.appendChild(newItem);
        input.value = "";
        input.classList.remove('error');
    } else {
        input.classList.add('error');
    }
});



/*

    ! Challenge
    * We can add items BUT
    * Create Remove Item button. Once it's clicked, it will remove the last list item in our TODO list
*/

// ! Add your answer here
    // function deleteLastItem() {
    //     let ulToDoLastItem = document.getElementById("ulToDo");
    //     let lastItem = ul.lastElementChild;

    //     if (lastItem) {
    //         ul.removeChild(lastItem);
    //     }
    // }
