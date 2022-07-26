import React from 'react';
import Todo from './Todo'

export default function TodoList(props) {
  const todoElements = props.tasks.map(task => {
    return <Todo key={task.id} id={task.id} name={task.name} completed={task.completed}
    toggleCompleted={task.toggleCompleted} deleteTask={task.deleteTask}/>
  })
  return (
    <div className="todo-container">
      {todoElements}
    </div>
  )
}
