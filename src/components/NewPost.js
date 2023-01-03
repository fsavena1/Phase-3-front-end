import React, { useState } from "react";


function NewPost({onAdd}){
    const [title, setTitle] = useState(" ")
    const [body, setBody] = useState(" ")
    const [user, setUser] = useState(" ")


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
          }),
        })
          .then(res => res.json())
          .then(newPost => onAdd(newPost) )
      }


      // need to figure out how to show placeholders and get something other than user to show up 

      return (
        <form className="new-post" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="user id"
            value={user}
            onChange={e => setUser(e.target.value)}
            />
        <input 
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="body"
            placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
         
          <button type="submit">Send</button>
        </form>
      );
}



export default NewPost