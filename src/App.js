import React, { useState, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid'
import TodoList from './components/TodoList.js';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([])
  const taskRef = useRef()

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todos"))
    const addToggleFunction = savedTasks.map(task => {
      return {...task, toggleCompleted: toggleCompleted, deleteTask: deleteTask}
    })
    setTasks(addToggleFunction)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks))
  }, [tasks])

  function addTask() {
    const name = taskRef.current.value
    if (name === "") return
    setTasks(prev => {
      return [...prev, { id: nanoid(), name: name, completed: false, toggleCompleted: toggleCompleted, deleteTask: deleteTask}]
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

  function clearCompleted() {
    setTasks(prev => prev.filter(task => !task.completed))
  }

  function deleteTask(e, id) {
    e.stopPropagation()
    setTasks(prev => prev.filter(note => note.id !== id))
  }

  return (
    <main>
      <h1 className="main-title">To Do List</h1>
      <div className="todo-form">
        <input placeholder='Add a new task' ref={taskRef}></input>
        <button className="todo-button" style={{ backgroundColor: "rgb(16, 255, 144)" }} onClick={addTask}><strong>Add Task</strong></button>
        <button className="todo-button" style={{ backgroundColor: "rgb(235, 184, 184)" }} onClick={clearCompleted}><strong>Clear Completed</strong></button>
      </div>
      <TodoList tasks={tasks}/>
    </main>
  );
}

export default App;
