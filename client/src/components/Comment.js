import { useState } from "react";

function Comment({ comments, pic, currentUser, onSubmit, onDelete }) {
  const [formData, setFormData] = useState({
    content: "",
    user_id: currentUser.id,
    picture_id: pic.id,
  });

  const userComments = comments.map((com) => (
    <div key={com.id}>
      <button onClick={() => handleDelete(com)}>x</button>
      {/* Add who posted (when i post, its not associated yet) */}
      {/* <p>{com.user.username}</p> */}
      <p>{com.content}</p>
      <p>{com.created_at.slice(0, 10)}</p>
    </div>
  ));

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newComment) => {
        onSubmit(newComment);
      });

    setFormData({
      content: "",
      user_id: currentUser.id,
      picture_id: pic.id,
    });
  }

  function handleDelete(com) {
    fetch(`/comments/${com.id}`, {
      method: "DELETE",
    })
    .then((res) => {
        if(res.ok) {
            onDelete(com)
        }
    })
  }

  return (
    <>
      <h3>Comments:</h3>
      {userComments}
      <form onSubmit={handleSubmit}>
        <input
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          name="content"
          placeholder="Write a comment"
        />
        <button type="submit">Comment</button>
      </form>
    </>
  );
}

export default Comment;
