// Problem: UI doesn't provide desired results (nothing happens when you click things)
// Solution: Add interactivity so user can manage their daily tasks 

// Plan! 

// Select elements in the DOM 
var taskInput = document.getElementById('new-task'); // element with ID of #new-task 
var addButton = document.getElementsByTagName('button')[0]; // first button on page 
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); // ul with ID #incomplete-tasks 
var completedTasksHolder = document.getElementById('completed-tasks'); // #completed-tasks 

// new task li
var createNewTaskElement = function(taskString) {
	// create li
	var listItem = document.createElement('li');

	// input (checkbox)
	var checkBox = document.createElement('input'); // checkbox
	// label
	var label = document.createElement('label');
	// edit input (text)
	var editInput = document.createElement('input');
	// button.edit
	var editButton = document.createElement('button');
	// button.delete
	var deleteButton = document.createElement('button');

	// each of these elements needs to be modified and appended
	checkBox.type = "checkbox"; // each element has a type property, refer to style.css 
	editInput.type = "text"; 

	editButton.innerText = "Edit";  
	editButton.className = "edit";
	deleteButton.innerText = "Delete"; 
	deleteButton.className = "delete";

	label.innerText = taskString;

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
};

// Add new tasks
var addTask = function(){ // these are all event handlers 
	// console.log("Add task..."); // just checking to see that this event handler function is triggered 
	// create new list item and add it to ul:
	var listItem = createNewTaskElement(taskInput.value);
	// append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
	// change input value to blank string to clear the input field after adding task
	taskInput.value = '';
};


// Edit existing tasks 
var editTask = function(){
	//console.log("Edit task..."); // just checking to see that this function is triggered for the right eventHandler
	// When Edit button is pressed
	var listItem = this.parentNode; 

	var editInput = listItem.querySelector("input[type=text]"); // traverse and return first element
	var label = listItem.querySelector("label");

		// IF the parent class is .editMode
	var containsClass = listItem.classList.contains("editMode");
	if (containsClass) {
		// switch from .editMode
		// label text becomes the input's value
		label.innerText = editInput.value;
	}
	else {
			// switch to .editMode
			// input value becomes the label's text
		editInput.value = label.innerText;
	}
	// Toggle .editMode on the parent
	listItem.classList.toggle("editMode");
};

// Delete tasks
var deleteTask = function(){
	console.log("Delete task..."); // just checking to see that this function is triggered for the right eventHandler
	// when Delete button is pressed, 
		// remove parent list item from the unordered list (ul)
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
};


// Mark tasks complete  
var taskCompleted = function(){
//	console.log("Task completed..."); // just checking to see that this function is triggered for the right eventHandler
	// when checkbox is ticked,
		// append the task list item to #completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
};


// Mark tasks as incomplete 
var taskIncomplete = function(){
//	console.log("Task incomplete..."); // just checking to see that this function is triggered for the right eventHandler
	// when checkbox is UN-ticked,
		// append the task list item to #incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
};

// set click handler to the addTask function (wiring)
addButton.onclick = addTask; // the onclick set to addTask - does not call addTask, just a reference. 
//it will call the function only when the user clicks on the button, not at the onclick assignment    

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) { // params: the list items of the ul, event handler of the checkbox
	console.log("bind li events"); // log something out to show that this function ran in the loops
	// select taskListItem's children
	var checkBox = taskListItem.querySelector('input[type=checkbox]');
	var editButton = taskListItem.querySelector('button.edit');
	var deleteButton = taskListItem.querySelector('button.delete');
	// bind editTask to edit button
	editButton.onclick = editTask;
	// bind deleteTask to delete button
	deleteButton.onclick = deleteTask;
	// bind checkBoxEventHandler to checkbox
	checkBox.onchange = checkBoxEventHandler; // onchange for spacebar or mouse click
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


