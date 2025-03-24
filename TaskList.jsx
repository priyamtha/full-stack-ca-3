
// src/components/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

function TaskList() {
    const data  = [
        {
            Name : "priya",
            Age : "18",
            Dob : "15/11/2006"

        },
        {
            Name : "sai",
            Age : "18",
            Dob : " 23/01/2007"

        },
        {
            Name : "Megha",
            Age : "19",
            Dob : "23/12/2005"
        }
    ]

    return (
       
        <>
        {
            data.map ((item,ind)=>
                TaskItem= key {ind} {...item}
            )
        }
      
        </>
    );
}

export default TaskList;
