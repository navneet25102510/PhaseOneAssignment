// addbutton
var btnAdd=document.getElementById('addbtn');

// function to perform on tasks
function TaskEvent(e)
{
	// check if the event is on input tag ( that is checkbox )
	if(e.target.tagName == 'INPUT')
	{
		//adding line-through
		e.target.parentNode.querySelector('h3').style.textDecoration='line-through';
		// adding to last of the list
		e.target.parentNode.parentNode.appendChild(e.target.parentNode);
		// removing checkbox
		e.target.parentNode.removeChild(e.target.parentNode.querySelector('input'));
	}
	else 	
	{
		// selecting list elemrnt
		var task = e.target.parentNode;
		// removing ( delte button )
		task.parentNode.removeChild(task);			
	}
}

// Function to create a list item
function CreateListItem(){
	// creating list element
    var task = document.createElement('li');
	// checkbox
    var taskCheckBox = document.createElement('INPUT');
    taskCheckBox.setAttribute('type','checkbox');
	task.appendChild(taskCheckBox);
	
	// h3 tag for name
    var taskNameValue = document.createElement('h3');
    taskNameValue.textContent = document.getElementById('taskname').value;
    task.appendChild(taskNameValue);

	// delete button
    var deleteButton = document.createElement('button');
	deleteButton.textContent = "X Delete";
	deleteButton.setAttribute('class','delete');
	task.appendChild(deleteButton);
	// onclick event triggers
    deleteButton.onclick = TaskEvent;
    taskCheckBox.onclick = TaskEvent;

	// adding to list container ordered list
	document.getElementById('listContainer').prepend(task);
    
}
// onclic event trigger for add button
btnAdd.onclick = CreateListItem;