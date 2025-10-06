import { useState } from "react"

export default function Showhide (){
   const [show, setShow] = useState(false);
    return(
        <div>
            <button onClick={()=>setShow(!show)}>{
                show? "Hide": "Show"
                }</button>
                {
                    show && <p>Hello, React Learner!</p>
                }
        </div>
    )
}