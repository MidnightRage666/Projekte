// get the variables
const err = document.querySelector(".err");
const inputTask = document.getElementById("input-task");
const addTaskBtn = document.getElementById("add-task");
const inputSearch = document.getElementById("search-input");
const taskList = document.querySelector(".task-list");
const clearAllBtn = document.querySelector(".clear-all");

// add a task
//? click on add task
addTaskBtn.addEventListener('click', addTaskFun)
function addTaskFun(e)
{
    e.preventDefault();
    
    //! check if input Task is not empty
    if (inputTask.value !== "")
    {
        //! get out input value and trim
        const taskText = inputTask.value;
        //! create a new li
        const newLi = document.createElement("li");
        newLi.className = "task";
        //! create an input filed -> type of text, disabled, class name of disabled-task
        const taskInput = document.createElement("input");
        taskInput.type = "text";
        taskInput.disabled = true;
        taskInput.className = "disabled-task"
        //! put the input trimmed value into the disabled task input
        taskInput.value = taskText;
        //! put the input filed that contain the task into the new li
        newLi.appendChild(taskInput);
        //! create the delete btn and -> class of delete btn, text of delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "deleteBtn"
        //! put the delete btn into the li
        newLi.appendChild(deleteBtn);
        //! create an edit btm with class of edit btn
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.className = "editBtn";
        //! put the edit btn into the li too
        newLi.appendChild(editBtn);
        //! put the new li that contains all the information into the task list
        taskList.appendChild(newLi);
        //! clear the input task
        inputTask.value = ""
    }
    else
    {
        err.style.display = "block";
        setTimeout(() => {
            err.style.display = "none"
        }, 2000);
    }
}

// delete a task
//! onclick on the parent
taskList.addEventListener("click", deleteFun);
function deleteFun(e)
{
    e.preventDefault();
    
    //! check if the clicked target is a delete button
    if(e.target.classList.contains("deleteBtn"))
        {
            //! get the parent of that delete button
            //! remove the parent
            e.target.parentElement.remove();
        }
}

// clear all
clearAllBtn.addEventListener("click", e => {
    e.preventDefault();

    taskList.innerHTML = "";
});

// edit a task
taskList.addEventListener("click", editFun);
function editFun(e)
{
    e.preventDefault();

    if(e.target.classList.contains("editBtn"))
    {
        taskInput = e.target.parentElement.querySelector(".disabled-task");

        taskInput.disabled = false;
        taskInput.focus();

        taskInput.addEventListener("keydown", function(event)
        {
            if(event.key === "Enter")
            {
                taskInput.disabled = true;
            }
        });

        taskInput.addEventListener("blur", function()
        {
            taskInput.disabled = true;
        });
    }
}
// search task
