import React from 'react'
import TodoList from './components/todoList'
// import GptTodoList from './components/gptTodoList'

function App() {
  return (
    <>
      <div className='text-center py-5'>
        <h1>TODO APP</h1>
      </div>
      <TodoList />
      {/* <GptTodoList /> */}
    </>
  )
}

export default App