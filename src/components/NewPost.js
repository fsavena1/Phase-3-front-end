import React, { useState } from "react";


function NewPost({onAdd, users}){
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

      const options =  users.forEach(user => {
        <option value={user}>{user}</option>
      })


      // need to figure out how to show placeholders and get something other than user to show up 

      return (
        <form className="new-post" onSubmit={handleSubmit}>
          {/* how to set user in options for each user create an option */}
          <select>
            
            onChange={e => setUser(e.target.value)}
           <options>{options}</options>
            
            </select>
        <input 
        placeholder="title"
            type="text"
            name="title"
            
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
          placeholder="body"
            type="text"
            name="body"
            
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
         
          <button type="submit">Send</button>
        </form>
      );
}



export default NewPost