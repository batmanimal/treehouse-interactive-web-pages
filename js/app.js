// Problem: UI doesn't provide desired results (nothing happens when you click things)
// Solution: Add interactivity so user can manage their daily tasks 

// Plan! 

// want to select elements in the DOM 
var taskInput = document.getElementById('new-task'); // element with ID of #new-task 
var addButton = document.getElementsByTagName('button')[0]; // first button on page 
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); // ul with ID #incomplete-tasks 
var completedTasksHolder = document.getElementById('completed-tasks'); // #completed-tasks 

// Add new tasks
var addTask = function(){ // these are all event handlers 
	console.log("Add task..."); // just checking to see that this event handler function is triggered 
	// when button is pressed
	// create new list item with text from #new-task:
		// input (checkbox)
		// label
		// input (text)
		// button.edit
		// button.delete
		// each of these elements needs to be modified and appended
};


// Edit existing tasks 
var editTask = function(){
	console.log("Edit task..."); // just checking to see that this function is triggered for the right eventHandler
	// When Edit button is pressed
		// IF the parent class is .editMode
			// switch from .editMode
			// label text becomes the input's value
		// ELSE
			// switch to .editMode
			// input value becomes the label's text
	// Toggle .editMode on the parent
};

// Delete tasks
var deleteTask = function(){
	console.log("Delete task..."); // just checking to see that this function is triggered for the right eventHandler
	// when Delete button is pressed, 
		// remove parent list item from the unordered list (ul)
};


// Mark tasks complete  
var taskCompleted = function(){
	console.log("Task completed..."); // just checking to see that this function is triggered for the right eventHandler
	// when checkbox is ticked,
		// append the task list item to #completed-tasks
};


// Mark tasks as incomplete 
var taskIncomplete = function(){
	console.log("Task incomplete..."); // just checking to see that this function is triggered for the right eventHandler
	// when checkbox is UN-ticked,
		// append the task list item to #incomplete-tasks
};

// set click handler to the addTask function (wiring)
addButton.onclick = addTask; // the onclick set to addTask - does not call addTask, just a reference. 
//it will call the function only when the user clicks on the button, not at the onclick assignment    

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) { // params: the list items of the ul, event handler of the checkbox
	console.log("bind li events"); // log something out to show that this function ran in the loops
	// select taskListItem's children
	var checkBox = ;
	var editButton = ;
	var deleteButton = ;
		// bind editTask to edit button
		// bind deleteTask to delete button
		// bind checkBoxEventHandler to checkbox
};

// loop over incompleteTasksHolder ul
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
		// bind events to li children (taskCompleted)
}

// loop over completedTasksHolder ul
for (var i = 0; i < completedTasksHolder.children.length; i++) {
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
		// bind events to li children (taskIncomplete)
}


