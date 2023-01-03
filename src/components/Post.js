function Post({id, title, body, user, date, onDelete, comments}){

    function handleDeleteClick() {
        fetch(`http://localhost:9292/posts/${id}`, {
          method: "DELETE"
        })
        onDelete(id)
      }

      // how to populate user now just user_id
      // click on individual post and comments will show up below 
      //comment component to edit comments and add comment
      // make edit button
    
    return (
        <li>
         <span className="user" >user {user}</span>
         <br />
        <h3>{title}</h3>
        <p>{body}</p>
          <button onClick={handleDeleteClick}>Delete</button>
          <br />
          <br />
          
        </li>
      );
    }
    
export default Post