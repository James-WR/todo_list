import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Todo(props) {
  const styles = {
    backgroundColor: props.completed ? "#8fff86" : "lightblue",
  }
  return (
    <div className="todo" onClick={() => props.toggleCompleted(props.id)} style={styles}>
      <p className="todo-text">{props.name}</p>
      <div className="todo-customise">
        {props.completed && <FontAwesomeIcon icon={faCheck} className="tick-icon"/>}
        <p>Edit</p>
        <p>Delete</p>
      </div>
    </div>
  )
}
