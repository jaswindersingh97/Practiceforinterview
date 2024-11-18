import React, { useState } from "react";
import styles from "./ToDoList.module.css";

function ToDoList() {
  const [todoList, SetTodoList] = useState([]);
  const [task, setTask] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Track the index of the task being edited

  const addTask = () => {
    if (task.trim()) {
      SetTodoList((prevList) => [task, ...prevList]);
      setTask("");
    }
  };

  const editTask = (index) => {
    setEditText(todoList[index]);
    setEditModal(true);
    setEditIndex(index); // Store the index of the task being edited
  };

  const saveChanges = () => {
    SetTodoList((prevList) =>
      prevList.map((item, index) =>
        index === editIndex ? editText : item // Update only the edited task
      )
    );
    setEditModal(false); // Close the modal
    setEditText("");
    setEditIndex(null); // Reset the index
  };

  const DeleteTask = (index) => {
    SetTodoList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className={styles.body}>
        {todoList.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => DeleteTask(index)}>Delete</button>
            </div>
          );
        })}
      </div>
      {editModal && (
        <div className={styles.editModal}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={saveChanges}>Save</button>
        </div>
      )}
    </div>
  );
}

export default ToDoList;
