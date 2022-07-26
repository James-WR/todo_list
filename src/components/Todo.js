import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Todo(props) {
  const styles = {
    backgroundColor: props.completed ? "#8fff86" : "lightblue",
  }
  return (
    <div className="todo" onClick={() => props.toggleCompleted(props.id)} style={styles}>
      <div className="todo-tick-and-text">
        <p className="todo-text">{props.name}</p>
        {props.completed && <FontAwesomeIcon icon={faCheck} className="tick-icon"/>}
      </div>
      <div className="delete-button" onClick={(e) => props.deleteTask(e, props.id)}>
        <FontAwesomeIcon icon={faTrash} className="bin-icon" />
      </div>
    </div>
  )
}
