import React, { useEffect, useState } from "react";
import Header from "./Header"
import PostList from "./PostList"
import NewPost from "./NewPost"
// import ShowComments from "./ShowComments";
// import NavBar from "./NavBar"
// import { Route, Switch } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(" ")
  const [newUser, setNewUser] = useState(false)



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

// const defaultUser = { user_id: users[0].id } 



function addUser(newUser){
  setUsers([...users,newUser])
  setNewUser(false)
}

function handleDeletePosts(id) {
  const updatedPosts = posts.filter((post) => post.id !== id);
  setPosts(updatedPosts);
}

function handleAddPost(newPost){
  setPosts([...posts, newPost])
}

function handlePostEdit(updatedPost){
  const updatedPosts = posts.map((post) => {
    if(post.id === updatedPost.id){
      return updatedPost;
    }
    return post;
  });
  setPosts(updatedPosts);
}

function handleUpdatedPost(updatedPost) {
  handlePostEdit(updatedPost)
  setIsEditing(false)
}

function handleEditToggle(){
  setIsEditing(!isEditing);
}

function handleUserToggle(){
  setNewUser(!newUser);
}

// figure out front end routes 
// home route shows posts create user route post and comment route 
// clicking on a post updates URL 

  return (
    <div className="App">
{/* 
      <NavBar />

      <Switch> */}
 
      {/* <Route exact path='/'> */}
         <Header addUser={addUser} handleUserToggle={handleUserToggle} newUser={newUser}/>
      {/* </Route> */}

      {/* <Route exact path='/newpost'> */}
         <NewPost onAdd={handleAddPost}  users={users} setUser={setUser}/>
      {/* </Route> */}

   

      {/* <ShowComments posts={posts} /> */}

      {/* <Route exact path='/post'> */}
           <PostList posts={posts} onDelete={handleDeletePosts}  isEditing={isEditing} handleUpdatedPost={handleUpdatedPost} onEdit={handleEditToggle} />
      {/* </Route>

      </Switch> */}
      
    </div>
  );
}

export default App;
