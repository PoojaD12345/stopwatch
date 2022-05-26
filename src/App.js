import "./App.css";
import React, { useState } from "react";
import Todos from "./components/Todos";
// import Timer from "./components/Timer";
// import Stopwatch from "./components/Stopwatch";



function App() {
  // const [show,setShow]=useState(true)
  return (
 <div className="App">
 {/* {show ?  <Timer/> : "App"} */}
    <Todos />
  {/* <Stopwatch/> */}
   
   
 </div>
  );
}

export default App;