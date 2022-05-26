import React,{useState,useEffect} from 'react'

const Timer = () => {

    const [timer,setTimer]=useState(0)

    useEffect(()=>{
        let id=setInterval(()=>{
            if(timer<100){
                // clearInterval(id)
            }
            else{
                setTimer(timer-1)
            } 
        },1000)

        return()=>{
            clearInterval(id)
        }

    },[timer])
  return (
    <div>Count down:{timer}
    {/* <button onClick={()=>setTimer((timer)=>timer+1)}>+</button>
    <button onClick={()=>setTimer((timer)=>timer-1)}>-</button> */}
    </div>
  )
}

export default Timer