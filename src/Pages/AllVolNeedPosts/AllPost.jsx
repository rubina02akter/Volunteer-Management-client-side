import { useEffect, useState } from "react";
import AllPostCard from "./AllPostCard";

const AllPost = () => {
  const[posts, setPosts] = useState([]);

  useEffect(()=>{
    //fetch all posts
    fetch('http://localhost:5000/posts')
    .then(res=>res.json())
    .then(data=>{
      setPosts(data)
    })
    console.log(posts)
  },[])


  return (
    <div>
      <h2>Post length {posts.length}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {
          posts.map(post=><AllPostCard key={post._id} post={post}></AllPostCard>)
        }
      </div>
    </div>
  );
};

export default AllPost;