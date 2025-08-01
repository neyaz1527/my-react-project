import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["eat break fast", "take a shower"]);
  const [newTask, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }
  function addTask() {
    if(newTask.trim() !==""){
        setTasks(t => [...t, newTask]);
        setNewTasks("");
    }
  }
  // function deleteTask(index) {
  //   const updatedTasks = tasks.filter((_, i) => i !== index);
  //   setTasks(updatedTasks);
  // }
  // function moveTaskUp(index) {
  //   if(index>0){
  //     const updatedTasks = [...tasks];
  //     [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
  //     setTasks(updatedTasks);
  //   }
  // }
  // function moveTaskDown(index) {
  //   if(index < tasks.length - 1){
  //     const updatedTasks = [...tasks];
  //     [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
  //     setTasks(updatedTasks)
  //   }
  // }


  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task ..."
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button className="add-button" onClick={addTask}>
          Add task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
            <button className="move-button" onClick={()=>moveTaskUp(index)}>up</button>
            <button className="down-button" onClick={()=>moveTaskDown(index)}>down</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
