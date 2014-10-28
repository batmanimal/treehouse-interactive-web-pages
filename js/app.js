// Problem: UI doesn't provide desired results (nothing happens when you click things)
// Solution: Add interactivity so user can manage their daily tasks 

// Plan! 

// want to select elements in the DOM 
var taskInput = document.getElementById('new-task'); // element with ID of #new-task 
var addButton = document.getElementsByTagName('button')[0]; // first button on page 
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); // ul with ID #incomplete-tasks 
var completedTasksHolder = document.getElementById('completed-tasks'); // #completed-tasks 

// Add new tasks
var addTask = function(){
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
	// when Delete button is pressed, 
		// remove parent list item from the unordered list (ul)
};


// Mark tasks complete  
var taskCompleted = function(){
	// when checkbox is ticked,
		// append the task list item to #completed-tasks
};


// Mark tasks as incomplete 
var taskIncomplete = function(){
	// when checkbox is UN-ticked,
		// append the task list item to #incomplete-tasks
};


