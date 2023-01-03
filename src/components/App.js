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


function handleDeletePosts(id) {
  const updatedPosts = posts.filter((post) => post.id !== id);
  setPosts(updatedPosts);
}


function handleAddPost(newPost){
  setPosts([...posts, newPost])
}


  return (
    <div className="App">
 
      <Header />
      <NewPost onAdd={handleAddPost} />
      <PostList posts={posts} onDelete={handleDeletePosts} />

      
    </div>
  );
}

export default App;
