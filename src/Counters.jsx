import { useState } from "react"

export default function Counters(){
   const [counter, setCounter] =useState(0)
 const handleAdd = () => {
    const addCount = counter + 1;
    setCounter(addCount);
 }
  const handleSubstract = () =>{
    const minasCount = counter - 1;
    setCounter(minasCount);
  }
  const handleReset = () =>{
    setCounter(0);
  }
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubstract}>Substract</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}