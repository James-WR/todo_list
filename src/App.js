import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid'
import './App.css';
import TodoList from './components/TodoList.js';

function App() {
  const [tasks, setTasks] = useState([])
  const taskRef = useRef()

  function addTask() {
    const name = taskRef.current.value
    if (name === "") return
    setTasks(prev => {
      return [...prev, { id: nanoid(), name: name, completed: false, toggleCompleted: toggleCompleted}]
    })
    taskRef.current.value = null
  }

  function toggleCompleted(id) {
    setTasks(prev => prev.map(task => {
      return task.id === id ?
        { ...task, completed: !task.completed } :
        task
    }))
  }

  return (
    <main>
      <h1 className="main-title">To Do List</h1>
      <div className="todo-form">
        <input placeholder='Add a new task' ref={taskRef}></input>
        <button onClick={addTask}>Add Task</button>
        <button> Clear Completed</button>
      </div>
      <TodoList tasks={tasks}/>
    </main>
  );
}

export default App;
