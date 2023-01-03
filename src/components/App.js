import React, { useEffect, useState } from "react";
import Header from "./Header"
import PostList from "./PostList"
import NewPost from "./NewPost"

function App() {
  const [posts, setPosts] = useState([])

useEffect(() => {
  fetch("http://localhost:9292/posts")
  .then(res => res.json())
  .then(data => setPosts(data))
},[])





  return (
    <div className="App">
      <h1>Hello!</h1>
      <Header />
      <NewPost />
      <PostList posts={posts} />

      
    </div>
  );
}

export default App;
