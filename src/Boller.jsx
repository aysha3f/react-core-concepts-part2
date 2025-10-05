import { useState } from "react"

export default function Boller () {
   const [balls, setBalls] = useState(0);
   const ballsCount = () => {
    const updatedBalls = balls + 1;
    setBalls(updatedBalls);
     
   }
    const noBalls = () =>{
        const updatedBalls =balls+ 1;
        setBalls(updatedBalls);
    }
    
    return(
        <div>
            <h1>Boll: {balls}</h1>
            <button onClick={ballsCount}>Boll Count</button>
            <button onClick={noBalls}>No Ball</button>
            <button>White Ball</button>
        </div>
    )
}