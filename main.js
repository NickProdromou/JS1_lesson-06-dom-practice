
//Variables
var newButton = document.querySelector("#new-thing-button");
var myList = document.querySelector("#my-list");
var archived = document.querySelector("#Archive");
var listItem = document.querySelectorAll(".list-thing");
var activeCount = document.querySelector("#counter");



//functions
function appendTo(box,targetEl) {
  targetEl.appendChild(box);
}

function getCurrentCount() {
  var currentCount = document.querySelectorAll(".list-thing").length;
  activeCount.innertext += "null ";
  activeCount.innerText = " " + currentCount;
}

function watchItems() {

  for(var i = 0; i < myList.children.length; i++) {

      //mouseover handler
      // myList.children[i].addEventListener('mouseover', function(){
      //     this.classList.add("active");
      //     //mouseout handler
      //     this.addEventListener('mouseout', function(){
      //       this.classList.remove("active");
      //     })
      //     //click hanlder
      //     this.addEventListener('click',function(){
      //       appendTo(this,archived);
      //       this.classList.add("archived");
      //       this.classList.remove("list-thing");
      //       getCurrentCount();
      //       checkArchive();
      //     })
      //   });
      // }
      myList.children[i].addEventListener('mouseover', function(){
          this.classList.add("active");
          console.log("mouse on event")
          });//mouseout handler
          myList.children[i].addEventListener('mouseout', function(){
            this.classList.remove("active");
            console.log("mouse off event")
          });
          //click hanlder
          myList.children[i].addEventListener('click',function(){
            appendTo(this,archived);
            this.classList.add("archived");
            this.classList.remove("list-thing");
            getCurrentCount();
            checkArchive();
            console.log("click event")
          });

      }
}

//functions
function checkArchive(){
  for(var i = 0; i < archived.children.length; i++) {
      archived.children[i].addEventListener('mouseover', function(){
          this.classList.remove("active");
        });
      }
}


//Event Listeners

newButton.addEventListener('click', function(event){
    event.preventDefault();
    var userInput = document.querySelector("#new-thing");
    var newItem = document.createElement("li")
    if (userInput.value !== "") {
      newItem.innerText = userInput.value;
      newItem.className = "list-thing";
      appendTo(newItem, myList);
      userInput.value = "";
      newItem.classList.remove("active");
      watchItems();
      getCurrentCount();
      checkArchive();
    }
})

//calling functions
watchItems();
getCurrentCount();
checkArchive();
