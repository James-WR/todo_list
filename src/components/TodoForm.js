import React from 'react'

export default function TodoForm() {
  return (
    <div className="todo-form">
      <input placeholder='Add a new task'></input>
      <button>Add Task</button>
      <button>Clear Completed</button>
    </div>
  )
}
