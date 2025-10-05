import { use } from "react"

export default function Friends ({friendsPromise}){
   const friends = use(friendsPromise);
   console.log(friends);
    return(
      <div className="card">
        <h3>Friends: </h3>
      </div>  
    )
}