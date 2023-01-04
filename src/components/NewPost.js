import React, { useState } from "react";

function NewPost({ onAdd, users }) {

  const [title, setTitle] = useState(" ");
  const [body, setBody] = useState(" ");
  const [user_id, setUser_id] = useState(1);
 


  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
        user_id: user_id
      }),
    })
      .then((res) => res.json())
      .then((newPost) => onAdd(newPost));
  }




  return (
    <form className="new-post" onSubmit={handleSubmit}>
      
      <select onChange={(e) => setUser_id(e.target.value)}>

        {users.map((user) => (
          <option key={user.id} id={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>

      <input
        placeholder="title"
        type="text"
        name="title"
       
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="body"
        type="text"
        name="body"
        
        onChange={(e) => setBody(e.target.value)}
      />

      <button type="submit">New Post</button>
    </form>
  );
}

export default NewPost;
