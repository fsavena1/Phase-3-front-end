import EditPost from "./EditPost";
import {useNavigate} from "react-router-dom"

function Post({id, title, body, user, onDelete, onEdit, isEditing, handleUpdatedPost}){
 
 

    function handleDeleteClick() {
        fetch(`http://localhost:9292/posts/${id}`, {
          method: "DELETE"
        })
        onDelete(id)
      }

     let navigate = useNavigate()



      
    
    return (
        <li >
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
        <button onClick={() => navigate(`/post/${id}`) }>View post</button>
          <br />
          <br />
          
        </li>
      );
    }
    
export default Post