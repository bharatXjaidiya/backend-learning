import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import axios from 'axios'
import Todo from './components/Todo';
const App = () => {
  const [todos, setTodos] = useState([]);
  const url = "http://localhost:3000"

  async function fetchTodos() {
      const response = await axios.get(`${url}/api/todos`);
      if(response.data.success){
        setTodos(response.data.data)
      }
      else{
        console.log(response.data.message)
      }
  }

  useEffect(() => {
    fetchTodos()
  }, [])


  return (
    <>
      <Header />
      <main className='min-h-[90vh]' id='main'>

        <div className="todos px-1 py-2 min-h-[78vh]">
          {todos.map((todo)=>{
          return <Todo key={todo._id} title={todo.title} description = {todo.description} isCompleted = {todo.isCompleted} createdAt = {todo.createdAt}/>
        })}
        </div>

        <div className="addTodo">
          <form className='flex justify-center gap-2'>
            <input type="text" placeholder='Title' className='text-white border-2 rounded-2xl px-3 py-2 text-center border-gray-400'/>
            <input type="text" placeholder='Description' className='text-white border-2 rounded-2xl px-3 py-2 text-center border-gray-400' />

            <button className='add-todo text-white border-none rounded-2xl px-4 py-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 ml-2 hover:px-5 hover:py-3 transition-all'>Add Todo</button>
          </form>
          
        </div>
        
      </main>



    </>
  )
}

export default App
