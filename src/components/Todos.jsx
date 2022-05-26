import React, { useState, useEffect } from "react";
//  import styles from './Todos.module.css'
import axios from "axios";

const Todos = () => {
    const [todos,setTodos] =useState([]);
    const [newTodo,setNewTodo]=useState("")
    const [page,setPage]=useState(1)
    const [totalCount,setTotalCount]=useState(0)
    const [limit,setLimit]=useState();

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
      axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`).then((r)=>{
            setTodos(r.data);
            setTotalCount(Number(r.headers["x-total-count"]))
        })
    },[page,limit])
  return (
    <div>
        <button disabled={page <=1}onClick={()=>setPage(page-1)}>{`<`}</button>

       {/* <select onChange={(e)=>setLimit(Number(e.target.value))}> */}
         {/* <option value="5">5</option>
           <option value="10">10</option>
         <option value="20">20</option>
         <option value="30">30</option>
        </select> */}
        <input type="number" 
        value={limit} 
        min={0}
        max={totalCount}
        onChange={({target})=>setLimit(Number(target.value))}/>
        
       <button disabled={ totalCount<page*limit}
       onClick={()=>setPage(page+1)}>{`>`}</button>
       <div>
           <input 
           value ={newTodo}
           onChange={({target})=>setNewTodo(target.value)}
           />
           <button onClick={saveInfo}>Save</button>
       </div>
       
        <div>
        {todos.map((todo)=>(
                <div key={todo.id}> {todo.id}{` : `}{todo.title} </div>
            
        ))}
        
        </div>
    </div>
  )
}

export default Todos;