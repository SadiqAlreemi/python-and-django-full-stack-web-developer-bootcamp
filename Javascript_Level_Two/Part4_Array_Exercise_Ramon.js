// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks
function tasks(add,remove,display,quit){
  return prompt("What would you like to do with the roster? (add,remove,display,quit)")
  if (prompt = "add"){
    addNew();
  }
  if (prompt = "remove"){
    remove();
  }
  if (prompt = "display"){
    display();
  }
  if (prompt = "quit"){
    quit();
  }
}
// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(){
  roster.push(prompt("Name of new student?"));
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
function remove(){
  var index = array.indexOf(prompt("Student to remove?"));
  var removedItem = roster.splice(student, 1);
}

// Create a function called display that prints out the orster to the console.
function display(){
  roster.forEach(console.log);
}

// Start by asking if they want to use the web app
var use = prompt("Do you want to use the roster app?(y/n)")
if (use === "y"){
  tasks();
} else {
  break;
}
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
while (tasks != "quit"){
  tasks();
}
