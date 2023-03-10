import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ShowComments({ handleCommentToggle, newComment, addComment, users }) {
  const [indPost, setIndPost] = useState(null);
  const [commnetBody, setCommentBody] = useState("");
  const [userID, setUserID] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/posts/${id}`)
      .then((r) => r.json())
      .then((data) => setIndPost(data));
  }, [id]);

  function handleSubmitComment(e) {
    e.preventDefault();

    fetch("http://localhost:9292/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: commnetBody,
        user_id: userID,
        post_id: indPost.id,
      }),
    })
      .then((res) => res.json())
      .then((newComment) => addComment(newComment));
  }

  // console.log(indPost?.comments)

  const nav = useNavigate();



   const newArray = indPost?.comments.map(comment =>  <p key={comment.id}> {comment.body}</p>);

   const newArray1 = indPost?.comments.map(comment =>  <p key={comment.id}> - {comment.user.username}</p>);
  
  

  return (
    <ul>
      <li>
        <h1>{indPost?.user_id}</h1>
        <h2>{indPost?.title}</h2>
        <h3>{indPost?.body}</h3>
        <div className="comment-div">

          <p> {newArray1}</p>
          <p> {newArray}</p>

        </div>
        
        {newComment ? (
          <form className="new-comment" onSubmit={handleSubmitComment}>
            <select onChange={(e) => setUserID(e.target.value)}>
              {users.map((user) => (
                <option key={user.id} id={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="comment"
              onChange={(e) => setCommentBody(e.target.value)}
            />
            <input type="submit" value="Save" />
          </form>
        ) : null}

        <button className="add comment" onClick={handleCommentToggle}>
          Add comment
        </button>
        <button className="back-btn" onClick={() => nav("/")}>
          Back
        </button>
        <br />
        <br />
      </li>
    </ul>
  );
}

export default ShowComments;
