import React, { useState, useEffect } from "react";
//  import styles from './Todos.module.css'

const Todos = () => {
    const [todos,setTodos] =useState([]);
    const [newTodo,setNewTodo]=useState("")

    const saveInfo =()=>{
        fetch ("http://localhost:8080/todos",{
        method :"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({
            title:newTodo,
            isCompleted:false,
        }),
    })
        .then((r)=>r.json())
        .then((d)=>{
            setNewTodo([...todos,d]);
            setNewTodo("");
        });
    };

    useEffect (()=>{
        fetch("http://localhost:8080/todos?_page=2&_limit=5")
        .then((r)=>r.json())
        .then((d)=>{
            setTodos(d);
        })
    },[])
  return (
    <div>Todos
       <div>
           <input 
           value ={newTodo}
           onChange={({target})=>setNewTodo(target.value)}
           />
           <button onClick={saveInfo}>Save</button>
       </div>
       
        <div>
        {todos.map((todo)=>(
                <div key={todo.id}>{todo.title} </div>
            
        ))}
        </div>
    </div>
  )
}

export default Todos;