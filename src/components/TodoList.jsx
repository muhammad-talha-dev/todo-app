import React, { useState } from 'react'
import Todo from './todo';

function TodoList() {
    const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  const addTodo = () => {
    if (todoTitle.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: todoTitle }]);
      setTodoTitle('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };


  return (
    <>
        <div className='container'>
            <div className='d-flex mb-3'>
                <input type="text" className='w-100 px-3' placeholder='Add a task' value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} name="input" id="input" />
                <input type="submit" className='btn btn-info ms-3' value="Add" onClick={addTodo} />
            </div>
            <div>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />
            ))}
            </div>
        </div>
    </>
  )
}

export default TodoList