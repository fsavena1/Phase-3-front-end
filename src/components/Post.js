import React, { useState } from "react";
import EditPost from "./EditPost";

function Post({id, title, body, user, onDelete, onEdit, isEditing, handleUpdatedPost}){
 
 

    function handleDeleteClick() {
        fetch(`http://localhost:9292/posts/${id}`, {
          method: "DELETE"
        })
        onDelete(id)
      }

     


      // click on individual post and comments will show up below 
      //comment component to edit comments and add comment

      
    
    return (
        <li>
         <span className="user" >{user}</span>
         <br />
        <h3>{title}</h3>
        {isEditing ? (
        <EditPost
          id={id}
          body={body}
          title={title}
          handleUpdatedPost={handleUpdatedPost}
        />
      ) : <p>{body}</p> }

        

        <button onClick={onEdit}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
          <br />
          <br />
          
        </li>
      );
    }
    
export default Post