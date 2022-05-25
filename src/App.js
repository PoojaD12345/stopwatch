import "./App.css";
import React from "react";
import Todos from "./components/Todos";

// import React, { useState, useEffect } from "react";
// let A =() =>  <div  onClick={()=>
//    setCount(count+1)}>Components A</div>;
// let B =() =><div>Components B</div>;

function App() {
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // fetch ("https://m6g3bt.sse.codesandbox.io/")
  //   .then ((r)=>r.json())
  //   .then((d)=>{
  //     console.log(d);
  //   });
  // useEffect(() => {
  //  console.log(2);
  // },[]);
  return (
 <div className="App">
      {/* <div>
      <div className="App" onClick={()=> setCount1(count1+1)}>Counter1:{count1}</div>
    </div>

    <div>
      <div className="App" onClick={()=> setCount2(count2+1)}>Counter1:{count2}</div>
    </div> */}
    {/* <div className="App">App</div> */}
    <Todos />
 </div>
  );
}

export default App;