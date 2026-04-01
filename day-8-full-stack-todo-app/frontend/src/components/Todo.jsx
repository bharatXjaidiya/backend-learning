import React from 'react'
import axios from 'axios'
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

const Todo = ({ title, description, isCompleted, createdAt, url, _id, fetchTodos,setTitle,setDescription }) => {
    const todoColors = [
        {
            bg: "#0B1220",              // dark card
            title: "#E2E8F0",
            description: "#94A3B8",
            border: "#38BDF8",          // accent highlight
            buttons: {
                edit: "#38BDF8",
                delete: "#EF4444",
                complete: "#22C55E"
            }
        },
        {
            bg: "#0B1220",
            title: "#E2E8F0",
            description: "#94A3B8",
            border: "#22C55E",          // success highlight
            buttons: {
                edit: "#38BDF8",
                delete: "#EF4444",
                complete: "#22C55E"
            }
        },
        {
            bg: "#0B1220",
            title: "#E2E8F0",
            description: "#94A3B8",
            border: "#A78BFA",          // subtle purple accent
            buttons: {
                edit: "#38BDF8",
                delete: "#EF4444",
                complete: "#22C55E"
            }
        }
    ];

    const randomColor = todoColors[Math.floor(Math.random() * todoColors.length)];

    async function handleDelete(id) {
        const response = await axios.delete(`${url}/api/todos/${id}`)
        fetchTodos()
    }

    async function handleComplete(id, currentStatus) {
        try {
            await axios.put(`${url}/api/todos/${id}`, {
                isCompleted: !currentStatus, title, description
            });

            fetchTodos(); // acceptable for now

        } catch (error) {
            console.error("Error updating todo:", error);
        }
    }
async function handleEdit(id){
          handleDelete(id)
          setTitle(title)
          setDescription(description)
}
    
    return (
        <div
            style={{
                backgroundColor: randomColor.bg,
                border: `2px solid ${randomColor.border}`
            }}
            className={`todo flex justify-between mb-2.5 rounded px-3 py-1 ${isCompleted ? "opacity-50 line-through" : ""}`}
        >
            <div className="todo-left">
                <h1 style={{ color: randomColor.title }} className="title text-xl font-semibold capitalize">{title}</h1>
                <p style={{ color: randomColor.description }} className='description capitalize'>{description}</p>
            </div>
            <div className="todo-right flex items-center gap-3 text-xl">
                {/* Edit */}
                <FaEdit onClick={()=>{
                    handleEdit(_id)
                }}
                    style={{ color: randomColor.buttons.edit }}
                    className="cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80"
                />

                {/* Complete */}
                <FaCheck onClick={(e) => {
                    handleComplete(_id, isCompleted)
                }}
                    style={{ color: randomColor.buttons.complete }}
                    className={`cursor-pointer transition duration-200 hover:scale-110`}
                />

                {/* Delete */}
                <FaTrash onClick={(e) => {
                    handleDelete(_id)
                }}
                    style={{ color: randomColor.buttons.delete }}
                    className="cursor-pointer transition duration-200 hover:scale-110"
                />
            </div>
        </div>
    )
}

export default Todo
