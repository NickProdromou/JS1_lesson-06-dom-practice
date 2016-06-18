/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#my-list" list.
- Only add an item if the input box is not blank.
- Clear the input box when the user clicks the button.

Here are some bonus tasks to push your DOM knowledge!
- Bonus tasks:
  - When a list item is archived, change its background colour to "green"
  - Add a link to each item to delete it completely
  - Instead of deleting it completely, move it to a second list called "Archive"

*/

//Varibles
var newButton = document.querySelector("#new-thing-button");
var myList = document.querySelector("#my-list");
var archived = document.querySelector("#Archive");
var listItem = document.querySelectorAll(".list-thing");

//functions
appendTo = function(box,targetEl) {
  targetEl.appendChild(box);
}

function watchItems() {
for(var i = 0; i < myList.children.length; i++) {

    myList.children[i].addEventListener('mouseover', function(){
        this.classList.add("active");
        this.addEventListener('click',function(){
          appendTo(this,archived);
          this.classList.add("archived");
        })
        this.addEventListener('mouseout', function(){
          console.log("mouse-left")
          this.classList.remove("active");
        })
      });
    }
}


newButton.addEventListener('click', function(event){
    event.preventDefault();
    var userInput = document.querySelector("#new-thing");
    var newItem = document.createElement("li")
    if (userInput.value !== "") {
      newItem.innerText = userInput.value;
      newItem.className = "list-thing";
      myList.appendChild(newItem);
      userInput.value = "";
      newItem.classList.remove("active");
      watchItems();
    }
})


watchItems();
