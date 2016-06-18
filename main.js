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
//DOM creations


//DOM functions



var newButton = document.querySelector("#new-thing-button");
var myList = document.querySelector("#my-list");
var psuedoEl = document.querySelector(".list-thing::after");
var deleteSpan = document.createElement('a').innerHtml = "<a>delete</a>";
var archived = document.querySelector("#Archive");



newButton.addEventListener('click', function(event){
    event.preventDefault();
    var userInput = document.querySelector("#new-thing");
    var newItem = document.createElement("li")
    if (userInput.value !== "") {
      newItem.innerText = userInput.value;
      newItem.className = "list-thing";
      myList.appendChild(newItem);
      userInput.value = "";
    }
})




  //option box
  var optionBox = document.createElement("div");
  var boxButton = document.createElement("button");
  optionBox.innerHTML = "<p>Options</p>";
  optionBox.className = "options";
  optionBox.appendChild(boxButton);
  boxButton.innerText = "Archive";


  appendTo = function(box,targetEl) {
    targetEl.appendChild(box);
  }

//function to append



var listItem = document.querySelectorAll(".list-thing");


for(var i = 0; i < listItem.length; i++) {
  var newButton = document.createElement("span");
  newButton.innerText = "archive";
  var currentVal = listItem[i].innerHTML;
  currentVal += newButton;
}


for(var i = 0; i < listItem.length; i++) {

    listItem[i].addEventListener('mouseover', function(){
      console.log("hello world")
        this.classList.toggle("active");
        this.addEventListener('click',function(){
          console.log("clicked me!")
          appendTo(this,archived);
          this.classList.remove("active");
        })
      });
    }

// for(var i = 0; i < listItem.length; i++) {
//
//     listItem[i].addEventListener('click', function(){
//         appendTo(optionBox,this);
//         var archiveButton = document.querySelector(".options button");
//         var currentTask = this;
//         archiveButton.addEventListener('click', function(){
//           appendTo(currentTask,archived);
//           if(currentTask.children[0].parentNode.className = "list-thing") {
//           currentTask.className = "";
//           currentTask.className = "archived";
//         }
//         if (document.querySelector(".options")) {
//           console.log("fucking work");
//           console.log(document.querySelector(".options").parentNode);
//         }
//
//
//       });
//     })
// }
