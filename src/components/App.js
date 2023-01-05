import React, { useEffect, useState } from "react";
import Header from "./Header";
import PostList from "./PostList";
import NewPost from "./NewPost";
import ShowComments from "./ShowComments"
import { Route, Routes } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(" ");
  const [newUser, setNewUser] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


  useEffect(() => {
    fetch("http://localhost:9292/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  function addComment(comment){
    setComments(...comments, comment)
    setNewComment(false)
  }

  function handleCommentToggle() {
    setNewComment(!newComment)
  }

  function addUser(newUser) {
    setUsers([...users, newUser]);
    setNewUser(false);
  }

   function handleUserToggle() {
    setNewUser(!newUser);
  }

  function handleDeletePosts(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  function handleAddPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function handlePostEdit(updatedPost) {
    const updatedPosts = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      }
      return post;
    });
    setPosts(updatedPosts);
  }

  function handleUpdatedPost(updatedPost) {
    handlePostEdit(updatedPost);
    setIsEditing(false);
  }

  function handleEditToggle() {
    setIsEditing(!isEditing);
  }


  return (
    <div className="App">
     

      <Header
              addUser={addUser}
              handleUserToggle={handleUserToggle}
              newUser={newUser}
            />

      <Routes>
      
        <Route
          exact
          path="/"
          element={
            <div>
              <NewPost onAdd={handleAddPost} users={users} setUser={setUser} /> 
              <PostList
              posts={posts}
              onDelete={handleDeletePosts}
              isEditing={isEditing}
              handleUpdatedPost={handleUpdatedPost}
              onEdit={handleEditToggle}
            />
              </div>
          
          }
        />

        <Route 
        exact path ="/post/:id"
        element={
        <ShowComments
        handleCommentToggle={handleCommentToggle}
        addComment={addComment}
        newComment={newComment}
        users={users}
        
        />} 
        />
      </Routes>
    </div>
  );
}

export default App;
