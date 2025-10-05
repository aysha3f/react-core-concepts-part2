import { use } from "react";
import Post from "./post";
export default function Posts ({postsPromise}){
    console.log(postsPromise);
    const posts = use(postsPromise);
    console.log(posts)
    return(
        <div className="card">
            <h2>All Posts Are Here: {posts.length}</h2>
            {
                posts.map(post => <Post post ={post}></Post>)
            }
        </div>
    )
}