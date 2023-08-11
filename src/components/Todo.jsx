import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AiOutlineFileDone } from 'react-icons/ai'

function Todo({ todo, onDelete }) {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () => {
        setIsCompleted(!isCompleted);
    };

    const todoStyle = {
        textDecoration: isCompleted ? 'line-through' : 'none',
    };

  return (
    <div className='border border-2 w-100 py-1 mb-2 px-3 d-flex align-items-center justify-content-between container'>
        <h5 style={todoStyle}>{todo.title}</h5>
        <div>
            <button className='btn btn-primary me-2' onClick={handleComplete}><AiOutlineFileDone /></button>
            <button className='btn btn-danger' onClick={() => onDelete(todo.id)}><FaTrash /></button>
        </div>
    </div>
  )
}

export default Todo