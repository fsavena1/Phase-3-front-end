import React, { useState } from "react";

function EditPost({ id, body, title, handleUpdatedPost }) {
  const [postBody, setPostBody] = useState(body);
  const [postTitle, setPostTitle] = useState(title);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedPost) => handleUpdatedPost(updatedPost));
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="title"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <input
        type="text"
        name="body"
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditPost;
