// import React,{useState} from 'react'

// const App = () => {
//   let [count,setCount]= useState(0)
//   let [interval,setinterval]= useState(0)
//   const increment=()=>{
//     setCount(count=count+1)
//   }
//   const decrement=()=>{
//     setCount(count=count-1)
//   }
//   const start=()=>{
//     let interval = setInterval(increment,1000)
//     setinterval( interval= interval )
//   }
//   const stop = ()=>{
//     clearInterval(interval)
//   }
//   return (
//     <div>
//       Count:{count}
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//     </div>
//   )
// }

// export default App

import React, { Component } from "react";

import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="Timers">
          <Stopwatch />
          {/* <Countdown /> */}
        </div>
      </div>
    );
  }
}

export default App;