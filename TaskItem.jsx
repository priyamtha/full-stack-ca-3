import React from 'react'

function TaskItem({Name,Age,Dob}) {
  return (
    <div>
      <p> {Name}</p>
      <p> {Age}</p>
      <p>{Dob}</p>


    </div>
  )
}

export default TaskItem
