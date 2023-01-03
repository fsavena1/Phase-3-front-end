import React, { useEffect, useState } from "react";
import Header from "./Header"
import PostList from "./PostList"
import NewPost from "./NewPost"
// import NavBar from "./NavBar"
// import { Route, Switch } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

useEffect(() => {
  fetch("http://localhost:9292/posts")
  .then(res => res.json())
  .then(data => setPosts(data))
},[])

useEffect(() => {
  fetch("http://localhost:9292/users")
  .then(res => res.json())
  .then(data => setUsers(data))
}, [])

console.log(users)

function addUser(newUser){
  setUsers([...users,newUser])
}




function handleDeletePosts(id) {
  const updatedPosts = posts.filter((post) => post.id !== id);
  setPosts(updatedPosts);
}


function handleAddPost(newPost){
  setPosts([...posts, newPost])
}

// figure out front end routes 

// home route shows posts create user route 

// clicking on a post updates URL 

  return (
    <div className="App">
 
      <Header addUser={addUser} />
      <NewPost onAdd={handleAddPost}  users={users}/>
      <PostList posts={posts} onDelete={handleDeletePosts} />

      
    </div>
  );
}

export default App;
