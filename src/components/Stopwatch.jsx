import React, { useRef } from 'react'
import { useState } from 'react'


function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
  console.log(msToTime(300000))

const Stopwatch = () => {
    // const [timerId,setTimerId]=useState(null)
    const [watch,setWatch]=useState(1000)
    const timerId=useRef(null);
    console.log(timerId)

    const start =()=>{
      console.log(timerId)
       if(!timerId.current){
        let id=setInterval(()=>{
            setWatch((prev)=>prev+1000);
        },1000)
        timerId.current=id
        // setTimerId(id)
       }
    };
    const pause =()=>{
       clearInterval(timerId.current)
       timerId.current=null;
      //  setTimerId(null)
    };
    const reset =()=>{
        clearInterval(timerId.current);
        setWatch(0)
        timerId.current=null;
    };
  return (
    <div>
        <h2>Stopwatch</h2>
        <h2>{msToTime(watch)}</h2>
        <div>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>
        </div>
     
    </div>
  )
}

export default Stopwatch