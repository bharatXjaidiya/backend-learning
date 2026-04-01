import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import axios from 'axios'
import Todo from './components/Todo';
const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
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

  async function handleSubmit(e){
    e.preventDefault()
    const data = {title,description}
    const response = await axios.post(`${url}/api/todos`,data);

    if(response.data.success){
      console.log(response.data.message)
      fetchTodos()
    }
    else{
      console.log(response.data.message)
    }

    setTitle("")
    setDescription("")
  }

  function changeHandler(e){
    if(e.target.name === "title"){
      setTitle(e.target.value)
    }
    else if(e.target.name === "description"){
      setDescription(e.target.value)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])


  return (
    <>
      <Header />
      <main className='min-h-[90vh]' id='main'>

        <div className="todos px-3 py-2 min-h-[78vh] max-h-[78vh] overflow-y-scroll mb-3">
          {todos.map((todo)=>{
          return <Todo key={todo._id} title={todo.title} description = {todo.description} isCompleted = {todo.isCompleted} createdAt = {todo.createdAt}/>
        })}
        </div>

        <div className="addTodo">
          <form className='flex justify-center gap-2' onSubmit={handleSubmit}>

            <input type="text" placeholder='Title' value={title} name = "title" onChange={(e)=>{changeHandler(e)}} className='text-white border-2 rounded-2xl px-3 py-2 text-center border-gray-400'/>

            <input type="text" placeholder='Description' value={description} name="description" onChange={(e)=>{changeHandler(e)}} className='text-white border-2 rounded-2xl px-3 py-2 text-center border-gray-400' />

            <button className='add-todo text-white border-none rounded-2xl px-4 py-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 ml-2 hover:px-5 hover:py-3 transition-all'>Add Todo</button>
          </form>
          
        </div>
        
      </main>



    </>
  )
}

export default App
